// 刷题应用主逻辑
const app = {
    // 应用状态
    state: {
        currentPage: 'home',
        selectedGrade: null,
        selectedSemester: null,
        currentQuestions: [],
        currentIndex: 0,
        userAnswers: [],
        selectedOption: null,
        startTime: null,
        timerInterval: null,
        elapsedSeconds: 0
    },

    // 学期名称映射
    semesterNames: {
        'upper': '上册',
        'lower': '下册'
    },

    // 初始化
    init() {
        this.bindEvents();
        this.updateStatsUI();
        this.checkResumePractice();
    },

    // 绑定事件
    bindEvents() {
        // 年级选择
        document.querySelectorAll('.grade-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.grade-btn').forEach(b => b.classList.remove('selected'));
                e.target.classList.add('selected');
                this.state.selectedGrade = parseInt(e.target.dataset.grade);
                document.getElementById('semester-selector').style.display = 'block';
            });
        });

        // 学期选择
        document.querySelectorAll('.semester-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!this.state.selectedGrade) {
                    alert('请先选择年级！');
                    return;
                }
                document.querySelectorAll('.semester-btn').forEach(b => b.classList.remove('selected'));
                e.target.classList.add('selected');
                this.state.selectedSemester = e.target.dataset.semester;
                this.startPractice();
            });
        });

        // 错题本筛选
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.renderWrongList(e.target.dataset.filter);
            });
        });
    },

    // 检查是否有未完成的练习
    checkResumePractice() {
        const practiceState = Storage.getPracticeState();
        if (practiceState) {
            const resume = confirm('检测到未完成的练习，是否继续？');
            if (resume) {
                this.state = { ...this.state, ...practiceState };
                this.showPage('practice');
                this.renderQuestion();
            } else {
                Storage.clearPracticeState();
            }
        }
    },

    // 切换页面
    showPage(pageName) {
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        // 显示目标页面
        document.getElementById(`${pageName}-page`).classList.add('active');
        this.state.currentPage = pageName;

        // 页面特定初始化
        if (pageName === 'home') {
            this.updateStatsUI();
        } else if (pageName === 'wrong') {
            this.renderWrongList('all');
        } else if (pageName === 'history') {
            this.renderHistory();
        }
    },

    // 开始练习
    startPractice() {
        // 生成题目
        this.state.currentQuestions = generateDailyQuestions(
            this.state.selectedGrade, 
            this.state.selectedSemester
        );
        
        if (this.state.currentQuestions.length === 0) {
            alert('该年级题目暂未提供，已完成七年级上册第一批题目！');
            return;
        }

        // 重置状态
        this.state.currentIndex = 0;
        this.state.userAnswers = [];
        this.state.selectedOption = null;
        this.state.elapsedSeconds = 0;
        this.state.startTime = Date.now();

        // 设置页面标题
        const gradeName = `${this.state.selectedGrade}年级${this.semesterNames[this.state.selectedSemester]}`;
        document.getElementById('practice-title').textContent = `${gradeName} 每日打卡`;

        // 延迟显示
        setTimeout(() => {
            this.showPage('practice');
            this.startTimer();
            this.renderQuestion();
        }, 200);
    },

    // 开始计时
    startTimer() {
        clearInterval(this.state.timerInterval);
        this.state.timerInterval = setInterval(() => {
            this.state.elapsedSeconds++;
            const minutes = Math.floor(this.state.elapsedSeconds / 60);
            const seconds = this.state.elapsedSeconds % 60;
            document.getElementById('timer').textContent = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    },

    // 停止计时
    stopTimer() {
        clearInterval(this.state.timerInterval);
    },

    // 渲染当前题目
    renderQuestion() {
        const question = this.state.currentQuestions[this.state.currentIndex];
        const totalQuestions = this.state.currentQuestions.length || 50;

        // 更新进度
        document.getElementById('question-counter').textContent = 
            `${this.state.currentIndex + 1}/${totalQuestions}`;

        // 显示科目标签
        const subjectColors = {
            '语文': '#667eea',
            '数学': '#764ba2',
            '英语': '#f93e55',
            '科学': '#4CAF50',
            '社会': '#FF9800'
        };
        const subjectTag = document.getElementById('subject-tag');
        subjectTag.textContent = question.subject;
        subjectTag.style.background = subjectColors[question.subject] || '#667eea';

        // 显示题目
        document.getElementById('question-text').textContent = question.question;

        // 显示选项
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.textContent = option;
            optionEl.dataset.index = index;
            optionEl.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionEl);
        });

        // 重置状态
        this.state.selectedOption = null;
        document.getElementById('feedback').style.display = 'none';
        document.getElementById('submit-btn').disabled = false;
        document.getElementById('submit-btn').style.display = 'block';

        // 保存练习状态
        this.savePracticeState();
    },

    // 选择选项
    selectOption(index) {
        if (document.getElementById('feedback').style.display === 'block') return;
        
        this.state.selectedOption = index;
        document.querySelectorAll('.option').forEach((el, i) => {
            el.classList.toggle('selected', i === index);
        });
    },

    // 提交答案
    submitAnswer() {
        if (this.state.selectedOption === null) {
            alert('请先选择一个答案！');
            return;
        }

        const question = this.state.currentQuestions[this.state.currentIndex];
        const selectedOptionText = question.options[this.state.selectedOption];
        const selectedAnswer = selectedOptionText.charAt(0); // 'A', 'B', 'C', 'D'
        const correctAnswer = question.answer;
        const isCorrect = selectedAnswer === correctAnswer;

        // 记录答案
        this.state.userAnswers.push({
            questionId: question.id,
            selected: selectedAnswer,
            correct: correctAnswer,
            isCorrect: isCorrect
        });

        // 如果是错题，加入错题本
        if (!isCorrect) {
            Storage.addWrongQuestion(question, selectedAnswer);
        }

        // 显示反馈
        this.showFeedback(isCorrect, question);

        // 禁用提交按钮
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('submit-btn').style.display = 'none';

        // 标记选项
        this.markOptions(selectedAnswer, correctAnswer);
    },

    // 显示反馈
    showFeedback(isCorrect, question) {
        const feedbackEl = document.getElementById('feedback');
        const feedbackIcon = document.getElementById('feedback-icon');
        const feedbackText = document.getElementById('feedback-text');
        const explanation = document.getElementById('explanation');

        feedbackEl.style.display = 'block';
        
        if (isCorrect) {
            feedbackIcon.textContent = '✅';
            feedbackText.textContent = '回答正确！';
            feedbackText.className = 'feedback-text correct';
        } else {
            feedbackIcon.textContent = '❌';
            feedbackText.textContent = `回答错误！正确答案是 ${question.answer}`;
            feedbackText.className = 'feedback-text wrong';
        }

        explanation.innerHTML = `<strong>解析：</strong>${question.explanation}`;
        
        // 保存练习状态
        this.savePracticeState();
    },

    // 标记选项状态
    markOptions(selected, correct) {
        document.querySelectorAll('.option').forEach(el => {
            const optionLetter = el.textContent.charAt(0);
            el.classList.remove('selected');
            if (optionLetter === correct) {
                el.classList.add('correct');
            } else if (optionLetter === selected && selected !== correct) {
                el.classList.add('wrong');
            }
        });
    },

    // 下一题
    nextQuestion() {
        this.state.currentIndex++;
        
        if (this.state.currentIndex >= this.state.currentQuestions.length) {
            // 练习完成
            this.completePractice();
        } else {
            this.renderQuestion();
        }
    },

    // 完成练习
    completePractice() {
        this.stopTimer();
        Storage.clearPracticeState();

        const totalQuestions = this.state.userAnswers.length;
        const correctCount = this.state.userAnswers.filter(a => a.isCorrect).length;
        const accuracy = Math.round((correctCount / totalQuestions) * 100);

        // 统计各科表现
        const subjectStats = {};
        SUBJECTS.forEach(sub => subjectStats[sub] = { correct: 0, total: 0 });
        
        this.state.userAnswers.forEach((answer, index) => {
            const question = this.state.currentQuestions[index];
            subjectStats[question.subject].total++;
            if (answer.isCorrect) {
                subjectStats[question.subject].correct++;
            }
        });

        // 保存历史记录
        const historyRecord = {
            grade: this.state.selectedGrade,
            semester: this.state.selectedSemester,
            totalQuestions: totalQuestions,
            correctCount: correctCount,
            accuracy: accuracy,
            duration: this.state.elapsedSeconds,
            subjectStats: subjectStats
        };
        Storage.addHistory(historyRecord);

        // 显示结果
        this.showResult(correctCount, totalQuestions, accuracy, subjectStats);
    },

    // 显示结果
    showResult(correct, total, accuracy, subjectStats) {
        document.getElementById('final-score').textContent = accuracy;
        document.getElementById('result-correct').textContent = `${correct}/${total}`;
        document.getElementById('result-rate').textContent = `${accuracy}%`;
        
        const minutes = Math.floor(this.state.elapsedSeconds / 60);
        const seconds = this.state.elapsedSeconds % 60;
        document.getElementById('result-time').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // 显示各科表现
        const breakdownEl = document.getElementById('subject-breakdown');
        let breakdownHTML = '<h3>各科表现</h3>';
        
        SUBJECTS.forEach(subject => {
            const stats = subjectStats[subject];
            if (stats.total > 0) {
                const subjectAccuracy = Math.round((stats.correct / stats.total) * 100);
                breakdownHTML += `
                    <div class="subject-row">
                        <span class="subject-name">${subject}</span>
                        <span class="subject-score">${stats.correct}/${stats.total} (${subjectAccuracy}%)</span>
                    </div>
                `;
            }
        });
        
        breakdownEl.innerHTML = breakdownHTML;
        this.showPage('complete');
    },

    // 保存练习状态
    savePracticeState() {
        Storage.savePracticeState({
            selectedGrade: this.state.selectedGrade,
            selectedSemester: this.state.selectedSemester,
            currentQuestions: this.state.currentQuestions,
            currentIndex: this.state.currentIndex,
            userAnswers: this.state.userAnswers,
            elapsedSeconds: this.state.elapsedSeconds
        });
    },

    // 更新首页统计
    updateStatsUI() {
        const stats = Storage.getStats();
        document.getElementById('stat-days').textContent = stats.totalDays;
        document.getElementById('stat-total').textContent = stats.totalQuestions;
        document.getElementById('stat-correct').textContent = `${stats.accuracy}%`;
        
        // 更新快捷入口数字
        const wrongs = Storage.getWrongQuestions();
        document.getElementById('wrong-count').textContent = wrongs.length;
        document.getElementById('wrong-count').style.display = wrongs.length > 0 ? 'block' : 'none';
        
        const history = Storage.getHistory();
        document.getElementById('history-count').textContent = history.length;
        document.getElementById('history-count').style.display = history.length > 0 ? 'block' : 'none';
    },

    // 显示错题本
    showWrongAnswers() {
        this.showPage('wrong');
    },

    // 渲染错题列表
    renderWrongList(filter) {
        const wrongList = Storage.getWrongQuestionsBySubject(filter);
        const listEl = document.getElementById('wrong-list');
        const clearBtn = document.getElementById('clear-wrong-btn');

        if (wrongList.length === 0) {
            listEl.innerHTML = '<div class="wrong-item" style="text-align:center; color:#999;">暂无错题</div>';
            clearBtn.style.display = 'none';
            return;
        }

        clearBtn.style.display = 'block';
        listEl.innerHTML = wrongList.map(wrong => `
            <div class="wrong-item">
                <div class="wrong-subject">${wrong.subject} · ${wrong.date}</div>
                <div class="wrong-question">${wrong.question}</div>
                <div class="wrong-answer">
                    你的答案：<span style="color:#f44336">${wrong.userAnswer}</span> | 
                    正确答案：<span style="color:#4CAF50">${wrong.answer}</span>
                </div>
                <div style="font-size:12px; color:#666; margin-top:5px; line-height:1.4;">
                    ${wrong.explanation}
                </div>
            </div>
        `).join('');
    },

    // 清空错题本
    clearWrongBook() {
        if (confirm('确定要清空所有错题吗？此操作不可恢复。')) {
            Storage.clearWrongQuestions();
            this.renderWrongList('all');
            alert('错题本已清空！');
        }
    },

    // 渲染历史记录
    renderHistory() {
        const history = Storage.getHistory();
        const listEl = document.getElementById('history-list');

        if (history.length === 0) {
            listEl.innerHTML = '<div class="history-item" style="text-align:center; color:#999;">暂无历史记录</div>';
            return;
        }

        listEl.innerHTML = history.map(h => {
            const semesterName = this.semesterNames[h.semester] || h.semester;
            return `
                <div class="history-item">
                    <div>
                        <div class="history-date">${h.date} ${h.time}</div>
                        <div style="font-size:12px; color:#999; margin-top:3px;">
                            ${h.grade}年级${semesterName} · ${h.duration}秒
                        </div>
                    </div>
                    <div class="history-score">${h.accuracy}%</div>
                </div>
            `;
        }).join('');
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// 监听返回按钮
window.addEventListener('popstate', () => {
    if (app.state.currentPage !== 'home' && confirm('确定要退出练习吗？')) {
        app.stopTimer();
        app.showPage('home');
    }
});
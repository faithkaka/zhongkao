// 刷题应用主逻辑 - 数据库版本（异步 API）
const app = {
    state: {
        currentPage: 'home',
        selectedGrade: 7,
        selectedSemester: 'lower',
        currentQuestions: [],
        currentIndex: 0,
        userAnswers: [],
        selectedOption: null,
        startTime: null,
        timerInterval: null,
        elapsedSeconds: 0
    },

    semesterNames: { 'upper': '上册', 'lower': '下册' },

    async init() {
        await this.checkUserLogin();
        this.bindEvents();
        await this.updateStatsUI();
        await this.checkResumePractice();
    },

    async checkUserLogin() {
        const users = await Storage.getUsers();
        const currentUserId = Storage.getCurrentUserId();
        
        if (users.length === 0) {
            // 自动创建默认用户
            await Storage.createUser('默认用户');
            this.updateUserDisplay();
            return;
        }
        
        if (!currentUserId || !users.find(u => u.id === currentUserId)) {
            // 切换到第一个用户
            Storage.switchUser(users[0].id);
        }
        
        this.updateUserDisplay();
    },

    updateUserDisplay() {
        const users = Storage.getUsers();
        const currentUserId = Storage.getCurrentUserId();
        
        // 异步获取用户列表
        users.then(usersList => {
            const currentUser = usersList.find(u => u.id === currentUserId);
            const nameEl = document.getElementById('current-username');
            if (nameEl) {
                nameEl.textContent = currentUser ? currentUser.name : '未登录';
            }
        });
    },

    bindEvents() {
        document.querySelectorAll('.semester-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.semester-btn').forEach(b => b.classList.remove('selected'));
                e.target.classList.add('selected');
                this.state.selectedSemester = e.target.dataset.semester;
            });
        });
        
        document.querySelectorAll('.preview-semester-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.preview-semester-btn').forEach(b => b.classList.remove('selected'));
                e.target.classList.add('selected');
                this.previewState = this.previewState || { grade: 7, semester: null, days: 3 };
                this.previewState.semester = e.target.dataset.semester;
            });
        });
        
        document.querySelectorAll('.preview-days-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.preview-days-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.previewState = this.previewState || { grade: 7, semester: null, days: 3 };
                this.previewState.days = parseInt(e.target.dataset.days);
            });
        });
        
        const input = document.getElementById('new-username-input');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.addUser();
            });
        }
    },

    async checkResumePractice() {
        const state = await Storage.getPracticeState();
        if (state && state.questions && state.questions.length > 0) {
            if (confirm('检测到有未完成的练习，是否继续？')) {
                this.state.currentQuestions = state.questions;
                this.state.currentIndex = state.current_index || state.currentIndex || 0;
                this.state.userAnswers = state.user_answers || state.userAnswers || [];
                this.state.elapsedSeconds = state.elapsed_seconds || state.elapsedSeconds || 0;
                this.showPage('practice');
                this.startTimer();
                this.renderQuestion();
            } else {
                await Storage.clearPracticeState();
            }
        }
    },

    async showPage(pageName) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageName + '-page');
        if (page) {
            page.classList.add('active');
            this.state.currentPage = pageName;
        }
        
        if (pageName === 'home') await this.updateStatsUI();
        if (pageName === 'wrong') await this.renderWrongList('all');
        if (pageName === 'history') await this.renderHistory();
    },

    async startPractice() {
        const btn = event.target;
        btn.disabled = true;
        btn.textContent = '加载中...';
        
        const questions = getTodayQuestions(this.state.selectedGrade, this.state.selectedSemester);
        
        if (questions.length === 0) {
            alert('题库加载失败，请刷新页面重试！');
            btn.disabled = false;
            btn.textContent = '直接开始今日练习';
            return;
        }
        
        this.state.currentQuestions = questions;
        this.state.currentIndex = 0;
        this.state.userAnswers = [];
        this.state.selectedOption = null;
        this.state.elapsedSeconds = 0;
        this.state.startTime = Date.now();
        
        const semesterName = this.semesterNames[this.state.selectedSemester];
        document.getElementById('practice-title').textContent = `七年级${semesterName} 每日打卡`;
        
        setTimeout(async () => {
            this.showPage('practice');
            this.startTimer();
            this.renderQuestion();
            btn.disabled = false;
            btn.textContent = '直接开始今日练习';
        }, 200);
    },

    startTimer() {
        clearInterval(this.state.timerInterval);
        this.state.timerInterval = setInterval(async () => {
            this.state.elapsedSeconds++;
            const mins = Math.floor(this.state.elapsedSeconds / 60).toString().padStart(2, '0');
            const secs = (this.state.elapsedSeconds % 60).toString().padStart(2, '0');
            const timerEl = document.getElementById('timer');
            if (timerEl) timerEl.textContent = `${mins}:${secs}`;
            
            if (this.state.currentPage === 'practice') {
                await Storage.savePracticeState(this.state);
            }
        }, 1000);
    },

    stopTimer() {
        clearInterval(this.state.timerInterval);
    },

    renderQuestion() {
        const currentQ = this.state.currentQuestions[this.state.currentIndex];
        if (!currentQ) return;
        
        document.getElementById('question-counter').textContent = `${this.state.currentIndex + 1}/${this.state.currentQuestions.length}`;
        document.getElementById('subject-tag').textContent = currentQ.subject;
        document.getElementById('subject-tag').className = 'subject-tag ' + currentQ.subject;
        document.getElementById('question-text').textContent = currentQ.question;
        
        const optionsHtml = currentQ.options.map((opt, idx) => {
            return `<button class="option" data-idx="${idx}" onclick="app.selectOption(${idx})">${opt}</button>`;
        }).join('');
        
        document.getElementById('options-container').innerHTML = optionsHtml;
        document.getElementById('feedback').style.display = 'none';
        this.state.selectedOption = null;
    },

    selectOption(idx) {
        document.querySelectorAll('.option').forEach((btn, i) => {
            btn.classList.toggle('selected', i === idx);
        });
        this.state.selectedOption = idx;
    },

    submitAnswer() {
        if (this.state.selectedOption === null) {
            alert('请先选择一个答案！');
            return;
        }
        
        const currentQ = this.state.currentQuestions[this.state.currentIndex];
        const isCorrect = String.fromCharCode(65 + this.state.selectedOption) === currentQ.answer;
        
        this.state.userAnswers.push({ question: currentQ, selected: this.state.selectedOption, isCorrect });
        
        const feedback = document.getElementById('feedback');
        document.getElementById('feedback-icon').textContent = isCorrect ? '✓' : '✗';
        document.getElementById('feedback-icon').className = isCorrect ? 'feedback-icon correct' : 'feedback-icon wrong';
        document.getElementById('feedback-text').textContent = isCorrect ? '回答正确！' : '回答错误！';
        document.getElementById('feedback-text').className = isCorrect ? 'feedback-text correct' : 'feedback-text wrong';
        document.getElementById('explanation').innerHTML = `<strong>正确答案：</strong>${currentQ.answer}<br><strong>解析：</strong>${currentQ.explanation}`;
        feedback.style.display = 'block';
        
        if (!isCorrect) {
            Storage.addWrongQuestion(currentQ, String.fromCharCode(65 + this.state.selectedOption));
        }
    },

    nextQuestion() {
        this.state.currentIndex++;
        if (this.state.currentIndex >= this.state.currentQuestions.length) {
            this.completePractice();
        } else {
            this.renderQuestion();
        }
    },

    async completePractice() {
        this.stopTimer();
        await Storage.clearPracticeState();
        
        const stats = { correct: 0, total: this.state.currentQuestions.length };
        this.state.userAnswers.forEach(ans => { if (ans.isCorrect) stats.correct++; });
        
        const subjectStats = {};
        this.state.currentQuestions.forEach((q, i) => {
            const isCorrect = this.state.userAnswers[i]?.isCorrect || false;
            subjectStats[q.subject] = subjectStats[q.subject] || { total: 0, correct: 0 };
            subjectStats[q.subject].total++;
            if (isCorrect) subjectStats[q.subject].correct++;
        });
        
        const mins = Math.floor(this.state.elapsedSeconds / 60).toString().padStart(2, '0');
        const secs = (this.state.elapsedSeconds % 60).toString().padStart(2, '0');
        
        await Storage.addHistory({
            grade: this.state.selectedGrade,
            semester: this.state.selectedSemester,
            totalQuestions: stats.total,
            correctCount: stats.correct,
            accuracy: Math.round((stats.correct / stats.total) * 100),
            duration: this.state.elapsedSeconds,
            subjectStats: subjectStats,
            questionIds: this.state.currentQuestions.map(q => q.id)
        });
        
        document.getElementById('final-score').textContent = Math.round((stats.correct / stats.total) * 100);
        document.getElementById('result-correct').textContent = `${stats.correct}/${stats.total}`;
        document.getElementById('result-rate').textContent = `${Math.round((stats.correct / stats.total) * 100)}%`;
        document.getElementById('result-time').textContent = `${mins}:${secs}`;
        
        document.getElementById('subject-breakdown').innerHTML = '<h3>各科表现</h3>' + 
            Object.entries(subjectStats).map(([sub, s]) => 
                `<div class="breakdown-item"><span class="breakdown-name">${sub}</span>
                <span class="breakdown-score">${s.correct}/${s.total} (${Math.round((s.correct/s.total)*100)}%)</span></div>`
            ).join('');
        
        this.showPage('complete');
    },

    async updateStatsUI() {
        const stats = await Storage.getStats();
        const history = await Storage.getHistory();
        
        document.getElementById('stat-days').textContent = stats.totalDays || 0;
        document.getElementById('stat-total').textContent = stats.totalQuestions || 0;
        document.getElementById('stat-correct').textContent = `${stats.accuracy || 0}%`;
        
        const emptyTip = document.getElementById('stats-empty-tip');
        if (emptyTip) {
            emptyTip.style.display = (stats.totalDays === 0 || !stats.totalDays) ? 'block' : 'none';
        }
        
        const wrongs = await Storage.getWrongQuestions();
        document.getElementById('wrong-count').textContent = wrongs.length;
        document.getElementById('wrong-count').style.display = wrongs.length > 0 ? 'block' : 'none';
        
        document.getElementById('history-count').textContent = history.length;
        document.getElementById('history-count').style.display = history.length > 0 ? 'block' : 'none';
    },

    showWrongAnswers() { this.showPage('wrong'); },

    async renderWrongList(filter) {
        const wrongList = await Storage.getWrongQuestionsBySubject(filter);
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
                <div class="wrong-subject">${wrong.subject} · ${wrong.created_at ? wrong.created_at.split(' ')[0] : ''}</div>
                <div class="wrong-question">${wrong.question}</div>
                <div class="wrong-answer">你的答案：<span style="color:#f44336">${wrong.userAnswer}</span> | 正确答案：<span style="color:#4CAF50">${wrong.answer}</span></div>
                <div style="font-size:12px; color:#666; margin-top:5px; line-height:1.4;">${wrong.explanation}</div>
            </div>
        `).join('');
    },

    async clearWrongBook() {
        if (confirm('确定要清空所有错题吗？此操作不可恢复。')) {
            await Storage.clearWrongQuestions();
            await this.renderWrongList('all');
            await this.updateStatsUI();
        }
    },

    async renderHistory() {
        const history = await Storage.getHistory();
        const container = document.getElementById('history-list');
        if (history.length === 0) {
            container.innerHTML = '<div class="history-empty" style="text-align:center; color:#999; padding:40px;">暂无历史记录</div>';
            return;
        }
        container.innerHTML = history.slice(0, 20).map(h => `
            <div class="history-item">
                <div class="history-date">${h.date} ${h.time}</div>
                <div class="history-subjects">${Object.keys(h.subjectStats || {}).join(' · ')}</div>
                <div class="history-score">${h.correctCount}/${h.totalQuestions} · ${h.accuracy}%</div>
                <div class="history-time">⏱ ${Math.floor(h.duration/60)}:${(h.duration%60).toString().padStart(2,'0')}</div>
            </div>
        `).join('') + (history.length > 20 ? '<div style="text-align:center; color:#999; padding:10px;">仅显示最近 20 条记录</div>' : '');
    },

    showPreviewSelector() {
        this.showPage('preview-selector');
        document.querySelectorAll('.preview-semester-btn').forEach(b => {
            b.classList.toggle('selected', b.dataset.semester === 'lower');
        });
        document.querySelectorAll('.preview-days-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
        this.previewState = { grade: 7, semester: 'lower', days: 3 };
    },

    generatePreview() {
        const state = this.previewState || { grade: 7, semester: 'lower', days: 3 };
        const previewData = generateMultiDayQuestions(7, state.semester, state.days);
        this.renderPreviewResult(previewData);
        this.showPage('preview-result');
    },

    renderPreviewResult(previewData) {
        const stats = Storage.getStats();
        document.getElementById('preview-info').innerHTML = `
            <span>七年级${this.semesterNames[this.previewState?.semester || 'lower']}</span>
            <span>共 ${previewData.length} 天 · ${previewData.reduce((a,b)=>a+b.questions.length,0)} 题</span>
        `;
        
        document.getElementById('preview-days-container').innerHTML = previewData.map((dayData, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index);
            const dateStr = date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric', weekday: 'short' });
            const subjectCount = {};
            dayData.questions.forEach(q => { subjectCount[q.subject] = (subjectCount[q.subject] || 0) + 1; });
            const subjectTags = Object.entries(subjectCount).sort((a, b) => b[1] - a[1]).map(([subject, count]) => 
                `<span class="preview-subject-tag ${subject}">${subject} ${count}题</span>`
            ).join('');
            const questionPreviews = dayData.questions.filter((q, i) => i < 6).map(q => 
                `<div class="preview-question-mini ${q.subject}"><span class="q-subject">${q.subject}</span><span class="q-text">${q.question.substring(0, 30)}${q.question.length > 30 ? '...' : ''}</span></div>`
            ).join('');
            return `
                <div class="preview-day-card">
                    <div class="preview-day-header">
                        <div class="day-number">第 ${index + 1} 天</div>
                        <div class="day-date">${dateStr}</div>
                    </div>
                    <div class="preview-subjects">${subjectTags}</div>
                    <div class="preview-questions-mini">${questionPreviews}${dayData.questions.length > 6 ? 
                        `<div class="more-questions">+ ${dayData.questions.length - 6} 题</div>` : ''}</div>
                </div>`;
        }).join('');
    },

    // ========== 用户管理 ==========
    async showUserManager() {
        this.showPage('user-manager');
        await this.renderUserList();
        const input = document.getElementById('new-username-input');
        if (input) {
            input.value = '';
            setTimeout(() => input.focus(), 100);
        }
    },

    async renderUserList() {
        const users = await Storage.getUsers();
        const currentUserId = Storage.getCurrentUserId();
        const container = document.getElementById('user-list');
        
        if (!container) return;
        
        if (users.length === 0) {
            container.innerHTML = '<div class="user-empty">暂无用户，请先添加用户</div>';
            return;
        }
        
        container.innerHTML = users.map(user => {
            const isCurrent = user.id === currentUserId;
            return `
                <div class="user-item ${isCurrent ? 'current' : ''}">
                    <div class="user-info">
                        <div class="user-avatar">👤</div>
                        <div class="user-details">
                            <div class="user-name-text">${user.name}</div>
                            <div class="user-stats">${user.total_days || 0} 天 · ${user.total_questions || 0} 题</div>
                        </div>
                    </div>
                    <div class="user-actions">
                        ${isCurrent 
                            ? '<span class="user-current-badge">当前用户</span>' 
                            : `<button class="user-btn switch" onclick="app.switchUser('${user.id}')">切换</button>`
                        }
                        ${users.length > 1 ? `<button class="user-btn delete" onclick="app.deleteUser('${user.id}')">删除</button>` : ''}
                    </div>
                </div>`;
        }).join('');
    },

    async addUser() {
        const input = document.getElementById('new-username-input');
        if (!input) return;
        
        const username = input.value.trim();
        
        if (!username) { alert('请输入用户名！'); return; }
        if (username.length > 10) { alert('用户名不能超过 10 个字符！'); return; }
        
        try {
            await Storage.createUser(username);
            await this.renderUserList();
            this.updateUserDisplay();
            await this.updateStatsUI();
            input.value = '';
            input.focus();
        } catch (error) {
            alert(error.message || '创建失败');
        }
    },

    async switchUser(userId) {
        Storage.switchUser(userId);
        await this.renderUserList();
        this.updateUserDisplay();
        await this.updateStatsUI();
    },

    async deleteUser(userId) {
        if (!confirm('确定要删除该用户吗？该用户的所有学习数据将被清除，此操作不可恢复。')) return;
        
        try {
            await Storage.deleteUser(userId);
            await this.renderUserList();
            this.updateUserDisplay();
            await this.updateStatsUI();
        } catch (error) {
            alert(error.message || '删除失败');
        }
    },

    // 导出数据（可在用户管理中添加导出功能）
    async exportUserData() {
        const data = await Storage.exportData();
        if (!data) {
            alert('当前没有用户数据');
            return;
        }
        
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `zhongkao-data-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
};

document.addEventListener('DOMContentLoaded', () => { app.init(); });

window.addEventListener('popstate', () => {
    if (app.state.currentPage !== 'home' && confirm('确定要退出练习吗？')) {
        app.stopTimer();
        app.showPage('home');
    }
});
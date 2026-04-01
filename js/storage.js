// 浏览器本地存储管理模块
const Storage = {
    // 存储键名
    KEYS: {
        CURRENT_USER: 'zhongkao_user',
        PRACTICE_STATE: 'zhongkao_practice',
        WRONG_QUESTIONS: 'zhongkao_wrongs',
        HISTORY: 'zhongkao_history',
        STATS: 'zhongkao_stats',
        SETTINGS: 'zhongkao_settings'
    },

    // 保存当前用户信息
    saveUser(user) {
        localStorage.setItem(this.KEYS.CURRENT_USER, JSON.stringify(user));
    },

    // 获取用户信息
    getUser() {
        const data = localStorage.getItem(this.KEYS.CURRENT_USER);
        return data ? JSON.parse(data) : null;
    },

    // 保存练习状态
    savePracticeState(state) {
        localStorage.setItem(this.KEYS.PRACTICE_STATE, JSON.stringify(state));
    },

    // 获取练习状态
    getPracticeState() {
        const data = localStorage.getItem(this.KEYS.PRACTICE_STATE);
        return data ? JSON.parse(data) : null;
    },

    // 清空练习状态
    clearPracticeState() {
        localStorage.removeItem(this.KEYS.PRACTICE_STATE);
    },

    // 添加错题
    addWrongQuestion(question, userAnswer) {
        const wrongs = this.getWrongQuestions();
        const wrongItem = {
            id: question.id,
            question: question.question,
            options: question.options,
            answer: question.answer,
            userAnswer: userAnswer,
            explanation: question.explanation,
            subject: question.subject,
            grade: question.grade,
            semester: question.semester,
            knowledgePoint: question.knowledgePoint,
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString('zh-CN')
        };
        
        // 检查是否已存在
        const exists = wrongs.find(w => w.id === question.id);
        if (!exists) {
            wrongs.unshift(wrongItem);
            localStorage.setItem(this.KEYS.WRONG_QUESTIONS, JSON.stringify(wrongs));
        }
    },

    // 获取所有错题
    getWrongQuestions() {
        const data = localStorage.getItem(this.KEYS.WRONG_QUESTIONS);
        return data ? JSON.parse(data) : [];
    },

    // 获取某科目的错题
    getWrongQuestionsBySubject(subject) {
        const wrongs = this.getWrongQuestions();
        return subject === 'all' ? wrongs : wrongs.filter(w => w.subject === subject);
    },

    // 删除错题
    removeWrongQuestion(questionId) {
        const wrongs = this.getWrongQuestions();
        const filtered = wrongs.filter(w => w.id !== questionId);
        localStorage.setItem(this.KEYS.WRONG_QUESTIONS, JSON.stringify(filtered));
    },

    // 清空错题本
    clearWrongQuestions() {
        localStorage.setItem(this.KEYS.WRONG_QUESTIONS, JSON.stringify([]));
    },

    // 添加历史记录
    addHistory(record) {
        const history = this.getHistory();
        const historyItem = {
            id: Date.now().toString(),
            date: new Date().toLocaleDateString('zh-CN'),
            time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
            timestamp: new Date().toISOString(),
            grade: record.grade,
            semester: record.semester,
            totalQuestions: record.totalQuestions,
            correctCount: record.correctCount,
            accuracy: record.accuracy,
            duration: record.duration,
            subjectStats: record.subjectStats || {}
        };
        
        history.unshift(historyItem);
        // 只保留最近 100 条记录
        if (history.length > 100) {
            history.pop();
        }
        localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(history));
        
        // 更新统计
        this.updateStats(record);
    },

    // 获取历史记录
    getHistory() {
        const data = localStorage.getItem(this.KEYS.HISTORY);
        return data ? JSON.parse(data) : [];
    },

    // 获取统计数据
    getStats() {
        const data = localStorage.getItem(this.KEYS.STATS);
        return data ? JSON.parse(data) : {
            totalDays: 0,
            totalQuestions: 0,
            totalCorrect: 0,
            accuracy: 0,
            streak: 0,
            lastPracticeDate: null
        };
    },

    // 更新统计数据
    updateStats(record) {
        const stats = this.getStats();
        const today = new Date().toLocaleDateString('zh-CN');
        
        stats.totalQuestions += record.totalQuestions;
        stats.totalCorrect += record.correctCount;
        
        // 更新准确率
        stats.accuracy = Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
        
        // 更新打卡天数
        if (stats.lastPracticeDate !== today) {
            stats.totalDays++;
            stats.lastPracticeDate = today;
        }
        
        localStorage.setItem(this.KEYS.STATS, JSON.stringify(stats));
    },

    // 保存设置
    saveSettings(settings) {
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
    },

    // 获取设置
    getSettings() {
        const data = localStorage.getItem(this.KEYS.SETTINGS);
        return data ? JSON.parse(data) : {
            showExplanation: true,
            autoNext: true,
            soundEffect: false
        };
    },

    // 清空所有数据（重置）
    clearAll() {
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    },

    // 导出数据
    exportData() {
        return {
            user: this.getUser(),
            wrongQuestions: this.getWrongQuestions(),
            history: this.getHistory(),
            stats: this.getStats(),
            settings: this.getSettings(),
            exportDate: new Date().toISOString()
        };
    },

    // 导入数据
    importData(data) {
        if (data.wrongQuestions) {
            localStorage.setItem(this.KEYS.WRONG_QUESTIONS, JSON.stringify(data.wrongQuestions));
        }
        if (data.history) {
            localStorage.setItem(this.KEYS.HISTORY, JSON.stringify(data.history));
        }
        if (data.stats) {
            localStorage.setItem(this.KEYS.STATS, JSON.stringify(data.stats));
        }
        if (data.user) {
            localStorage.setItem(this.KEYS.CURRENT_USER, JSON.stringify(data.user));
        }
        if (data.settings) {
            localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(data.settings));
        }
    }
};
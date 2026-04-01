// 浏览器本地存储管理模块 - 多用户版本
const Storage = {
    // 存储键名
    KEYS: {
        CURRENT_USER: 'zhongkao_current_user',
        USERS: 'zhongkao_users',
        PRACTICE_STATE: 'zhongkao_practice',
        WRONG_QUESTIONS: 'zhongkao_wrongs',
        HISTORY: 'zhongkao_history',
        STATS: 'zhongkao_stats',
        SETTINGS: 'zhongkao_settings'
    },

    // 获取当前用户 ID
    getCurrentUserId() {
        return localStorage.getItem(this.KEYS.CURRENT_USER);
    },

    // 设置当前用户
    setCurrentUser(userId) {
        localStorage.setItem(this.KEYS.CURRENT_USER, userId);
    },

    // 获取键名（带用户前缀）
    getUserKey(key) {
        const userId = this.getCurrentUserId();
        return userId ? `${key}_${userId}` : key;
    },

    // 获取所有用户列表
    getUsers() {
        const data = localStorage.getItem(this.KEYS.USERS);
        return data ? JSON.parse(data) : [];
    },

    // 保存用户列表
    saveUsers(users) {
        localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
    },

    // 创建新用户
    createUser(username) {
        const users = this.getUsers();
        const userId = 'user_' + Date.now().toString(36);
        const newUser = {
            id: userId,
            name: username,
            createdAt: new Date().toISOString(),
            totalDays: 0,
            totalQuestions: 0
        };
        users.push(newUser);
        this.saveUsers(users);
        this.setCurrentUser(userId);
        return newUser;
    },

    // 删除用户
    deleteUser(userId) {
        const users = this.getUsers();
        const filtered = users.filter(u => u.id !== userId);
        this.saveUsers(filtered);
        
        // 如果是当前用户，切换到第一个用户
        if (this.getCurrentUserId() === userId) {
            const remaining = this.getUsers();
            if (remaining.length > 0) {
                this.setCurrentUser(remaining[0].id);
            } else {
                localStorage.removeItem(this.KEYS.CURRENT_USER);
            }
        }
        
        // 清除该用户的数据
        this.clearUserData(userId);
    },

    // 清除特定用户的数据
    clearUserData(userId) {
        const keysToRemove = [
            this.getUserKey(this.KEYS.PRACTICE_STATE),
            this.getUserKey(this.KEYS.WRONG_QUESTIONS),
            this.getUserKey(this.KEYS.HISTORY),
            this.getUserKey(this.KEYS.STATS)
        ];
        keysToRemove.forEach(key => localStorage.removeItem(key));
    },

    // 切换用户
    switchUser(userId) {
        this.setCurrentUser(userId);
    },

    // 保存当前用户信息
    saveUser(user) {
        localStorage.setItem(this.getUserKey('zhongkao_user'), JSON.stringify(user));
    },

    // 获取用户信息
    getUser() {
        const data = localStorage.getItem(this.getUserKey('zhongkao_user'));
        return data ? JSON.parse(data) : null;
    },

    // 保存练习状态
    savePracticeState(state) {
        localStorage.setItem(this.getUserKey(this.KEYS.PRACTICE_STATE), JSON.stringify(state));
    },

    // 获取练习状态
    getPracticeState() {
        const data = localStorage.getItem(this.getUserKey(this.KEYS.PRACTICE_STATE));
        return data ? JSON.parse(data) : null;
    },

    // 清空练习状态
    clearPracticeState() {
        localStorage.removeItem(this.getUserKey(this.KEYS.PRACTICE_STATE));
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
            localStorage.setItem(this.getUserKey(this.KEYS.WRONG_QUESTIONS), JSON.stringify(wrongs));
        }
    },

    // 获取所有错题
    getWrongQuestions() {
        const data = localStorage.getItem(this.getUserKey(this.KEYS.WRONG_QUESTIONS));
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
        localStorage.setItem(this.getUserKey(this.KEYS.WRONG_QUESTIONS), JSON.stringify(filtered));
    },

    // 清空错题本
    clearWrongQuestions() {
        localStorage.setItem(this.getUserKey(this.KEYS.WRONG_QUESTIONS), JSON.stringify([]));
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
            subjectStats: record.subjectStats || {},
            questionIds: record.questionIds || []
        };

        history.unshift(historyItem);
        if (history.length > 100) {
            history.pop();
        }
        localStorage.setItem(this.getUserKey(this.KEYS.HISTORY), JSON.stringify(history));

        // 更新统计
        this.updateStats(record);
        
        // 更新用户列表中的统计数据
        this.updateUserStats();
    },

    // 获取历史记录
    getHistory() {
        const data = localStorage.getItem(this.getUserKey(this.KEYS.HISTORY));
        return data ? JSON.parse(data) : [];
    },

    // 获取统计数据
    getStats() {
        const data = localStorage.getItem(this.getUserKey(this.KEYS.STATS));
        if (data) {
            return JSON.parse(data);
        }
        
        // 如果没有统计数据，尝试从历史记录中计算
        const history = this.getHistory();
        if (history.length > 0) {
            const stats = {
                totalDays: 0,
                totalQuestions: 0,
                totalCorrect: 0,
                accuracy: 0,
                streak: 0,
                lastPracticeDate: null
            };
            
            const usedDates = new Set();
            history.forEach(record => {
                stats.totalQuestions += record.totalQuestions || 0;
                stats.totalCorrect += record.correctCount || 0;
                
                const dateKey = `${record.date}`;
                if (!usedDates.has(dateKey)) {
                    stats.totalDays++;
                    usedDates.add(dateKey);
                    stats.lastPracticeDate = record.date;
                }
            });
            
            if (stats.totalQuestions > 0) {
                stats.accuracy = Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
            }
            
            localStorage.setItem(this.getUserKey(this.KEYS.STATS), JSON.stringify(stats));
            return stats;
        }
        
        return {
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
        
        stats.accuracy = Math.round((stats.totalCorrect / stats.totalQuestions) * 100);
        
        if (stats.lastPracticeDate !== today) {
            stats.totalDays++;
            stats.lastPracticeDate = today;
        }
        
        localStorage.setItem(this.getUserKey(this.KEYS.STATS), JSON.stringify(stats));
    },

    // 更新用户列表中的统计信息
    updateUserStats() {
        const users = this.getUsers();
        const currentUserId = this.getCurrentUserId();
        
        if (currentUserId) {
            const stats = this.getStats();
            const userIndex = users.findIndex(u => u.id === currentUserId);
            if (userIndex !== -1) {
                users[userIndex].totalDays = stats.totalDays;
                users[userIndex].totalQuestions = stats.totalQuestions;
                this.saveUsers(users);
            }
        }
    },

    // 保存设置
    saveSettings(settings) {
        localStorage.setItem(this.getUserKey(this.KEYS.SETTINGS), JSON.stringify(settings));
    },

    // 获取设置
    getSettings() {
        const data = localStorage.getItem(this.getUserKey(this.KEYS.SETTINGS));
        return data ? JSON.parse(data) : {
            showExplanation: true,
            autoNext: true,
            soundEffect: false
        };
    },

    // 清空当前用户所有数据
    clearAll() {
        const userId = this.getCurrentUserId();
        if (userId) {
            localStorage.removeItem(this.getUserKey(this.KEYS.PRACTICE_STATE));
            localStorage.removeItem(this.getUserKey(this.KEYS.WRONG_QUESTIONS));
            localStorage.removeItem(this.getUserKey(this.KEYS.HISTORY));
            localStorage.removeItem(this.getUserKey(this.KEYS.STATS));
            localStorage.removeItem(this.getUserKey(this.KEYS.SETTINGS));
            localStorage.removeItem(this.getUserKey('zhongkao_user'));
        }
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
            localStorage.setItem(this.getUserKey(this.KEYS.WRONG_QUESTIONS), JSON.stringify(data.wrongQuestions));
        }
        if (data.history) {
            localStorage.setItem(this.getUserKey(this.KEYS.HISTORY), JSON.stringify(data.history));
        }
        if (data.stats) {
            localStorage.setItem(this.getUserKey(this.KEYS.STATS), JSON.stringify(data.stats));
        }
        if (data.user) {
            localStorage.setItem(this.getUserKey('zhongkao_user'), JSON.stringify(data.user));
        }
        if (data.settings) {
            localStorage.setItem(this.getUserKey(this.KEYS.SETTINGS), JSON.stringify(data.settings));
        }
    }
};
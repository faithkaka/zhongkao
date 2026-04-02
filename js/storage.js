// 浏览器本地存储模块 - 纯前端版本（无需后端）
// 适用于 GitHub Pages 部署

const Storage = {
    // 当前用户 ID（从 sessionStorage 获取，页面关闭后清除）
    getCurrentUserId() {
        return sessionStorage.getItem('zhongkao_current_user');
    },

    setCurrentUser(userId) {
        sessionStorage.setItem('zhongkao_current_user', userId);
    },

    clearCurrentUser() {
        sessionStorage.removeItem('zhongkao_current_user');
    },

    switchUser(userId) {
        this.setCurrentUser(userId);
    },

    // 获取所有用户列表
    getUsers() {
        const users = localStorage.getItem('zhongkao_users');
        return users ? JSON.parse(users) : [];
    },

    saveUsers(users) {
        localStorage.setItem('zhongkao_users', JSON.stringify(users));
    },

    // 创建新用户
    createUser(username) {
        const users = this.getUsers();
        const user = {
            id: 'user_' + Date.now(),
            name: username,
            createdAt: new Date().toISOString(),
            totalDays: 0,
            totalQuestions: 0
        };
        users.push(user);
        this.saveUsers(users);
        this.setCurrentUser(user.id);
        return Promise.resolve(user);
    },

    // 删除用户
    deleteUser(userId) {
        let users = this.getUsers();
        users = users.filter(u => u.id !== userId);
        this.saveUsers(users);
        
        // 删除相关数据
        const history = JSON.parse(localStorage.getItem('zhongkao_history') || '[]');
        localStorage.setItem('zhongkao_history', JSON.stringify(history.filter(h => h.userId !== userId)));
        
        const wrongs = JSON.parse(localStorage.getItem('zhongkao_wrongs') || '[]');
        localStorage.setItem('zhongkao_wrongs', JSON.stringify(wrongs.filter(w => w.userId !== userId)));
        
        const states = JSON.parse(localStorage.getItem('zhongkao_state') || '{}');
        delete states[userId];
        localStorage.setItem('zhongkao_state', JSON.stringify(states));
        
        if (this.getCurrentUserId() === userId) {
            this.clearCurrentUser();
        }
        
        return Promise.resolve(true);
    },

    // 获取统计数据
    async getStats() {
        const userId = this.getCurrentUserId();
        if (!userId) {
            return { totalDays: 0, totalQuestions: 0, totalCorrect: 0, accuracy: 0 };
        }
        
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        const history = JSON.parse(localStorage.getItem('zhongkao_history') || '[]');
        const userHistory = history.filter(h => h.userId === userId);
        
        const totalDays = new Set(userHistory.map(h => h.date)).size;
        const totalQuestions = userHistory.reduce((sum, h) => sum + h.totalQuestions, 0);
        const totalCorrect = userHistory.reduce((sum, h) => sum + h.correctCount, 0);
        const accuracy = totalQuestions > 0 ? Math.round(totalCorrect / totalQuestions * 100) : 0;
        
        return { 
            totalDays, 
            totalQuestions: user?.totalQuestions || totalQuestions, 
            totalCorrect, 
            accuracy 
        };
    },

    // 获取历史记录
    async getHistory() {
        const userId = this.getCurrentUserId();
        if (!userId) return [];
        
        const history = JSON.parse(localStorage.getItem('zhongkao_history') || '[]');
        return history
            .filter(h => h.userId === userId)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 100);
    },

    // 添加历史记录
    async addHistory(record) {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        const history = JSON.parse(localStorage.getItem('zhongkao_history') || '[]');
        const newRecord = {
            id: 'history_' + Date.now(),
            userId,
            ...record,
            createdAt: new Date().toISOString(),
            date: new Date().toISOString().split('T')[0],
            time: new Date().toISOString().split('T')[1].substr(0, 5)
        };
        history.push(newRecord);
        localStorage.setItem('zhongkao_history', JSON.stringify(history));
        
        // 更新用户统计
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        if (user) {
            user.totalQuestions = (user.totalQuestions || 0) + record.totalQuestions;
            this.saveUsers(users);
        }
        
        return newRecord;
    },

    // 获取错题
    async getWrongQuestions() {
        const userId = this.getCurrentUserId();
        if (!userId) return [];
        
        const wrongs = JSON.parse(localStorage.getItem('zhongkao_wrongs') || '[]');
        return wrongs.filter(w => w.userId === userId);
    },

    // 添加错题
    async addWrongQuestion(question, userAnswer) {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        const wrongs = JSON.parse(localStorage.getItem('zhongkao_wrongs') || '[]');
        const exists = wrongs.find(w => w.userId === userId && w.questionId === question.id);
        if (exists) return null;
        
        const newWrong = {
            id: 'wrong_' + Date.now(),
            userId,
            questionId: question.id,
            ...question,
            userAnswer,
            createdAt: new Date().toISOString()
        };
        wrongs.push(newWrong);
        localStorage.setItem('zhongkao_wrongs', JSON.stringify(wrongs));
        return newWrong;
    },

    // 删除错题
    async removeWrongQuestion(wrongId) {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        let wrongs = JSON.parse(localStorage.getItem('zhongkao_wrongs') || '[]');
        wrongs = wrongs.filter(w => w.id !== wrongId);
        localStorage.setItem('zhongkao_wrongs', JSON.stringify(wrongs));
        return { success: true };
    },

    // 清空错题本
    async clearWrongQuestions() {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        let wrongs = JSON.parse(localStorage.getItem('zhongkao_wrongs') || '[]');
        wrongs = wrongs.filter(w => w.userId !== userId);
        localStorage.setItem('zhongkao_wrongs', JSON.stringify(wrongs));
        return { success: true };
    },

    // 获取练习状态
    async getPracticeState() {
        const userId = this.getCurrentUserId();
        if (!userId) return null;
        
        const state = localStorage.getItem('zhongkao_state');
        if (!state) return null;
        
        const allStates = JSON.parse(state);
        return allStates[userId] || null;
    },

    // 保存练习状态
    async savePracticeState(state) {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        const allStates = JSON.parse(localStorage.getItem('zhongkao_state') || '{}');
        allStates[userId] = {
            ...state,
            updatedAt: new Date().toISOString()
        };
        localStorage.setItem('zhongkao_state', JSON.stringify(allStates));
        return { success: true };
    },

    // 清除练习状态
    async clearPracticeState() {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        const allStates = JSON.parse(localStorage.getItem('zhongkao_state') || '{}');
        delete allStates[userId];
        localStorage.setItem('zhongkao_state', JSON.stringify(allStates));
        return { success: true };
    },

    // 导出数据
    async exportData() {
        const userId = this.getCurrentUserId();
        if (!userId) return null;
        
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        const history = JSON.parse(localStorage.getItem('zhongkao_history') || '[]').filter(h => h.userId === userId);
        const wrongs = JSON.parse(localStorage.getItem('zhongkao_wrongs') || '[]').filter(w => w.userId === userId);
        
        return {
            user,
            history,
            wrongs,
            exportDate: new Date().toISOString()
        };
    }
};
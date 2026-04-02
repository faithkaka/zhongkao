// 浏览器存储管理模块 - 支持后端 API 和本地存储双模式
// 自动检测后端可用性，降级到本地存储

const STORAGE_CONFIG_KEY = 'zhongkao_storage_config';

// 存储配置管理
const StorageConfig = {
    get() {
        const config = localStorage.getItem(STORAGE_CONFIG_KEY);
        if (config) {
            return JSON.parse(config);
        }
        // 默认配置
        return {
            mode: 'auto', // 'api' | 'local' | 'auto'
            apiBase: null // 自动检测
        };
    },
    
    save(config) {
        localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(config));
    },
    
    // 自动检测 API 地址
    async detectApiBase() {
        // 可能的 API 地址列表
        const candidates = [
            window.location.origin + '/api',  // 同域名 API
            'http://localhost:8088/api',      // 本地开发
            `http://${window.location.hostname}:8088/api`  // 局域网 IP
        ];
        
        for (const apiBase of candidates) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 2000);
                
                const res = await fetch(`${apiBase}/users`, { 
                    signal: controller.signal,
                    mode: 'cors'
                });
                clearTimeout(timeoutId);
                
                if (res.ok) {
                    console.log('✅ API 检测成功:', apiBase);
                    return apiBase;
                }
            } catch (error) {
                console.log('❌ API 检测失败:', apiBase, error.message);
            }
        }
        
        return null;
    }
};

// 本地存储实现（备用方案）
const LocalStorage = {
    usersKey: 'zhongkao_users',
    historyKey: 'zhongkao_history',
    wrongsKey: 'zhongkao_wrongs',
    stateKey: 'zhongkao_state',
    
    getUsers() {
        const users = localStorage.getItem(this.usersKey);
        return users ? JSON.parse(users) : [];
    },
    
    saveUsers(users) {
        localStorage.setItem(this.usersKey, JSON.stringify(users));
    },
    
    createUser(username) {
        const users = this.getUsers();
        const user = {
            id: 'local_' + Date.now(),
            name: username,
            createdAt: new Date().toISOString(),
            totalDays: 0,
            totalQuestions: 0
        };
        users.push(user);
        this.saveUsers(users);
        sessionStorage.setItem('zhongkao_current_user', user.id);
        return Promise.resolve(user);
    },
    
    deleteUser(userId) {
        let users = this.getUsers();
        users = users.filter(u => u.id !== userId);
        this.saveUsers(users);
        
        // 删除相关数据
        const history = JSON.parse(localStorage.getItem(this.historyKey) || '[]');
        localStorage.setItem(this.historyKey, JSON.stringify(history.filter(h => h.userId !== userId)));
        
        const wrongs = JSON.parse(localStorage.getItem(this.wrongsKey) || '[]');
        localStorage.setItem(this.wrongsKey, JSON.stringify(wrongs.filter(w => w.userId !== userId)));
        
        if (sessionStorage.getItem('zhongkao_current_user') === userId) {
            sessionStorage.removeItem('zhongkao_current_user');
        }
        
        return Promise.resolve(true);
    },
    
    getStats() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) {
            return Promise.resolve({ totalDays: 0, totalQuestions: 0, totalCorrect: 0, accuracy: 0 });
        }
        
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        const history = JSON.parse(localStorage.getItem(this.historyKey) || '[]');
        const userHistory = history.filter(h => h.userId === userId);
        
        const totalDays = new Set(userHistory.map(h => h.date)).size;
        const totalQuestions = userHistory.reduce((sum, h) => sum + h.totalQuestions, 0);
        const totalCorrect = userHistory.reduce((sum, h) => sum + h.correctCount, 0);
        const accuracy = totalQuestions > 0 ? Math.round(totalCorrect / totalQuestions * 100) : 0;
        
        return Promise.resolve({ 
            totalDays, 
            totalQuestions: user?.totalQuestions || totalQuestions, 
            totalCorrect, 
            accuracy 
        });
    },
    
    getHistory() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve([]);
        
        const history = JSON.parse(localStorage.getItem(this.historyKey) || '[]');
        return Promise.resolve(
            history
                .filter(h => h.userId === userId)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 100)
        );
    },
    
    addHistory(record) {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve(null);
        
        const history = JSON.parse(localStorage.getItem(this.historyKey) || '[]');
        const newRecord = {
            id: 'local_' + Date.now(),
            userId,
            ...record,
            createdAt: new Date().toISOString(),
            date: new Date().toISOString().split('T')[0],
            time: new Date().toISOString().split('T')[1].substr(0, 5)
        };
        history.push(newRecord);
        localStorage.setItem(this.historyKey, JSON.stringify(history));
        
        // 更新用户统计
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        if (user) {
            user.totalQuestions = (user.totalQuestions || 0) + record.totalQuestions;
            this.saveUsers(users);
        }
        
        return Promise.resolve(newRecord);
    },
    
    getWrongQuestions() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve([]);
        
        const wrongs = JSON.parse(localStorage.getItem(this.wrongsKey) || '[]');
        return Promise.resolve(wrongs.filter(w => w.userId === userId));
    },
    
    addWrongQuestion(question, userAnswer) {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve(null);
        
        const wrongs = JSON.parse(localStorage.getItem(this.wrongsKey) || '[]');
        const exists = wrongs.find(w => w.userId === userId && w.questionId === question.id);
        if (exists) return Promise.resolve(null);
        
        const newWrong = {
            id: 'local_' + Date.now(),
            userId,
            questionId: question.id,
            ...question,
            userAnswer,
            createdAt: new Date().toISOString()
        };
        wrongs.push(newWrong);
        localStorage.setItem(this.wrongsKey, JSON.stringify(wrongs));
        return Promise.resolve(newWrong);
    },
    
    removeWrongQuestion(wrongId) {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve(null);
        
        let wrongs = JSON.parse(localStorage.getItem(this.wrongsKey) || '[]');
        wrongs = wrongs.filter(w => w.id !== wrongId);
        localStorage.setItem(this.wrongsKey, JSON.stringify(wrongs));
        return Promise.resolve({ success: true });
    },
    
    clearWrongQuestions() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve(null);
        
        let wrongs = JSON.parse(localStorage.getItem(this.wrongsKey) || '[]');
        wrongs = wrongs.filter(w => w.userId !== userId);
        localStorage.setItem(this.wrongsKey, JSON.stringify(wrongs));
        return Promise.resolve({ success: true });
    },
    
    getPracticeState() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve(null);
        
        const state = localStorage.getItem(this.stateKey);
        if (!state) return Promise.resolve(null);
        
        const allStates = JSON.parse(state);
        return Promise.resolve(allStates[userId] || null);
    },
    
    savePracticeState(state) {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve(null);
        
        const allStates = JSON.parse(localStorage.getItem(this.stateKey) || '{}');
        allStates[userId] = {
            ...state,
            updatedAt: new Date().toISOString()
        };
        localStorage.setItem(this.stateKey, JSON.stringify(allStates));
        return Promise.resolve({ success: true });
    },
    
    clearPracticeState() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve(null);
        
        const allStates = JSON.parse(localStorage.getItem(this.stateKey) || '{}');
        delete allStates[userId];
        localStorage.setItem(this.stateKey, JSON.stringify(allStates));
        return Promise.resolve({ success: true });
    },
    
    exportData() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return Promise.resolve(null);
        
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        const history = JSON.parse(localStorage.getItem(this.historyKey) || '[]').filter(h => h.userId === userId);
        const wrongs = JSON.parse(localStorage.getItem(this.wrongsKey) || '[]').filter(w => w.userId === userId);
        
        return Promise.resolve({
            user,
            history,
            wrongs,
            exportDate: new Date().toISOString()
        });
    }
};

// API 模式实现
const ApiStorage = {
    apiBase: null,
    
    async init() {
        const config = StorageConfig.get();
        
        if (config.mode === 'local') {
            console.log('📦 使用本地存储模式');
            Storage.mode = 'local';
            return false;
        }
        
        if (config.apiBase) {
            this.apiBase = config.apiBase;
        } else {
            this.apiBase = await StorageConfig.detectApiBase();
        }
        
        if (this.apiBase && config.mode !== 'local') {
            console.log('🌐 使用 API 模式:', this.apiBase);
            Storage.mode = 'api';
            return true;
        }
        
        console.log('⚠️ API 不可用，降级到本地存储');
        Storage.mode = 'local';
        return false;
    },
    
    async getUsers() {
        try {
            const res = await fetch(`${this.apiBase}/users`);
            if (!res.ok) throw new Error('Failed to fetch users');
            return await res.json();
        } catch (error) {
            console.error('获取用户列表失败:', error);
            return LocalStorage.getUsers();
        }
    },
    
    async createUser(username) {
        try {
            const res = await fetch(`${this.apiBase}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: username })
            });
            
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.error || '创建失败');
            }
            
            const user = await res.json();
            sessionStorage.setItem('zhongkao_current_user', user.id);
            return user;
        } catch (error) {
            console.error('创建用户失败:', error);
            return LocalStorage.createUser(username);
        }
    },
    
    async deleteUser(userId) {
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}`, {
                method: 'DELETE'
            });
            
            if (!res.ok) throw new Error('删除失败');
            
            if (sessionStorage.getItem('zhongkao_current_user') === userId) {
                sessionStorage.removeItem('zhongkao_current_user');
            }
            
            return true;
        } catch (error) {
            console.error('删除用户失败:', error);
            return LocalStorage.deleteUser(userId);
        }
    },
    
    async getStats() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) {
            return LocalStorage.getStats();
        }
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/stats`);
            if (!res.ok) throw new Error('Failed to fetch stats');
            return await res.json();
        } catch (error) {
            console.error('获取统计失败:', error);
            return LocalStorage.getStats();
        }
    },
    
    async getHistory() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return [];
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/history`);
            if (!res.ok) throw new Error('Failed to fetch history');
            return await res.json();
        } catch (error) {
            console.error('获取历史失败:', error);
            return LocalStorage.getHistory();
        }
    },
    
    async addHistory(record) {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return;
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/history`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(record)
            });
            
            if (!res.ok) throw new Error('Failed to add history');
            return await res.json();
        } catch (error) {
            console.error('添加历史失败:', error);
            return LocalStorage.addHistory(record);
        }
    },
    
    async getWrongQuestions() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return [];
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/wrongs`);
            if (!res.ok) throw new Error('Failed to fetch wrongs');
            return await res.json();
        } catch (error) {
            console.error('获取错题失败:', error);
            return LocalStorage.getWrongQuestions();
        }
    },
    
    async addWrongQuestion(question, userAnswer) {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return;
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/wrongs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: question.id,
                    question: question.question,
                    options: question.options,
                    answer: question.answer,
                    userAnswer: userAnswer,
                    explanation: question.explanation,
                    subject: question.subject,
                    knowledgePoint: question.knowledgePoint
                })
            });
            
            if (!res.ok) throw new Error('Failed to add wrong');
            return await res.json();
        } catch (error) {
            console.error('添加错题失败:', error);
            return LocalStorage.addWrongQuestion(question, userAnswer);
        }
    },
    
    async removeWrongQuestion(wrongId) {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return;
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/wrongs/${wrongId}`, {
                method: 'DELETE'
            });
            
            if (!res.ok) throw new Error('Failed to remove wrong');
            return await res.json();
        } catch (error) {
            console.error('删除错题失败:', error);
            return LocalStorage.removeWrongQuestion(wrongId);
        }
    },
    
    async clearWrongQuestions() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return;
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/wrongs`, {
                method: 'DELETE'
            });
            
            if (!res.ok) throw new Error('Failed to clear wrongs');
            return await res.json();
        } catch (error) {
            console.error('清空错题失败:', error);
            return LocalStorage.clearWrongQuestions();
        }
    },
    
    async getPracticeState() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return null;
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/practice-state`);
            if (!res.ok) throw new Error('Failed to fetch practice state');
            return await res.json();
        } catch (error) {
            console.error('获取练习状态失败:', error);
            return LocalStorage.getPracticeState();
        }
    },
    
    async savePracticeState(state) {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return;
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/practice-state`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    grade: state.selectedGrade,
                    semester: state.selectedSemester,
                    questions: state.currentQuestions,
                    currentIndex: state.currentIndex,
                    userAnswers: state.userAnswers,
                    elapsedSeconds: state.elapsedSeconds
                })
            });
            
            if (!res.ok) throw new Error('Failed to save practice state');
            return await res.json();
        } catch (error) {
            console.error('保存练习状态失败:', error);
            return LocalStorage.savePracticeState(state);
        }
    },
    
    async clearPracticeState() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return;
        
        try {
            const res = await fetch(`${this.apiBase}/users/${userId}/practice-state`, {
                method: 'DELETE'
            });
            
            if (!res.ok) throw new Error('Failed to clear practice state');
            return await res.json();
        } catch (error) {
            console.error('清除练习状态失败:', error);
            return LocalStorage.clearPracticeState();
        }
    },
    
    async exportData() {
        const userId = sessionStorage.getItem('zhongkao_current_user');
        if (!userId) return null;
        
        try {
            const res = await fetch(`${this.apiBase}/export/${userId}`);
            if (!res.ok) throw new Error('Failed to export data');
            return await res.json();
        } catch (error) {
            console.error('导出数据失败:', error);
            return LocalStorage.exportData();
        }
    }
};

// 统一存储接口
const Storage = {
    mode: 'auto', // 'api' | 'local' | 'auto'
    
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
    
    // 初始化：自动检测后端 API
    async init() {
        const useApi = await ApiStorage.init();
        this.mode = useApi ? 'api' : 'local';
        
        // 代理所有方法到正确的实现
        if (this.mode === 'api') {
            this.getUsers = () => ApiStorage.getUsers();
            this.createUser = (name) => ApiStorage.createUser(name);
            this.deleteUser = (id) => ApiStorage.deleteUser(id);
            this.getStats = () => ApiStorage.getStats();
            this.getHistory = () => ApiStorage.getHistory();
            this.addHistory = (record) => ApiStorage.addHistory(record);
            this.getWrongQuestions = () => ApiStorage.getWrongQuestions();
            this.addWrongQuestion = (q, a) => ApiStorage.addWrongQuestion(q, a);
            this.removeWrongQuestion = (id) => ApiStorage.removeWrongQuestion(id);
            this.clearWrongQuestions = () => ApiStorage.clearWrongQuestions();
            this.getPracticeState = () => ApiStorage.getPracticeState();
            this.savePracticeState = (state) => ApiStorage.savePracticeState(state);
            this.clearPracticeState = () => ApiStorage.clearPracticeState();
            this.exportData = () => ApiStorage.exportData();
        } else {
            this.getUsers = () => LocalStorage.getUsers();
            this.createUser = (name) => LocalStorage.createUser(name);
            this.deleteUser = (id) => LocalStorage.deleteUser(id);
            this.getStats = () => LocalStorage.getStats();
            this.getHistory = () => LocalStorage.getHistory();
            this.addHistory = (record) => LocalStorage.addHistory(record);
            this.getWrongQuestions = () => LocalStorage.getWrongQuestions();
            this.addWrongQuestion = (q, a) => LocalStorage.addWrongQuestion(q, a);
            this.removeWrongQuestion = (id) => LocalStorage.removeWrongQuestion(id);
            this.clearWrongQuestions = () => LocalStorage.clearWrongQuestions();
            this.getPracticeState = () => LocalStorage.getPracticeState();
            this.savePracticeState = (state) => LocalStorage.savePracticeState(state);
            this.clearPracticeState = () => LocalStorage.clearPracticeState();
            this.exportData = () => LocalStorage.exportData();
        }
        
        console.log(`📦 存储模式：${this.mode === 'api' ? '🌐 API' : '📱 本地存储'}`);
        return this.mode;
    },
    
    // 手动设置 API 地址
    async setApiBase(url) {
        const config = StorageConfig.get();
        config.apiBase = url;
        StorageConfig.save(config);
        
        ApiStorage.apiBase = url;
        await this.init();
    },
    
    // 切换到本地模式
    useLocalMode() {
        const config = StorageConfig.get();
        config.mode = 'local';
        StorageConfig.save(config);
        this.init();
    },
    
    // 切换到 API 模式
    async useApiMode(apiBase) {
        const config = StorageConfig.get();
        config.mode = 'api';
        config.apiBase = apiBase;
        StorageConfig.save(config);
        await this.init();
    },
    
    // 重置为自动检测
    async resetToAuto() {
        const config = StorageConfig.get();
        config.mode = 'auto';
        config.apiBase = null;
        StorageConfig.save(config);
        await this.init();
    },
    
    // 获取当前配置
    getConfig() {
        return StorageConfig.get();
    }
};
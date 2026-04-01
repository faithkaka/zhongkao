// 浏览器本地存储管理模块 - 数据库版本（使用 API）
const API_BASE = 'http://localhost:8088/api';

const Storage = {
    // 当前用户 ID（从 sessionStorage 获取，页面关闭后清除）
    getCurrentUserId() {
        return sessionStorage.getItem('zhongkao_current_user');
    },

    setCurrentUser(userId) {
        sessionStorage.setItem('zhongkao_current_user', userId);
    },

    // 获取所有用户列表
    async getUsers() {
        try {
            const res = await fetch(`${API_BASE}/users`);
            if (!res.ok) throw new Error('Failed to fetch users');
            return await res.json();
        } catch (error) {
            console.error('获取用户列表失败:', error);
            return [];
        }
    },

    // 创建新用户
    async createUser(username) {
        try {
            const res = await fetch(`${API_BASE}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: username })
            });
            
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.error || '创建失败');
            }
            
            const user = await res.json();
            this.setCurrentUser(user.id);
            return user;
        } catch (error) {
            console.error('创建用户失败:', error);
            throw error;
        }
    },

    // 删除用户
    async deleteUser(userId) {
        try {
            const res = await fetch(`${API_BASE}/users/${userId}`, {
                method: 'DELETE'
            });
            
            if (!res.ok) throw new Error('删除失败');
            
            // 如果是当前用户，清除会话
            if (this.getCurrentUserId() === userId) {
                this.clearCurrentUser();
            }
            
            return true;
        } catch (error) {
            console.error('删除用户失败:', error);
            throw error;
        }
    },

    // 清除当前用户
    clearCurrentUser() {
        sessionStorage.removeItem('zhongkao_current_user');
    },

    // 切换用户
    switchUser(userId) {
        this.setCurrentUser(userId);
    },

    // 获取统计数据
    async getStats() {
        const userId = this.getCurrentUserId();
        if (!userId) {
            return { totalDays: 0, totalQuestions: 0, totalCorrect: 0, accuracy: 0 };
        }
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/stats`);
            if (!res.ok) throw new Error('Failed to fetch stats');
            return await res.json();
        } catch (error) {
            console.error('获取统计失败:', error);
            return { totalDays: 0, totalQuestions: 0, totalCorrect: 0, accuracy: 0 };
        }
    },

    // 获取历史记录
    async getHistory() {
        const userId = this.getCurrentUserId();
        if (!userId) return [];
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/history`);
            if (!res.ok) throw new Error('Failed to fetch history');
            return await res.json();
        } catch (error) {
            console.error('获取历史失败:', error);
            return [];
        }
    },

    // 添加历史记录
    async addHistory(record) {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/history`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(record)
            });
            
            if (!res.ok) throw new Error('Failed to add history');
            return await res.json();
        } catch (error) {
            console.error('添加历史失败:', error);
        }
    },

    // 获取错题
    async getWrongQuestions() {
        const userId = this.getCurrentUserId();
        if (!userId) return [];
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/wrongs`);
            if (!res.ok) throw new Error('Failed to fetch wrongs');
            return await res.json();
        } catch (error) {
            console.error('获取错题失败:', error);
            return [];
        }
    },

    // 按科目获取错题
    async getWrongQuestionsBySubject(subject) {
        const wrongs = await this.getWrongQuestions();
        return subject === 'all' ? wrongs : wrongs.filter(w => w.subject === subject);
    },

    // 添加错题
    async addWrongQuestion(question, userAnswer) {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/wrongs`, {
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
        }
    },

    // 删除错题
    async removeWrongQuestion(wrongId) {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/wrongs/${wrongId}`, {
                method: 'DELETE'
            });
            
            if (!res.ok) throw new Error('Failed to remove wrong');
            return await res.json();
        } catch (error) {
            console.error('删除错题失败:', error);
        }
    },

    // 清空错题本
    async clearWrongQuestions() {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/wrongs`, {
                method: 'DELETE'
            });
            
            if (!res.ok) throw new Error('Failed to clear wrongs');
            return await res.json();
        } catch (error) {
            console.error('清空错题失败:', error);
        }
    },

    // 获取练习状态
    async getPracticeState() {
        const userId = this.getCurrentUserId();
        if (!userId) return null;
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/practice-state`);
            if (!res.ok) throw new Error('Failed to fetch practice state');
            return await res.json();
        } catch (error) {
            console.error('获取练习状态失败:', error);
            return null;
        }
    },

    // 保存练习状态
    async savePracticeState(state) {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/practice-state`, {
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
        }
    },

    // 清除练习状态
    async clearPracticeState() {
        const userId = this.getCurrentUserId();
        if (!userId) return;
        
        try {
            const res = await fetch(`${API_BASE}/users/${userId}/practice-state`, {
                method: 'DELETE'
            });
            
            if (!res.ok) throw new Error('Failed to clear practice state');
            return await res.json();
        } catch (error) {
            console.error('清除练习状态失败:', error);
        }
    },

    // 导出数据
    async exportData() {
        const userId = this.getCurrentUserId();
        if (!userId) return null;
        
        try {
            const res = await fetch(`${API_BASE}/export/${userId}`);
            if (!res.ok) throw new Error('Failed to export data');
            return await res.json();
        } catch (error) {
            console.error('导出数据失败:', error);
            return null;
        }
    }
};
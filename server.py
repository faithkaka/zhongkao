#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中考刷题打卡应用 - 后端服务（纯 Python 内置模块，无需 Flask）
使用 http.server + SQLite 存储用户数据
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import sqlite3
import json
import os
from datetime import datetime
import uuid
import re

# 数据库文件路径
DB_PATH = os.path.join(os.path.dirname(__file__), 'zhongkao.db')

def get_db():
    """获取数据库连接"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """初始化数据库表"""
    conn = get_db()
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            name TEXT UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            total_days INTEGER DEFAULT 0,
            total_questions INTEGER DEFAULT 0
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS practice_history (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            grade INTEGER NOT NULL,
            semester TEXT NOT NULL,
            total_questions INTEGER NOT NULL,
            correct_count INTEGER NOT NULL,
            accuracy REAL NOT NULL,
            duration INTEGER NOT NULL,
            subject_stats TEXT NOT NULL,
            question_ids TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS wrong_questions (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            question_id TEXT NOT NULL,
            question TEXT NOT NULL,
            options TEXT NOT NULL,
            answer TEXT NOT NULL,
            user_answer TEXT NOT NULL,
            explanation TEXT NOT NULL,
            subject TEXT NOT NULL,
            knowledge_point TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id),
            UNIQUE(user_id, question_id)
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS practice_state (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL UNIQUE,
            grade INTEGER NOT NULL,
            semester TEXT NOT NULL,
            questions TEXT NOT NULL,
            current_index INTEGER NOT NULL,
            user_answers TEXT NOT NULL,
            elapsed_seconds INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')
    
    conn.commit()
    conn.close()
    print("✅ 数据库初始化完成")

class APIHandler(BaseHTTPRequestHandler):
    STATIC_DIR = os.path.dirname(__file__)
    
    def send_json(self, data, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))
    
    def send_file(self, filepath, content_type):
        try:
            with open(filepath, 'rb') as f:
                content = f.read()
            self.send_response(200)
            self.send_header('Content-Type', content_type)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(content)
        except FileNotFoundError:
            self.send_error(404, 'File not found')
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        
        if path.startswith('/api/'):
            self.handle_api_get(path)
        elif path == '/' or path == '':
            self.send_file(os.path.join(self.STATIC_DIR, 'index.html'), 'text/html; charset=utf-8')
        else:
            filepath = os.path.join(self.STATIC_DIR, path.lstrip('/'))
            if os.path.exists(filepath):
                if path.endswith('.html'): content_type = 'text/html; charset=utf-8'
                elif path.endswith('.css'): content_type = 'text/css'
                elif path.endswith('.js'): content_type = 'application/javascript'
                elif path.endswith('.json'): content_type = 'application/json'
                elif path.endswith('.png'): content_type = 'image/png'
                elif path.endswith('.jpg') or path.endswith('.jpeg'): content_type = 'image/jpeg'
                elif path.endswith('.ico'): content_type = 'image/x-icon'
                else: content_type = 'application/octet-stream'
                self.send_file(filepath, content_type)
            else:
                self.send_error(404, 'File not found')
    
    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path
        
        if path.startswith('/api/'):
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode('utf-8')) if post_data else {}
            except:
                data = {}
            self.handle_api_post(path, data)
        else:
            self.send_error(404, 'Not found')
    
    def do_DELETE(self):
        parsed = urlparse(self.path)
        path = parsed.path
        
        if path.startswith('/api/'):
            self.handle_api_delete(path)
        else:
            self.send_error(404, 'Not found')
    
    def handle_api_get(self, path):
        # 使用正则表达式匹配路由
        # GET /api/users
        if path == '/api/users':
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM users ORDER BY created_at DESC')
            users = [dict(row) for row in cursor.fetchall()]
            conn.close()
            self.send_json(users)
            return
        
        # GET /api/users/:id/stats
        match = re.match(r'^/api/users/([^/]+)/stats$', path)
        if match:
            user_id = match.group(1)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))
            user = cursor.fetchone()
            if not user:
                conn.close()
                self.send_json({'error': '用户不存在'}, 404)
                return
            cursor.execute('''
                SELECT COUNT(DISTINCT DATE(created_at)) as total_days,
                       SUM(total_questions) as total_questions,
                       SUM(correct_count) as total_correct
                FROM practice_history WHERE user_id = ?
            ''', (user_id,))
            stats = cursor.fetchone()
            conn.close()
            total_days = stats['total_days'] or 0
            total_questions = stats['total_questions'] or 0
            total_correct = stats['total_correct'] or 0
            accuracy = round((total_correct / total_questions * 100)) if total_questions > 0 else 0
            self.send_json({
                'totalDays': total_days,
                'totalQuestions': total_questions,
                'totalCorrect': total_correct,
                'accuracy': accuracy
            })
            return
        
        # GET /api/users/:id/history
        match = re.match(r'^/api/users/([^/]+)/history$', path)
        if match:
            user_id = match.group(1)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM practice_history WHERE user_id = ? ORDER BY created_at DESC LIMIT 100', (user_id,))
            history = []
            for row in cursor.fetchall():
                record = dict(row)
                record['subjectStats'] = json.loads(record['subject_stats'])
                record['questionIds'] = json.loads(record['question_ids'])
                record['date'] = record['created_at'].split(' ')[0]
                record['time'] = record['created_at'].split(' ')[1][:5]
                del record['subject_stats']
                del record['question_ids']
                history.append(record)
            conn.close()
            self.send_json(history)
            return
        
        # GET /api/users/:id/wrongs
        match = re.match(r'^/api/users/([^/]+)/wrongs$', path)
        if match:
            user_id = match.group(1)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM wrong_questions WHERE user_id = ? ORDER BY created_at DESC', (user_id,))
            wrongs = []
            for row in cursor.fetchall():
                wrong = dict(row)
                try:
                    wrong['options'] = json.loads(wrong['options'])
                except:
                    wrong['options'] = []
                wrongs.append(wrong)
            conn.close()
            self.send_json(wrongs)
            return
        
        # GET /api/users/:id/practice-state
        match = re.match(r'^/api/users/([^/]+)/practice-state$', path)
        if match:
            user_id = match.group(1)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM practice_state WHERE user_id = ?', (user_id,))
            row = cursor.fetchone()
            conn.close()
            if not row:
                self.send_json(None)
                return
            state = dict(row)
            state['questions'] = json.loads(state['questions'])
            state['userAnswers'] = json.loads(state['user_answers'])
            del state['user_answers']
            del state['user_id']
            self.send_json(state)
            return
        
        # GET /api/export/:id
        match = re.match(r'^/api/export/([^/]+)$', path)
        if match:
            user_id = match.group(1)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))
            user_row = cursor.fetchone()
            user = dict(user_row) if user_row else None
            cursor.execute('SELECT * FROM practice_history WHERE user_id = ?', (user_id,))
            history = [dict(row) for row in cursor.fetchall()]
            cursor.execute('SELECT * FROM wrong_questions WHERE user_id = ?', (user_id,))
            wrongs = [dict(row) for row in cursor.fetchall()]
            conn.close()
            self.send_json({
                'user': user,
                'history': history,
                'wrongs': wrongs,
                'exportDate': datetime.now().isoformat()
            })
            return
        
        self.send_json({'error': 'Not found'}, 404)
    
    def handle_api_post(self, path, data):
        # POST /api/users
        if path == '/api/users':
            username = data.get('name', '').strip()
            if not username:
                self.send_json({'error': '用户名不能为空'}, 400)
                return
            if len(username) > 10:
                self.send_json({'error': '用户名不能超过 10 个字符'}, 400)
                return
            try:
                conn = get_db()
                cursor = conn.cursor()
                user_id = 'user_' + str(uuid.uuid4())[:8]
                cursor.execute('INSERT INTO users (id, name) VALUES (?, ?)', (user_id, username))
                conn.commit()
                conn.close()
                self.send_json({'id': user_id, 'name': username, 'totalDays': 0, 'totalQuestions': 0})
            except sqlite3.IntegrityError:
                self.send_json({'error': '该用户名已存在'}, 400)
            return
        
        # POST /api/users/:id/history
        match = re.match(r'^/api/users/([^/]+)/history$', path)
        if match:
            user_id = match.group(1)
            record_id = str(uuid.uuid4())
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO practice_history 
                (id, user_id, grade, semester, total_questions, correct_count, accuracy, duration, subject_stats, question_ids)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                record_id, user_id, data['grade'], data['semester'],
                data['totalQuestions'], data['correctCount'], data['accuracy'],
                data['duration'], json.dumps(data['subjectStats']), json.dumps(data['questionIds'])
            ))
            cursor.execute('UPDATE users SET total_questions = total_questions + ? WHERE id = ?', 
                          (data['totalQuestions'], user_id))
            conn.commit()
            conn.close()
            self.send_json({'success': True, 'id': record_id})
            return
        
        # POST /api/users/:id/wrongs
        match = re.match(r'^/api/users/([^/]+)/wrongs$', path)
        if match:
            user_id = match.group(1)
            wrong_id = str(uuid.uuid4())
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('''
                INSERT OR IGNORE INTO wrong_questions 
                (id, user_id, question_id, question, options, answer, user_answer, explanation, subject, knowledge_point)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                wrong_id, user_id, data['id'], data['question'],
                json.dumps(data['options']), data['answer'], data['userAnswer'],
                data['explanation'], data['subject'], data.get('knowledgePoint', '')
            ))
            conn.commit()
            conn.close()
            self.send_json({'success': True})
            return
        
        # POST /api/users/:id/practice-state
        match = re.match(r'^/api/users/([^/]+)/practice-state$', path)
        if match:
            user_id = match.group(1)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('''
                INSERT OR REPLACE INTO practice_state 
                (id, user_id, grade, semester, questions, current_index, user_answers, elapsed_seconds)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                str(uuid.uuid4()), user_id,
                data['grade'], data['semester'],
                json.dumps(data['questions']), data['currentIndex'],
                json.dumps(data['userAnswers']), data['elapsedSeconds']
            ))
            conn.commit()
            conn.close()
            self.send_json({'success': True})
            return
        
        self.send_json({'error': 'Not found'}, 404)
    
    def handle_api_delete(self, path):
        # DELETE /api/users/:id
        match = re.match(r'^/api/users/([^/]+)$', path)
        if match:
            user_id = match.group(1)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('DELETE FROM practice_history WHERE user_id = ?', (user_id,))
            cursor.execute('DELETE FROM wrong_questions WHERE user_id = ?', (user_id,))
            cursor.execute('DELETE FROM practice_state WHERE user_id = ?', (user_id,))
            cursor.execute('DELETE FROM users WHERE id = ?', (user_id,))
            conn.commit()
            conn.close()
            self.send_json({'success': True})
            return
        
        # DELETE /api/users/:id/wrongs
        match = re.match(r'^/api/users/([^/]+)/wrongs$', path)
        if match:
            user_id = match.group(1)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('DELETE FROM wrong_questions WHERE user_id = ?', (user_id,))
            conn.commit()
            conn.close()
            self.send_json({'success': True})
            return
        
        # DELETE /api/users/:id/wrongs/:wrong_id
        match = re.match(r'^/api/users/([^/]+)/wrongs/([^/]+)$', path)
        if match:
            user_id = match.group(1)
            wrong_id = match.group(2)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('DELETE FROM wrong_questions WHERE id = ? AND user_id = ?', (wrong_id, user_id))
            conn.commit()
            conn.close()
            self.send_json({'success': True})
            return
        
        # DELETE /api/users/:id/practice-state
        match = re.match(r'^/api/users/([^/]+)/practice-state$', path)
        if match:
            user_id = match.group(1)
            conn = get_db()
            cursor = conn.cursor()
            cursor.execute('DELETE FROM practice_state WHERE user_id = ?', (user_id,))
            conn.commit()
            conn.close()
            self.send_json({'success': True})
            return
        
        self.send_json({'error': 'Not found'}, 404)
    
    def log_message(self, format, *args):
        pass

def run_server(port=8088):
    init_db()
    server = HTTPServer(('0.0.0.0', port), APIHandler)
    print("🚀 中考刷题应用后端服务启动成功！")
    print("📊 数据库路径:", DB_PATH)
    print("🌐 访问地址：http://localhost:" + str(port))
    print("💡 按 Ctrl+C 停止服务")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 服务已停止")
        server.shutdown()

if __name__ == '__main__':
    run_server(8088)
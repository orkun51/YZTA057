const API_BASE = 'http://localhost:8000';

// JWT token management
let token = localStorage.getItem('token');

export const setToken = (newToken) => {
    token = newToken;
    localStorage.setItem('token', newToken);
};

export const getToken = () => token;

export const clearToken = () => {
    token = null;
    localStorage.removeItem('token');
};

// Auth API calls
export const register = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Register error:', error);
        throw new Error(`Kayıt hatası: ${error.message}`);
    }
};

export const login = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        if (data.access_token) {
            setToken(data.access_token);
        }
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw new Error(`Giriş hatası: ${error.message}`);
    }
};

// Students API calls
export const getStudents = async () => {
    try {
        const response = await fetch(`${API_BASE}/students/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) {
            if (response.status === 401) {
                clearToken();
                throw new Error('Oturum süresi dolmuş. Lütfen tekrar giriş yapın.');
            }
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Get students error:', error);
        throw error;
    }
};

export const addStudent = async (studentData) => {
    try {
        const response = await fetch(`${API_BASE}/students/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(studentData)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Add student error:', error);
        throw new Error(`Öğrenci ekleme hatası: ${error.message}`);
    }
};

export const uploadStudentFile = async (studentId, file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch(`${API_BASE}/students/${studentId}/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Upload file error:', error);
        throw new Error(`Dosya yükleme hatası: ${error.message}`);
    }
};

// AI API calls
export const getAiSuggestion = async (prompt, observations = null) => {
    try {
        const payload = prompt ? { prompt } : { observations };
        
        const response = await fetch(`${API_BASE}/ai/suggest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || `HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('AI suggestion error:', error);
        throw new Error(`AI önerisi hatası: ${error.message}`);
    }
}; 
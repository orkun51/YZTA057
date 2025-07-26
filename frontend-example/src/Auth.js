import React, { useState } from 'react';
import { login, register } from './api';

const Auth = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);
        
        try {
            if (isLogin) {
                const result = await login(username, password);
                if (result.access_token) {
                    onLogin();
                } else {
                    setMessage('Giriş başarısız: Geçersiz yanıt');
                }
            } else {
                const result = await register(username, password);
                if (result.msg) {
                    setMessage('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');
                    setIsLogin(true);
                } else {
                    setMessage('Kayıt başarısız: Geçersiz yanıt');
                }
            }
        } catch (error) {
            console.error('Auth error:', error);
            setMessage(error.message || 'Bilinmeyen bir hata oluştu');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
            <h2>{isLogin ? 'Giriş Yap' : 'Kayıt Ol'}</h2>
            
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Kullanıcı Adı:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        disabled={loading}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                    <label>Şifre:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ 
                        width: '100%', 
                        padding: '10px', 
                        backgroundColor: loading ? '#ccc' : '#007bff', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loading ? 'İşleniyor...' : (isLogin ? 'Giriş Yap' : 'Kayıt Ol')}
                </button>
            </form>
            
            {message && (
                <div style={{ 
                    marginTop: '10px', 
                    padding: '10px', 
                    backgroundColor: message.includes('başarılı') ? '#d4edda' : '#f8d7da', 
                    borderRadius: '4px',
                    color: message.includes('başarılı') ? '#155724' : '#721c24'
                }}>
                    {message}
                </div>
            )}
            
            <button
                onClick={() => {
                    if (!loading) {
                        setIsLogin(!isLogin);
                        setMessage('');
                    }
                }}
                disabled={loading}
                style={{ 
                    marginTop: '15px', 
                    background: 'none', 
                    border: 'none', 
                    color: '#007bff', 
                    textDecoration: 'underline', 
                    cursor: loading ? 'not-allowed' : 'pointer' 
                }}
            >
                {isLogin ? 'Hesabınız yok mu? Kayıt olun' : 'Zaten hesabınız var mı? Giriş yapın'}
            </button>
        </div>
    );
};

export default Auth; 
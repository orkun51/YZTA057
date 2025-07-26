import React, { useState, useEffect } from 'react';
import Auth from './Auth';
import StudentList from './StudentList';
import AiSuggest from './AiSuggest';
import { getToken, clearToken } from './api';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('students');

    useEffect(() => {
        // Check if user is already logged in
        const token = getToken();
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        clearToken();
        setIsAuthenticated(false);
    };

    if (!isAuthenticated) {
        return <Auth onLogin={handleLogin} />;
    }

    return (
        <div>
            {/* Navigation */}
            <nav style={{ backgroundColor: '#333', padding: '15px', color: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                    <h1 style={{ margin: 0 }}>Beni Anla - Öğrenci Takip Sistemi</h1>
                    <div>
                        <button
                            onClick={() => setActiveTab('students')}
                            style={{
                                marginRight: '10px',
                                padding: '8px 16px',
                                backgroundColor: activeTab === 'students' ? '#007bff' : 'transparent',
                                color: 'white',
                                border: '1px solid white',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Öğrenciler
                        </button>
                        <button
                            onClick={() => setActiveTab('ai')}
                            style={{
                                marginRight: '10px',
                                padding: '8px 16px',
                                backgroundColor: activeTab === 'ai' ? '#007bff' : 'transparent',
                                color: 'white',
                                border: '1px solid white',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            AI Önerileri
                        </button>
                        <button
                            onClick={handleLogout}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Çıkış
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                {activeTab === 'students' && <StudentList onLogout={handleLogout} />}
                {activeTab === 'ai' && <AiSuggest />}
            </div>
        </div>
    );
}

export default App; 
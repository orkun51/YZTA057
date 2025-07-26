import React, { useState } from 'react';
import { getAiSuggestion } from './api';

const AiSuggest = () => {
    const [prompt, setPrompt] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const mockObservations = [
        {
            date: "2024-06-20",
            attention: 3,
            emotion: 4,
            social: 2,
            note: "Ders sırasında sürekli etrafına bakıyor, dikkati dağınık"
        },
        {
            date: "2024-06-21",
            attention: 2,
            emotion: 3,
            social: 1,
            note: "Arkadaşlarıyla iletişim kurmakta zorlanıyor"
        },
        {
            date: "2024-06-22",
            attention: 4,
            emotion: 5,
            social: 3,
            note: "Bugün daha aktif, grup çalışmasında yer aldı"
        }
    ];

    const handlePromptSubmit = async (e) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setLoading(true);
        setMessage('');
        
        try {
            const result = await getAiSuggestion(prompt);
            setSuggestion(result.suggestion);
        } catch (error) {
            setMessage('AI önerisi alınırken hata: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleObservationsSubmit = async () => {
        setLoading(true);
        setMessage('');
        
        try {
            const result = await getAiSuggestion(null, mockObservations);
            setSuggestion(result.suggestion);
        } catch (error) {
            setMessage('AI önerisi alınırken hata: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>AI Önerileri</h2>

            {message && (
                <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#f8d7da', borderRadius: '4px' }}>
                    {message}
                </div>
            )}

            {/* Prompt-based AI suggestion */}
            <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <h3>Özel Soru Sor</h3>
                <form onSubmit={handlePromptSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>AI'ya sorunuzu yazın:</label>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Örnek: Öğrencimin dikkat sorunu için ne yapabilirim?"
                            style={{ width: '100%', padding: '8px', marginTop: '5px', height: '80px' }}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={loading}
                        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
                    >
                        {loading ? 'İşleniyor...' : 'AI Önerisi Al'}
                    </button>
                </form>
            </div>

            {/* Mock observations-based AI suggestion */}
            <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <h3>Örnek Gözlemlerle AI Önerisi</h3>
                <p>Bu örnek gözlem verilerine göre AI önerisi alın:</p>
                
                <div style={{ marginBottom: '15px', fontSize: '14px' }}>
                    {mockObservations.map((obs, index) => (
                        <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                            <strong>{obs.date}:</strong> Dikkat: {obs.attention}/5, Duygu: {obs.emotion}/5, Sosyal: {obs.social}/5
                            <br />
                            <em>{obs.note}</em>
                        </div>
                    ))}
                </div>
                
                <button 
                    onClick={handleObservationsSubmit}
                    disabled={loading}
                    style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                    {loading ? 'İşleniyor...' : 'Gözlemlere Göre Öneri Al'}
                </button>
            </div>

            {/* AI Response */}
            {suggestion && (
                <div style={{ padding: '20px', backgroundColor: '#e7f3ff', border: '1px solid #b3d9ff', borderRadius: '4px' }}>
                    <h3>AI Önerisi:</h3>
                    <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                        {suggestion}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AiSuggest; 
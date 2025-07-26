import React, { useState, useEffect } from 'react';
import { getStudents, addStudent, uploadStudentFile, getToken, clearToken } from './api';

const StudentList = ({ onLogout }) => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({ name: '', birth_date: '', notes: '' });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const data = await getStudents();
            setStudents(data);
        } catch (error) {
            if (error.message.includes('401')) {
                clearToken();
                onLogout();
            }
            setMessage('Öğrenciler yüklenirken hata: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddStudent = async (e) => {
        e.preventDefault();
        try {
            const result = await addStudent(newStudent);
            setStudents([...students, result]);
            setNewStudent({ name: '', birth_date: '', notes: '' });
            setMessage('Öğrenci başarıyla eklendi!');
        } catch (error) {
            setMessage('Öğrenci eklenirken hata: ' + error.message);
        }
    };

    const handleFileUpload = async (studentId, file) => {
        try {
            const result = await uploadStudentFile(studentId, file);
            setMessage(`Dosya yüklendi: ${result.filename}`);
        } catch (error) {
            setMessage('Dosya yüklenirken hata: ' + error.message);
        }
    };

    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Öğrenci Listesi</h2>
                <button onClick={onLogout} style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
                    Çıkış Yap
                </button>
            </div>

            {message && (
                <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: message.includes('başarıyla') ? '#d4edda' : '#f8d7da', borderRadius: '4px' }}>
                    {message}
                </div>
            )}

            {/* Add New Student Form */}
            <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <h3>Yeni Öğrenci Ekle</h3>
                <form onSubmit={handleAddStudent}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Ad Soyad:</label>
                        <input
                            type="text"
                            value={newStudent.name}
                            onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                            required
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Doğum Tarihi:</label>
                        <input
                            type="date"
                            value={newStudent.birth_date}
                            onChange={(e) => setNewStudent({...newStudent, birth_date: e.target.value})}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Notlar:</label>
                        <textarea
                            value={newStudent.notes}
                            onChange={(e) => setNewStudent({...newStudent, notes: e.target.value})}
                            style={{ width: '100%', padding: '8px', marginTop: '5px', height: '60px' }}
                        />
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Öğrenci Ekle
                    </button>
                </form>
            </div>

            {/* Students List */}
            <div>
                <h3>Mevcut Öğrenciler</h3>
                {students.length === 0 ? (
                    <p>Henüz öğrenci eklenmemiş.</p>
                ) : (
                    <div style={{ display: 'grid', gap: '15px' }}>
                        {students.map((student) => (
                            <div key={student.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '4px' }}>
                                <h4>{student.name}</h4>
                                {student.birth_date && <p>Doğum Tarihi: {student.birth_date}</p>}
                                {student.notes && <p>Notlar: {student.notes}</p>}
                                
                                <div style={{ marginTop: '10px' }}>
                                    <label>Dosya Yükle:</label>
                                    <input
                                        type="file"
                                        onChange={(e) => {
                                            if (e.target.files[0]) {
                                                handleFileUpload(student.id, e.target.files[0]);
                                            }
                                        }}
                                        style={{ marginLeft: '10px' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentList; 
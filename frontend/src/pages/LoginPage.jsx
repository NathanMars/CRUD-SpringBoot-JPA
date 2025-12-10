import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import '../index.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const authdata = window.btoa(email + ':' + password);

        try {
            const response = await api.post('/auth/login', { email, password });

            localStorage.setItem('user', JSON.stringify({ authdata, email }));
            navigate('/dashboard');
        } catch (err) {
            console.error("Erro de Login: ", err);
            setError('Senha ou e-mail incorretos!');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Gerenciador de Funcionários</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-msg">{error}</p>}
                    <button type="submit" className="btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

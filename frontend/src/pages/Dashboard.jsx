import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeForm from '../components/EmployeeForm';
import '../index.css';

const Dashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try {
            const response = await api.get('/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error("Erro ao carregar funcionários: ", error);
            if (error.response && error.response.status === 401) {
                handleLogout();
            }
        }
    };

    const handleSave = async (employee) => {
        try {
            if (employee.id) {
                // Update
                await api.put(`/employees/${employee.id}`, employee);
            } else {
                // Create
                await api.post('/employees', employee);
            }
            setEditingEmployee(null);
            loadEmployees();
        } catch (error) {
            console.error("Erro salvando dados: ", error);
            alert("Não foi possível cadastrar o funcionário no momento.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Deseja mesmo deletar este cadastro?")) {
            try {
                await api.delete(`/employees/${id}`);
                loadEmployees();
            } catch (error) {
                console.error("Erro ao deletar funcionário: ", error);
                alert("Não foi possível deletar este cadastro no momento.");
            }
        }
    };

    const handleEdit = (employee) => {
        setEditingEmployee(employee);
    };

    const handleCancelEdit = () => {
        setEditingEmployee(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Gerenciador de Funcionários</h1>
                <button onClick={handleLogout} className="btn-logout">Sair</button>
            </header>

            <main className="dashboard-content">
                <section className="list-section">
                    <EmployeeTable
                        employees={employees}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </section>

                <section className="form-section">
                    <EmployeeForm
                        employeeToEdit={editingEmployee}
                        onSave={handleSave}
                        onCancel={handleCancelEdit}
                    />
                </section>
            </main>
        </div>
    );
};

export default Dashboard;

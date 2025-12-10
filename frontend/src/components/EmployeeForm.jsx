import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ employeeToEdit, onSave, onCancel }) => {
    const [employee, setEmployee] = useState({
        name: '',
        admissionDate: '',
        salary: '',
        status: 'A'
    });

    useEffect(() => {
        if (employeeToEdit) {
            setEmployee(employeeToEdit);
        } else {
            setEmployee({
                name: '',
                admissionDate: '',
                salary: '',
                status: 'A'
            });
        }
    }, [employeeToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(employee);
    };

    return (
        <div className="form-container">
            <h3>{employeeToEdit ? 'Editar Cadastro' : 'Novo Cadastro'}</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Data de Admissão</label>
                    <input
                        type="date"
                        name="admissionDate"
                        value={employee.admissionDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Salário</label>
                    <input
                        type="number"
                        name="salary"
                        step="0.01"
                        value={employee.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select name="status" value={employee.status} onChange={handleChange}>
                        <option value="A">Ativo</option>
                        <option value="I">Inativo</option>
                    </select>
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn-primary">Salvar</button>
                    <button type="button" onClick={onCancel} className="btn-secondary">Cancelar</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;

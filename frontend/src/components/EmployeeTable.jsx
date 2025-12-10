import React from 'react';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data de Admissão</th>
                        <th>Salário</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.admissionDate}</td>
                            <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(emp.salary)}</td>
                            <td>
                                <span className={`status-badge ${emp.status === 'A' ? 'active' : 'inactive'}`}>
                                    {emp.status === 'A' ? 'Ativo' : 'Inativo'}
                                </span>
                            </td>
                            <td>
                                <button className="btn-icon edit" onClick={() => onEdit(emp)}>Editar</button>
                                <button className="btn-icon delete" onClick={() => onDelete(emp.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;

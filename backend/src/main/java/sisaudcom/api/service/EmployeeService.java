package sisaudcom.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sisaudcom.api.entity.Employee;
import sisaudcom.api.repository.EmployeeRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> findById(Integer id) {
        return employeeRepository.findById(id);
    }

    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Optional<Employee> update(Integer id, Employee employee) {
        return employeeRepository.findById(id)
                .map(existingEmployee -> {
                    existingEmployee.setName(employee.getName());
                    existingEmployee.setAdmissionDate(employee.getAdmissionDate());
                    existingEmployee.setSalary(employee.getSalary());
                    existingEmployee.setStatus(employee.getStatus());
                    return employeeRepository.save(existingEmployee);
                });
    }

    public void deleteById(Integer id) {
        employeeRepository.deleteById(id);
    }
}

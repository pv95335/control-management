SELECT department_id, departmentName, title, salary
FROM department
INNER JOIN jobInfo ON jobInfo.department_id = department.id;

SELECT employeeFirstName, employeeLastName, employee_id, role_id, title, salary, manager_id 
FROM jobInfo
INNER JOIN employeeInfo ON employeeInfo.id = jobInfo.id;

SELECT employeeFirstName, employeeLastName, employee_id, departmentName, role_id, manager_id
FROM employeeInfo
INNER JOIN department ON department.id = employeeInfo.id;

-- SELECT employeeFirstName, employeeLastName, employeeId, departmentName, department_id, title, salary, role_id, manager_id
-- FROM employeeInfo
-- INNER JOIN department ON department.id = employeeInfo.id;
-- INNER JOIN jobInfo ON jobInfo.id = department.id;
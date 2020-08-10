INSERT INTO department (departmentName) values ('Kitchen');
INSERT INTO department (departmentName) values ('Dining');
INSERT INTO department (departmentName) values ('Human Resources');

INSERT INTO jobInfo (title, salary, department_id) values ('Head Chef', '35,000', 1);
INSERT INTO jobInfo (title, salary, department_id) values ('Host', '30,000', 2);
INSERT INTO jobInfo (title, salary, department_id) values ('HR Rep', '50,000', 3);

INSERT INTO employeeInfo (employeeFirstName, employeeLastName, employee_id, role_id, manager_id) values ('Max', 'Ride', 1, 1, null);
INSERT INTO employeeInfo (employeeFirstName, employeeLastName, employee_id, role_id, manager_id) values ('Fitz', 'Chivalry', 2, 2, null);
INSERT INTO employeeInfo (employeeFirstName, employeeLastName, employee_id, role_id, manager_id) values ('Victor', 'Frankenstein', 3, 3, null);


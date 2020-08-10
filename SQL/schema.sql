DROP DATABASE IF EXISTS con_manage;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS jobINFO;
DROP TABLE IF EXISTS employeeInfo;

CREATE DATABASE con_manage;
USE con_manage;

CREATE TABLE department(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    departmentName VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE jobInfo(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary VARCHAR(30),
    department_id INTEGER(11),
    PRIMARY KEY (id)
);

CREATE TABLE employeeInfo(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    employeeFirstName VARCHAR(50),
    employeeLastName VARCHAR(50),
    employee_id VARCHAR(50),
    role_id INTEGER(11),
    manager_id INTEGER(11),
    PRIMARY KEY (id)
);



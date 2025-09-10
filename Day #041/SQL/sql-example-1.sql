CREATE DATABASE XYZ;
USE XYZ;

CREATE TABLE employee(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    salary INT
);

INSERT INTO employee (name, salary)VALUES ("adam",25000),("bob",30000),("casey",40000);

SELECT * FROM employee;

-- DELETE FROM employee
-- WHERE id > 3;


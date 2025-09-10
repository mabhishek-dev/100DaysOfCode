use college;

CREATE TABLE dept( -- Parent table
	id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE teacher( -- Child table as this is where we create a foreign key
	id INT PRIMARY KEY,
    name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES dept(id)
	ON UPDATE CASCADE -- So if there's any change in the parent table then here this table whi h references it also updates
    ON DELETE CASCADE -- Same as above, so we use CASCADE
);

INSERT INTO dept
VALUES
(101, "english"),
(102, "IT");

INSERT INTO teacher
VALUES
(101, "A", 101),
(102, "B", 102);


SELECT * FROM dept;
SELECT * FROM teacher;



UPDATE dept -- Now teacher table also gets updated due CASCADE
set id = 100
WHERE id = 101;

DELETE FROM dept -- Now teacher does not have the row where id=100
WHERE id = 100;




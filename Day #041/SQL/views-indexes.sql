-- VIEWS
CREATE DATABASE views;
USE views;

CREATE TABLE student(
	rollno INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT NOT NULL,
    grade VARCHAR(1),
    city VARCHAR(20)
);

INSERT INTO student(rollno, name, marks, grade, city)
VALUES
(101, "anil", 78, "C", "Pune"),
(102, "bhumika", 93, "A", "Mumbai"),
(103, "chetan", 85, "B", "Mumbai"),
(104, "dhruv", 96, "A", "Delhi"),
(105, "emanuel", 12, "F", "Delhi"),
(106, "farah", 82, "B", "Delhi");

SELECT * FROM student;

CREATE VIEW demoview AS
SELECT rollno,name,grade FROM student;

SELECT * FROM demoview;

INSERT INTO student(rollno, name, marks, grade, city)
VALUES
(107, "demo", 90, "A", "Bangalore");

SELECT * FROM demoview; -- We get the updates view which has the above data in it too becuase evry time we query a view it 
						-- recreates the view with updtaed data

DROP VIEW demoview;
                        
/*
A view allows us to create a seperate temporary table with all the the required columns only
*/




-- INDEXES
-- They allows us to navigate fast

CREATE INDEX indexdemo1 
ON student(rollno);

DROP INDEX indexdemo1 ON student;

CREATE INDEX indexdemo2
ON student(rollno,name);

SELECT rollno,name -- As an index already exits, sql will automatically use index if its the faster way or 
FROM student;	   -- if manual way is faster it will consider that.












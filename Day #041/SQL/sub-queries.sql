CREATE DATABASE subqueries;
USE subqueries;

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
/*Sub Queries in WHERE -most done*/

-- Without Sub queries

SELECT AVG(marks)
FROM STUDENT; -- We find out marks

SELECT name, marks
FROM student 
WHERE marks > 74.33; -- Use the avg marks manually(its static), but if any changes in marks then the avg changes 
					 -- but we have hard coded it so its not dynamic.

-- Using Sub queriesn -> Dynamic, it wont matter if marks changes
SELECT name, marks
FROM student 
WHERE marks > (SELECT AVG(marks) FROM STUDENT);


SELECT name, rollno
FROM student
WHERE rollno % 2 = 0;

SELECT name, rollno
FROM student
WHERE rollno IN (
	SELECT rollno
	FROM student
	WHERE rollno % 2 = 0
);


/*Sub Queries in FROM -Very less used*/
SELECT MAX(marks)
FROM (SELECT * FROM student WHERE city = "Delhi") AS temp; -- By doing this we narrow down the list to a perticular city 
														   -- and on that we find the avg max and we must give an alias.
                                                           
                                                           
/*Sub Queries using SELECT -Very less used*/
SELECT (SELECT MAX(marks) FROM student),name
FROM student






















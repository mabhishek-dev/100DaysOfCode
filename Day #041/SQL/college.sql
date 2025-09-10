CREATE DATABASE college;
USE college;

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
SELECT rollno FROM student;
SELECT DISTICT city FROM student;
-- where
SELECT * 
FROM student
WHERE marks>90;

SELECT * 
FROM student
WHERE city;

SELECT * 
FROM student
WHERE marks>90 AND city="Delhi";

SELECT * 
FROM student
WHERE marks>75 OR city="Delhi";

-- BETWEEN
SELECT * 
FROM student
WHERE marks BETWEEN 75 AND 90; -- 75 AND 90 BOTH INCLUSIVE

-- IN
SELECT * 
FROM student
WHERE city IN ("Delhi", "Mumbai");

-- Negate -> NOT IN ->Using NOT
-- IN
SELECT * 
FROM student
WHERE city NOT IN ("Delhi", "Mumbai");

SELECT * 
FROM student
WHERE city NOT IN ("Delhi", "Mumbai","Bangalore"); -- Bangalore does not exist in database but no error

-- LIMIT
SELECT *
FROM student
LIMIT 3; -- Only prints three students as we have put a limit 3

SELECT * 
FROM student
WHERE marks > 80
LIMIT 3;

-- ORDER BY
-- ASC
SELECT * FROM student 
ORDER BY marks ASC;
-- DESC
SELECT * FROM student
ORDER BY marks DESC
LIMIT 3;

-- Aggregate Functions
-- COUNT
SELECT COUNT(rollno)
FROM student;

-- MAX
SELECT MAX(marks)
FROM student;

-- MIN
SELECT MIN(marks)
FROM student;
 
-- SUM
SELECT SUM(marks)
FROM student;

-- AVG
SELECT AVG(marks)
FROM student;


-- GROUP BY
SELECT city, COUNT(name) -- Generally we use group by with some aggregation function
FROM student
GROUP BY city;


SELECT grade, COUNT(rollno) -- Grouping students based on grade in ASC
FROM student
GROUP BY grade
ORDER BY grade;


-- HAVING -- Similar to WHERE ->This is used to add conditions after grouping i,e "where" before group on the rows 
-- and "having" after grouping

SELECT city, count(name) -- Notice the result it counts-> the students in the city, the having condition only applies to the group
-- WHERE MAX(marks) >90 -- We can do this , where will "where" check ?, so we use "having"
FROM student
GROUP BY city
HAVING MAX(marks)>90;


-- General Order
/*
SELECT column(s)
FROM table_name
WHERE condition
GROUP BY column(s)
HAVING condition
ORDER BY column(s) ASC;
*/

-- SAFE MODE
SET SQL_SAFE_UPDATES = 0; -- OFF
SET SQL_SAFE_UPDATES = 1; -- ON


-- UPDATE

UPDATE student
SET grade = "O"
WHERE grade = "A";

UPDATE student
SET marks = marks+1; -- No "where" used

-- DELETE

DELETE FROM student 
WHERE name = "farah";

-- ALTER

SELECT * FROM student;

ALTER TABLE student
ADD COLUMN age INT;

ALTER TABLE student
DROP COLUMN age;

ALTER TABLE student
RENAME To new_student;
SELECT * FROM new_student;

ALTER TABLE new_student
RENAME To student;

ALTER TABLE student
CHANGE COLUMN age new_age INT;

ALTER TABLE student
CHANGE COLUMN new_age age INT;

ALTER TABLE student
MODIFY age VARCHAR(50);

ALTER TABLE student
DROP COLUMN age;

-- TRUNCATE ->This deletes the data itself where as the DROP deletes the table

TRUNCATE TABLE student;

SELECT * FROM student;






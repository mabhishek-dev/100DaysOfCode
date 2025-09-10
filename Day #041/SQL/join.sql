CREATE DATABASE join_demo;
use join_demo;
DROP TABLE dept;
DROP TABLE teacher;

CREATE TABLE student( 
	id INT PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO student (id,name)
VALUES
(101, "A"),
(102, "B"),
(103,"C");

CREATE TABLE course( 
	id INT PRIMARY KEY,
    course VARCHAR(50)
);

INSERT INTO course (id,course)
VALUES
(102, "english"),
(105, "math"),
(103,"science"),
(107,"computer science");

SELECT * FROM student;
SELECT * FROM course;


-- INNER JOIN
SELECT s.id ID, s.name Name, c.course SUB
FROM student s
INNER JOIN course c -- Entering just JOIN is same as writing as INNER JOIN but join alone is used for SELF JOIN
ON s.id = c.id;


-- LEFT JOIN
SELECT s.id ID, s.name Name, c.course SUB
FROM student s
LEFT JOIN course c
ON s.id = c.id;

-- RIGHT JOIN
SELECT s.id ID, s.name Name, c.course SUB
FROM student s
RIGHT JOIN course c
ON s.id = c.id;

-- FULL JOIN / FULL OUTER JOIN -- This does not exist in mysql but others do support it and ANSII has FULL JOIN
-- To get a full join we do left and right join and union.
SELECT s.id ID, s.name Name, c.course SUB
FROM student s
LEFT JOIN course c -- LEFT JOIN
ON s.id = c.id
UNION	-- COMBINE THEM and give but it does not give overlapping data , so s.id s.name and s.course will overlap but its printed once
SELECT s.id ID, s.name Name, c.course SUB
FROM student s
RIGHT JOIN course c -- RIGHT JOIN
ON s.id = c.id;


-- LEFT EXCLUSIVE JOIN
SELECT *
FROM student s
LEFT JOIN course c 
ON s.id = c.id
WHERE c.id IS NULL; -- ALL THE COMMONS ARE REMOVED AND ONLY THE UNIQUE LEFT REMAINS


-- RIGHT EXCLUSIVE JOIN
SELECT *
FROM student s
RIGHT JOIN course c 
ON s.id = c.id
WHERE s.id IS NULL; -- ALL THE COMMONS ARE REMOVED AND ONLY THE UNIQUE RIGHT REMAINS

-- FULL EXCLUSIVE JOIN -- UNIQUE LEFT AND RIGHT remain
SELECT *
FROM student s
LEFT JOIN course c 
ON s.id = c.id
WHERE c.id IS NULL
UNION
SELECT *
FROM student s
RIGHT JOIN course c 
ON s.id = c.id
WHERE s.id IS NULL; 

-- SELF JOIN
SELECT * 
FROM student s1
JOIN student s2
ON s1.id = s2.id; -- This is used when lets say we want to see people and there corresponding manager in a heirarchical way


-- UNION -- Combines and It remove duplicates and gives only unique
SELECT * FROM student
UNION
SELECT * FROM course;

-- UNION ALL -- Combines and It does not remove duplicates and gives everything
SELECT * FROM student
UNION ALL
SELECT * FROM course;






// alter
// Sorting
`SELECT column_name
FROM table_name
ORDER BY column_name ASC / DESC`;

//  Aliases
`SELECT column_name AS alias_name
FROM table_name`;

// DISTINCT filtering (ডুপ্লিকেট)
`SELECT DISTINCT column_name
FROM table_name
`;
//  WHERE Filtering
`SELECT column_list
FROM table_name
WHERE condition `;

//  Filtering with AND & OR
`SELECT *
FROM students
WHERE age >= 18 AND / OR marks >= 70`;
// Comparison, BETWEEN & IN
`-- 1.= সমান 2.!= বা <> সমান না 3.| বড় 4.< | ছোট 5.= | বড় বা সমান 6.<= | ছোট বা সমান 
SELECT *
FROM students
WHERE city != 'Dhaka'
`;
`WHERE column BETWEEN value1 AND value2
`;
// LIKE vs ILIKE
`
SELECT *
FROM users
WHERE name LIKE 'A%'
`;

// NOT Operator
`SELECT *
FROM students
WHERE NOT age = 18`;
//  Scalar Functions
`SELECT UPPER(name)
FROM users
`; // 1.UPPER() 2.LOWER() 3.LENGTH() 4.CONCAT() 5.SUBSTRING() 6.TRIM()

// Aggregate Functions
`
SELECT COUNT(*)
FROM students
`; //1.SUM() 2.AVG() 3.MIN() 4.MAX() 5.
//
//
// ========================
`
SELECT 
u.name AS user_name,
COUNT(o.id) AS total_orders,
SUM(o.amount) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.name
ORDER BY total_spent DESC;

`;

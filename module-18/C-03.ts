/*
============================================================
SELECT Basics: Sorting & Aliases 
------------------------------------------------------------
এই অংশে আমরা দেখব কিভাবে SELECT দিয়ে data sort করা যায় এবং
column/table aliases ব্যবহার করে output readable করা যায়।
============================================================
*/

/*
------------------------------------------------------------
1) ORDER BY – Sorting (Ascending / Descending)
------------------------------------------------------------
Syntax:
*/
`SELECT column1, column2
FROM table_name
ORDER BY column1 ASC / DESC`;

// উদাহরণ:
`SELECT name, age FROM users ORDER BY age ASC`;

// ব্যাখ্যা:
// - ASC → ascending (ছোট থেকে বড়)
// - DESC → descending (বড় থেকে ছোট)
// - Default ASC যদি ASC/DESC না দেয়া হয়
// - Multiple column sorting possible:
// SELECT name, age FROM users ORDER BY age DESC, name ASC;
// */

/*
উদাহরণ Table: users
| id | name     | age |
|----|---------|-----|
| 1  | Anwarul | 25  |
| 2  | Karim   | 30  |
| 3  | Abdullah| 22  |
| 4  | Sumit   | 30  |
| 5  | Rafiq   | 28  |

Query Result:
| name    | age |
|---------|-----|
| Karim   | 30  |
| Sumit   | 30  |
| Rafiq   | 28  |
| Anwarul | 25  |
| Abdullah| 22  |
*/

/*
------------------------------------------------------------
2) Aliases – Column / Table নাম short/rename করা
------------------------------------------------------------
Column Alias:
*/
`SELECT column_name AS alias_name FROM table_name`;
// Example:
`SELECT name AS username, age AS user_age FROM users`;

// ব্যাখ্যা:
// - Output column name পরিবর্তন হবে
// - Database structure change হবে না
// - শুধু query output friendly করা হবে

// Table Alias:
` SELECT t1.column1, t2.column2
FROM table_name1 AS t1
JOIN table_name2 AS t2
ON t1.id = t2.user_id;
`;

// ব্যাখ্যা:
// - Table short name দিয়ে query সহজ হয়
// - Multiple JOIN এ readability বৃদ্ধি পায়
// */

/*
------------------------------------------------------------
3) SELECT JOIN + Aliases + Sorting Example
------------------------------------------------------------
Query:
*/
`SELECT u.name AS username, o.amount AS order_amount
FROM users AS u
INNER JOIN orders AS o
ON u.id = o.user_id
ORDER BY o.amount DESC`;
/*
Step-by-Step:
1) SELECT u.name AS username, o.amount AS order_amount
   - Column rename হয়েছে শুধু output friendly করতে
2) FROM users AS u → Table alias 'u' ব্যবহার করা হলো
3) INNER JOIN orders AS o → Table alias 'o' + match row selection
4) ON u.id = o.user_id → Join condition
5) ORDER BY o.amount DESC → Output largest amount উপরে

Example Data:
users table:
| id | name    |
|----|---------|
| 1  | Anwarul |
| 2  | Karim   |

orders table:
| id | user_id | amount |
|----|---------|--------|
| 1  | 1       | 500    |
| 2  | 2       | 1000   |
| 3  | 1       | 700    |

Query Result:
| username | order_amount |
|----------|--------------|
| Karim    | 1000         |
| Anwarul  | 700          |
| Anwarul  | 500          |
*/

/*
------------------------------------------------------------
4) Combination Example: Sorting + Aliases + Multiple Columns
------------------------------------------------------------
*/
`SELECT u.name AS username, o.amount AS order_amount
FROM users AS u
INNER JOIN orders AS o
ON u.id = o.user_id
ORDER BY o.amount DESC, u.name ASC`;
/*
Explanation:
- একই query তে multiple column sorting করা হলো
- প্রথমে amount DESC, তারপর name ASC   
- Multiple column sorting + column aliases একসাথে ব্যবহার করা হলো
- Output readable এবং organized
*/

/*
------------------------------------------------------------
5) Summary / Quick Notes
------------------------------------------------------------
1. ORDER BY → ASC (default), DESC
2. Multiple column sorting সম্ভব
3. Column Alias → AS alias_name
4. Table Alias → AS short_name
5. Sorting + Alias একসাথে ব্যবহার করা যায়
6. Query output friendly এবং readable হয়
============================================================
*/

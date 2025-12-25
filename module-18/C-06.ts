/*
============================================================
PostgreSQL SELECT – Comparison, BETWEEN & IN (Bangla)
------------------------------------------------------------
এই অংশে আমরা দেখব কিভাবে SELECT query তে
1) Comparison operators
2) BETWEEN
3) IN
ব্যবহার করা হয়।
============================================================
*/

/*
------------------------------------------------------------
1) Comparison Operators – তুলনা করা
------------------------------------------------------------
Common operators:
=   → সমান
!=  → সমান নয়
<>  → সমান নয় (PostgreSQL alternative)
>   → বড়
<   → ছোট
>=  → বড় বা সমান
<=  → ছোট বা সমান

উদাহরণ Table: users
| id | name    | age | city      |
|----|---------|-----|-----------|
| 1  | Anwarul | 25  | Dhaka     |
| 2  | Karim   | 30  | Chittagong|
| 3  | Abdullah| 22  | Dhaka     |
| 4  | Sumit   | 30  | Dhaka     |
| 5  | Rafiq   | 28  | Khulna    |

Query Examples:

1) Age > 25
*/
`SELECT name, age FROM users WHERE age > 25`;

// Result:
// | name  | age |
// |-------|-----|
// | Karim | 30  |
// | Sumit | 30  |
// | Rafiq | 28  |

// 2) Age != 30

`SELECT name, age FROM users WHERE age != 30;`;
/*
Result:
| name    | age |
|---------|-----|
| Anwarul | 25  |
| Abdullah| 22  |
| Rafiq   | 28  |
*/

/*
------------------------------------------------------------
2) BETWEEN – Value Range Filter
------------------------------------------------------------
Syntax:
*/
`SELECT column1, column2
FROM table_name
WHERE column_name BETWEEN value1 AND value2`;
/*
ব্যাখ্যা:
- value1 থেকে value2 এর মধ্যে থাকা row select হয়
- Inclusive, মানে value1 এবং value2 ও include হয়

Example:
*/
`SELECT name, age FROM users WHERE age BETWEEN 25 AND 30`;
/*
Result:
| name    | age |
|---------|-----|
| Anwarul | 25  |
| Karim   | 30  |
| Sumit   | 30  |
| Rafiq   | 28  |
*/

/*
------------------------------------------------------------
3) IN – Multiple value এর মধ্যে থাকা row select করা
------------------------------------------------------------
Syntax:
*/
`SELECT column1, column2
FROM table_name
WHERE column_name IN (value1, value2, ...)`;
/*
ব্যাখ্যা:
- Column এর value যদি provided list এর মধ্যে থাকে, row select হবে
- অনেক value একসাথে check করতে সুবিধা

Example:
*/
`SELECT name, city FROM users WHERE city IN ('Dhaka', 'Khulna')`;
/*
Result:
| name    | city  |
|---------|-------|
| Anwarul | Dhaka |
| Abdullah| Dhaka |
| Sumit   | Dhaka |
| Rafiq   | Khulna|
*/

/*
------------------------------------------------------------
4) NOT IN – List এর বাইরে থাকা row select করা
------------------------------------------------------------
Syntax:
*/
`SELECT column1
FROM table_name
WHERE column_name NOT IN (value1, value2, ...)`;

// Example:
`SELECT name, city FROM users WHERE city NOT IN ('Dhaka', 'Khulna')`;

// Result:
// | name  | city      |
// |-------|-----------|
// | Karim | Chittagong|
// */

/*
------------------------------------------------------------
5) Comparison + AND/OR Combination
------------------------------------------------------------
Example:
*/
`SELECT name, age, city
FROM users
WHERE age BETWEEN 25 AND 30 AND city IN ('Dhaka', 'Khulna')`;
/*
Result:
| name    | age | city  |
|---------|-----|-------|
| Anwarul | 25  | Dhaka |
| Sumit   | 30  | Dhaka |
| Rafiq   | 28  | Khulna|
*/

/*
------------------------------------------------------------
Quick Notes / Tips
------------------------------------------------------------
- =, !=, <>, >, <, >=, <= → value comparison
- BETWEEN → value range (inclusive)
- IN → multiple values check
- NOT IN → exclude list values
- AND / OR এর সাথে combination possible
============================================================
*/

/*
============================================================
PostgreSQL SELECT – Filtering with AND & OR (Bangla)
------------------------------------------------------------
এই অংশে আমরা দেখব কিভাবে SELECT query তে
AND ও OR logical operators ব্যবহার করে multiple condition filter করা যায়।
============================================================
*/

/*
------------------------------------------------------------
1) AND – সব condition সত্য হতে হবে
------------------------------------------------------------
Syntax:
*/
`SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2`;
/*
ব্যাখ্যা:
- শুধু সেই row select হবে যেখানে সব condition true
- একাধিক condition যোগ করতে হলে AND ব্যবহার করা হয়

উদাহরণ Table: users
| id | name    | age | city      |
|----|---------|-----|-----------|
| 1  | Anwarul | 25  | Dhaka     |
| 2  | Karim   | 30  | Chittagong|
| 3  | Abdullah| 22  | Dhaka     |
| 4  | Sumit   | 30  | Dhaka     |
| 5  | Rafiq   | 28  | Khulna    |

Query:
*/
`SELECT name, age, city
FROM users
WHERE age >= 25 AND city = 'Dhaka'`;
/*
Result:
| name    | age | city  |
|---------|-----|-------|
| Anwarul | 25  | Dhaka |
| Sumit   | 30  | Dhaka |
*/

/*
------------------------------------------------------------
2) OR – যেকোনো condition সত্য হলে row select হবে
------------------------------------------------------------
Syntax:
*/
`SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2`;
/*
ব্যাখ্যা:
- একটির condition true হলে row select হবে
- OR use করে multiple possibilities cover করা যায়

Query:
*/
`SELECT name, age, city
FROM users
WHERE age < 25 OR city = 'Khulna'`;
/*
Result:
| name    | age | city  |
|---------|-----|-------|
| Abdullah| 22  | Dhaka |
| Rafiq   | 28  | Khulna|
*/

/*
------------------------------------------------------------
3) AND + OR Combination
------------------------------------------------------------
Syntax:
*/
`SELECT column1, column2
FROM table_name
WHERE (condition1 AND condition2) OR condition3`;
/*
ব্যাখ্যা:
- Parentheses দিয়ে precedence ঠিক করা যায়
- প্রথমে AND evaluate হবে, তারপর OR

Query:
*/
`SELECT name, age, city
FROM users
WHERE (age = 30 AND city = 'Dhaka') OR( age = 28 AND city = 'khulna')`;
/*
Result:
| name  | age | city  |
|-------|-----|-------|
| Sumit | 30  | Dhaka |
| Rafiq | 28  | Khulna|
*/

/*
------------------------------------------------------------
4) NOT – Condition invert করা
------------------------------------------------------------
Syntax:
*/
`SELECT column1, column2
FROM table_name
WHERE NOT condition`;

// Example:
`SELECT name, age, city
FROM users
WHERE NOT city = 'Dhaka'`;
/*
Result:
| name  | age | city      |
|-------|-----|-----------|
| Karim | 30  | Chittagong|
| Rafiq | 28  | Khulna    |
*/

/*
------------------------------------------------------------
Quick Notes / Tips
------------------------------------------------------------
- AND → সব condition true হতে হবে
- OR  → যেকোনো একটি condition true হলে row select হবে
- Parentheses use করে complex condition সহজ করা যায়
- NOT → condition invert করা হয়
- Multiple logical operator একসাথে ব্যবহার করা সম্ভব
============================================================
*/

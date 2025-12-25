/**
============================================================
PostgreSQL – Aggregate Functions (Bangla Explanation)
============================================================
*/

/*
============================================================
SECTION 1: Aggregate Functions কী
------------------------------------------------------------

Aggregate Functions হলো SQL Function যা একাধিক row এর উপর কাজ করে
এবং একটি একক মান (single value) return করে।
এগুলো সাধারণত report, summary বা data analysis এর জন্য ব্যবহৃত হয়।

মূল বৈশিষ্ট্য:
- একাধিক row input হিসেবে নেয়
- single output produce করে
- সাধারণত SELECT statement ও GROUP BY clause এর সাথে ব্যবহার হয়
*/

/*
------------------------------------------------------------
SECTION 2: প্রধান Aggregate Functions
------------------------------------------------------------

1) COUNT():
----------------
- row এর সংখ্যা return করে
- সব row বা নির্দিষ্ট condition অনুযায়ী count করা যায়

উদাহরণ:
*/
`SELECT COUNT(*) FROM users`;

`SELECT COUNT(*) FROM users WHERE is_active = true`;

// 2) SUM():
// ----------------
// - numeric column এর মোট যোগফল return করে

// উদাহরণ:
`SELECT SUM(balance) FROM accounts`;
`SELECT SUM(quantity) FROM orders WHERE status = 'completed'`;

// 3) AVG():
// ----------------
// - numeric column এর গড় (average) return করে

// উদাহরণ:
`SELECT AVG(price) FROM products`;
`SELECT AVG(age) FROM users WHERE is_active = true`;

// 4) MAX():
// ----------------
// - column এর সর্বোচ্চ মান return করে

// উদাহরণ:
`SELECT MAX(salary) FROM employees`;
`SELECT MAX(created_at) FROM orders`;

// 5) MIN():
// ----------------
// - column এর সর্বনিম্ন মান return করে

// উদাহরণ:
`SELECT MIN(price) FROM products`;
`SELECT MIN(age) FROM users`;

/*
------------------------------------------------------------
SECTION 3: GROUP BY এর সাথে ব্যবহার
------------------------------------------------------------

Aggregate Functions প্রায়ই GROUP BY এর সাথে ব্যবহার করা হয়, যাতে group-wise summary পাওয়া যায়।

উদাহরণ:
*/
`SELECT department, COUNT(*) FROM employees GROUP BY department`;
`SELECT department, AVG(salary) FROM employees GROUP BY department`;

/*
------------------------------------------------------------
SECTION 4: HAVING Clause এর সাথে ব্যবহার
------------------------------------------------------------

HAVING clause ব্যবহার করে আমরা group-wise result filter করতে পারি।
WHERE clause group-wise filter করতে পারে না, তাই HAVING ব্যবহৃত হয়।

উদাহরণ:
*/
`SELECT department, AVG(salary) FROM employees
GROUP BY department
HAVING AVG(salary) > 50000`;

/*
------------------------------------------------------------
SECTION 5: Additional Notes
------------------------------------------------------------
- COUNT(*) সব row গননা করে
- COUNT(column_name) শুধুমাত্র non-NULL value গননা করে
- SUM, AVG, MAX, MIN শুধুমাত্র numeric column এর উপর কার্যকর
- Aggregate Functions report, summary, analytics এবং decision making এ অপরিহার্য
============================================================
*/

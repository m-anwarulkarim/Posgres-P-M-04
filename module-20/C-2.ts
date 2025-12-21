/*
===========================================================
🟦 PostgreSQL — Subquery
===========================================================

Subquery মানে হলো—
👉 একটি Query এর ভেতরে আরেকটি Query।

একে বলা হয়:
✔ Inner Query  
✔ Nested Query  
✔ Child Query  
✔ Outer Query যে Query ব্যবহার করে

Subquery কেন ব্যবহার হয়?
--------------------------------
- জটিল ডেটা Filter করতে
- অন্য টেবিলের ডেটা থেকে dynamic মান আনতে
- aggregate + condition একসাথে handle করতে
- SELECT / WHERE / FROM — যেকোনো জায়গায় ব্যবহার করা যায়

Basic Syntax:
--------------------------------
SELECT column
FROM table
WHERE column = (SELECT column FROM other_table);

===========================================================
🟩 1) Subquery in WHERE Clause
===========================================================
*/

`SELECT *
FROM orders
WHERE customer_id IN (
  SELECT id
  FROM customers
  WHERE age > 30
);`;

/*
ব্যাখ্যা:
- ভিতরের query customers টেবিল থেকে বয়স >৩০ এর সব ID আনছে
- outer query orders টেবিল থেকে সেই customer_id match করছে
*/

/*
===========================================================
🟦 2) Subquery in SELECT Clause
===========================================================
*/

`SELECT 
  p.id,
  p.name,
  (SELECT COUNT(*) 
   FROM orders 
   WHERE product_id = p.id) AS total_orders
FROM products AS p;`;

/*
ব্যাখ্যা:
- প্রতিটি product এর জন্য কতগুলো order হয়েছে সেটা subquery count করছে
- SELECT এর ভেতরে calculation
*/

/*
===========================================================
🟧 3) Subquery in FROM Clause (Derived Table / Inline View)
===========================================================
*/

`SELECT t.category, t.total_sold
FROM (
  SELECT category, SUM(sales) AS total_sold
  FROM products
  GROUP BY category
) AS t
WHERE t.total_sold > 500;`;

/*
ব্যাখ্যা:
- FROM এর ভেতরে আলাদা virtual table বানানো হয়েছে (t)
- তারপর outer query সেটাকে filter করছে
*/

/*
===========================================================
🟦 4) Single-row Subquery
(=, <, >, <= এর সাথে ব্যবহার হয়)
===========================================================
*/

`SELECT *
FROM products
WHERE price > (SELECT AVG(price) FROM products);`;

/*
এক লাইনের result — AVG(price)
বহু row return করে না
*/

/*
===========================================================
🟩 5) Multi-row Subquery
(IN, ANY, ALL এর সাথে ব্যবহার হয়)
===========================================================
*/

`SELECT *
FROM products
WHERE id IN (SELECT product_id FROM orders);`;

/*
এখানে ভিতরের query একাধিক product_id return করে
*/

/*
===========================================================
🟧 6) Correlated Subquery (Advanced)
===========================================================
*/

`SELECT name
FROM products AS p
WHERE price > (
   SELECT AVG(price)
   FROM products
   WHERE category = p.category
);`;

/*
ব্যাখ্যা:
- inner query outer query এর প্রতিটি row এর সাথে চলে
- category অনুযায়ী average price বের করে, তারপর compare করে
*/

/*
===========================================================
🟥 Subquery কখন ব্যবহার না করাই ভালো?
===========================================================
- যখন JOIN দিয়ে simple solution হয়
- বড় টেবিলে nested subquery performance slow করে
- CTE (WITH) অনেক readable এবং optimize friendly

===========================================================
✔ END — PostgreSQL Subquery Full Explanation
===========================================================
*/
/*
====================================================================
🟦 PostgreSQL Subquery — ৩টি Important Example 
====================================================================

1) কোন employee সবচেয়ে বেশি salary পায়  
2) কোন employee average salary-এর চেয়ে বেশি আয় করে  
3) HR department-এ কে সবচেয়ে বেশি salary পায়  

সবগুলো Subquery-এর সবচেয়ে common interview প্রশ্নও।
*/

/*
===========================================================
1) Which employee gets the highest salary?
===========================================================
Explanation:
- inner query: পুরো employees টেবিল থেকে সর্বোচ্চ salary বের করে
- outer query: সেই salary যাদের, তাদের নাম + salary দেখায়
*/

`SELECT name, salary
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);`;

/*
===========================================================
2) Find employees who earn more than the average salary
===========================================================
Explanation:
- inner query → average salary (AVG)
- outer query → যাদের salary > average, তাদের দেখায়
*/

`SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);`;

/*
===========================================================
3) Highest salary employee in HR Department
===========================================================
Explanation:
- inner query → শুধুমাত্র HR department-এর highest salary বের করে
- outer query → সেই highest salary-ওয়ালা কর্মচারীর নাম দেখায়
*/

`SELECT name, salary
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
    WHERE department = 'HR'
)
AND department = 'HR';`;

/*
====================================================================
✔ END — PostgreSQL Subquery (3 Important Examples)
====================================================================
*/

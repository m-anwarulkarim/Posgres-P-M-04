/**
 * ========================================================
 *   SQL IMPORTANT COMMANDS — Bangla ব্যাখ্যা + উদাহরণ
 *   File: sql-commands.ts (Comment Documentation)
 * ========================================================
 */

/**
 * 1) SELECT — টেবিল থেকে ডেটা পড়ার কমান্ড
 * --------------------------------------------------------
 * Example:
 * SELECT name, age FROM users;
 */

/**
 * 2) SELECT * — সব কলাম দেখায়
 * --------------------------------------------------------
 * Example:
 * SELECT * FROM users;
 */

/**
 * 3) DISTINCT — ডুপ্লিকেট বাদ দিয়ে unique মান দেখায়
 * --------------------------------------------------------
 * Example:
 * SELECT DISTINCT country FROM customers;
 */

/**
 * 4) WHERE — শর্ত দিয়ে ডেটা ফিল্টার করা
 * --------------------------------------------------------
 * Example:
 * SELECT * FROM users WHERE age >= 18;
 */

/**
 * 5) ORDER BY — ডেটা sort করা (ASC/DESC)
 * --------------------------------------------------------
 * Example:
 * SELECT * FROM users ORDER BY age DESC;
 */

/**
 * 6) LIMIT — কতগুলো row দেখাবে
 * --------------------------------------------------------
 * Example:
 * SELECT * FROM users LIMIT 5;
 */

/**
 * 7) OFFSET — শুরুর N টি row skip করা
 * --------------------------------------------------------
 * Example:
 * SELECT * FROM users LIMIT 5 OFFSET 10;
 */

/**
 * 8) LIKE — Pattern search
 * --------------------------------------------------------
 * Example:
 * SELECT * FROM users WHERE name LIKE '%an%';
 */

/**
 * 9) IN — multiple value match
 * --------------------------------------------------------
 * Example:
 * SELECT * FROM users WHERE country IN ('BD', 'IN', 'PK');
 */

/**
 * 10) BETWEEN — range match করা
 * --------------------------------------------------------
 * Example:
 * SELECT * FROM products WHERE price BETWEEN 100 AND 500;
 */

/**
 * 11) IS NULL / IS NOT NULL
 * --------------------------------------------------------
 * Example:
 * SELECT * FROM users WHERE email IS NULL;
 */

/**
 * 12) INSERT — নতুন রো যোগ করা
 * --------------------------------------------------------
 * Example:
 * INSERT INTO users(name, age) VALUES ('Rahim', 22);
 */

/**
 * 13) INSERT Multiple Rows
 * --------------------------------------------------------
 * INSERT INTO users(name, age)
 * VALUES ('Rahim', 22), ('Karim', 25), ('Siam', 19);
 */

/**
 * 14) UPDATE — ডেটা পরিবর্তন
 * --------------------------------------------------------
 * Example:
 * UPDATE users SET age = 30 WHERE id = 1;
 */

/**
 * 15) DELETE — row ডিলিট করা
 * --------------------------------------------------------
 * Example:
 * DELETE FROM users WHERE id = 5;
 */

/**
 * 16) CREATE TABLE — নতুন টেবিল তৈরি
 * --------------------------------------------------------
 * Example:
 * CREATE TABLE users (
 *   id SERIAL PRIMARY KEY,
 *   name VARCHAR(50) NOT NULL,
 *   age INT,
 *   email TEXT UNIQUE
 * );
 */

/**
 * 17) ALTER TABLE — টেবিল modify করা
 * --------------------------------------------------------
 * কলাম যোগ:
 * ALTER TABLE users ADD COLUMN phone TEXT;
 *
 * কলাম ডিলিট:
 * ALTER TABLE users DROP COLUMN phone;
 */

/**
 * 18) DROP TABLE — টেবিল ডিলিট
 * --------------------------------------------------------
 * DROP TABLE users;
 */

/**
 * 19) TRUNCATE TABLE — ডেটা ফাঁকা করা
 * --------------------------------------------------------
 * TRUNCATE TABLE users;
 */

/**
 * 20) CREATE DATABASE
 * --------------------------------------------------------
 * CREATE DATABASE school;
 */

/**
 * 21) DROP DATABASE
 * --------------------------------------------------------
 * DROP DATABASE school;
 */

/**
 * 22) CREATE INDEX — ফাস্ট সার্চের জন্য
 * --------------------------------------------------------
 * CREATE INDEX idx_users_name ON users(name);
 */

/**
 * 23) DROP INDEX
 * --------------------------------------------------------
 * DROP INDEX idx_users_name;
 */

/**
 * 24) CREATE VIEW — virtual table
 * --------------------------------------------------------
 * CREATE VIEW adult_users AS
 * SELECT * FROM users WHERE age >= 18;
 */

/**
 * 25) DROP VIEW
 * --------------------------------------------------------
 * DROP VIEW adult_users;
 */

/**
 * 26) JOINS — দুই টেবিল join করা
 * --------------------------------------------------------
 * INNER JOIN:
 * SELECT u.name, o.amount FROM users u
 * INNER JOIN orders o ON u.id = o.user_id;
 *
 * LEFT JOIN:
 * SELECT u.name, o.amount FROM users u
 * LEFT JOIN orders o ON u.id = o.user_id;
 *
 * RIGHT JOIN:
 * SELECT ... RIGHT JOIN ...;
 *
 * FULL JOIN:
 * SELECT ... FULL JOIN ...;
 */

/**
 * 27) GROUP BY — গ্রুপ ভিত্তিক aggregation
 * --------------------------------------------------------
 * Example:
 * SELECT country, COUNT(*)
 * FROM users
 * GROUP BY country;
 */

/**
 * 28) HAVING — group এর ওপর শর্ত
 * --------------------------------------------------------
 * Example:
 * SELECT country, COUNT(*)
 * FROM users
 * GROUP BY country
 * HAVING COUNT(*) > 5;
 */

/**
 * 29) Aggregate Functions
 * --------------------------------------------------------
 * COUNT(): SELECT COUNT(*) FROM users;
 * SUM():   SELECT SUM(price) FROM products;
 * AVG():   SELECT AVG(age) FROM users;
 * MIN():   SELECT MIN(age) FROM users;
 * MAX():   SELECT MAX(age) FROM users;
 */

/**
 * 30) TRANSACTIONS — BEGIN, COMMIT, ROLLBACK
 * --------------------------------------------------------
 * BEGIN;
 * UPDATE users SET age = 40 WHERE id = 1;
 * COMMIT;
 *
 * // Error হলে:
 * ROLLBACK;
 */

/**
 * 31) GRANT / REVOKE — permission control
 * --------------------------------------------------------
 * GRANT SELECT ON users TO anwar;
 * REVOKE SELECT ON users FROM anwar;
 */

/**
 * 32) EXPLAIN — Query কীভাবে execute হবে
 * --------------------------------------------------------
 * EXPLAIN SELECT * FROM users WHERE age > 20;
 */

/**
 * 33) DESCRIBE / \d — টেবিল structure দেখা
 * --------------------------------------------------------
 * MySQL: DESCRIBE users;
 * Postgres: \d users
 */

/**
 * 34) AS — Alias ব্যবহার
 * --------------------------------------------------------
 * SELECT name AS customer_name FROM users;
 * SELECT u.name, o.amount FROM users AS u JOIN orders AS o ON u.id = o.user_id;
 */

/**
 * 35) CASE — SQL IF/ELSE
 * --------------------------------------------------------
 * SELECT name, age,
 *   CASE WHEN age >= 18 THEN 'Adult' ELSE 'Minor' END AS category
 * FROM users;
 */

/**
 * 36) COALESCE — NULL হলে default মান
 * --------------------------------------------------------
 * SELECT COALESCE(email, 'No Email') FROM users;
 */

/**
 * 37) NULLIF — মান একই হলে NULL
 * --------------------------------------------------------
 * SELECT NULLIF(10, 10); // NULL
 */

/**
 * 38) EXISTS — data exists কিনা চেক করা
 * --------------------------------------------------------
 * SELECT * FROM users u WHERE EXISTS (
 *   SELECT 1 FROM orders o WHERE o.user_id = u.id
 * );
 */

/**
 * 39) UNION / UNION ALL — result merge
 * --------------------------------------------------------
 * SELECT name FROM students
 * UNION
 * SELECT name FROM teachers;
 *
 * SELECT name FROM students
 * UNION ALL
 * SELECT name FROM teachers;
 */

/**
 * 40) SUBQUERY — query এর ভেতর query
 * --------------------------------------------------------
 * SELECT name FROM users
 * WHERE age > (SELECT AVG(age) FROM users);
 */

/**
 * 41) UPDATE / DELETE with RETURNING (Postgres)
 * --------------------------------------------------------
 * UPDATE users SET age = 30 WHERE id = 1 RETURNING *;
 * DELETE FROM users WHERE id = 5 RETURNING *;
 */

/**
 * 42) Date/Time Functions
 * --------------------------------------------------------
 * SELECT NOW();
 * SELECT CURRENT_DATE;
 * SELECT EXTRACT(year FROM NOW());
 */

/**
 * 43) String Functions — LOWER, UPPER, TRIM, LENGTH
 * --------------------------------------------------------
 * SELECT LOWER(name) FROM users;
 * SELECT TRIM('   Hello   ');
 * SELECT LENGTH(name) FROM users;
 */

/**
 * 44) Math Functions — ROUND, CEIL, FLOOR
 * --------------------------------------------------------
 * SELECT ROUND(3.1416, 2);
 * SELECT CEIL(3.2);
 * SELECT FLOOR(3.8);
 */

/**
 * 45) WITH (CTE) — Common Table Expression
 * --------------------------------------------------------
 * WITH adult AS (
 *   SELECT * FROM users WHERE age >= 18
 * )
 * SELECT name FROM adult;
 */

// END OF FILE

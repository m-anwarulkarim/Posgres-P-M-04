/**
 * =====================================================================
 * PostgreSQL Core Concepts – Detailed Notes (Bangla Comments)
 * =====================================================================
 * এই ফাইলে বিস্তারিতভাবে ব্যাখ্যা করা হয়েছে:
 *
 * 1️⃣ Multiple Constraints
 * 2️⃣ PRIMARY KEY (নিজেই Multiple Constraints)
 * 3️⃣ INSERT (Single Row)
 * 4️⃣ Multiple Rows INSERT
 * 5️⃣ INSERT Without Column List
 * 6️⃣ INSERT With Column List but Without id (Best Practice)
 *
 * 👉 শেখার জন্য, নোট রাখার জন্য ও GitHub repo-তে ব্যবহারের জন্য উপযোগী
 */

/* ============================================================
   1️⃣ Multiple Constraints
   ------------------------------------------------------------
   Multiple Constraints মানে হলো:
   👉 একই column-এর উপর একের বেশি rule (constraint) বসানো
   👉 Data যেন clean, valid ও safe থাকে
*/

/*
Syntax:
column_name data_type CONSTRAINT1 CONSTRAINT2 CONSTRAINT3
*/

const multipleConstraintsExample = `
CREATE TABLE student (
    id SERIAL PRIMARY KEY,                 -- PRIMARY KEY = NOT NULL + UNIQUE
    name VARCHAR(50) NOT NULL,             -- NOT NULL → খালি রাখা যাবে না
    email VARCHAR(100) NOT NULL UNIQUE,    -- NOT NULL + UNIQUE
    age INT NOT NULL CHECK (age >= 5),     -- NOT NULL + CHECK
    isActive BOOLEAN NOT NULL DEFAULT true -- NOT NULL + DEFAULT
);
`;

/*
ব্যাখ্যা:
- name → খালি রাখা যাবে না
- email → খালি না + duplicate না
- age → খালি না + 5 এর কম না
- isActive → খালি না + default true
*/

/* ============================================================
   2️⃣ PRIMARY KEY (নিজেই Multiple Constraints)
   ------------------------------------------------------------
   PRIMARY KEY আসলে একা না!
   এটা internally দুইটা constraint একসাথে:
   ✔ NOT NULL
   ✔ UNIQUE
*/

const primaryKeyExample = `
id SERIAL PRIMARY KEY
`;

/*
এখানে আলাদা করে NOT NULL বা UNIQUE লেখার দরকার নেই
কারণ PRIMARY KEY নিজেই এগুলো নিশ্চিত করে
*/

/* ============================================================
   3️⃣ INSERT (Single Row)
   ------------------------------------------------------------
   INSERT ব্যবহার করা হয় table-এর ভেতরে নতুন data ঢোকানোর জন্য
*/

const singleInsert = `
INSERT INTO student (name, age, isActive)
VALUES ('Anwar', 20, true);
`;

/*
ব্যাখ্যা:
- student → table নাম
- (name, age, isActive) → কোন column-এ data যাবে
- VALUES → ওই column অনুযায়ী value

⚠️ Column order আর value order same হতে হবে
*/

/* ============================================================
   4️⃣ Multiple Rows INSERT
   ------------------------------------------------------------
   একবারে একাধিক row insert করা
   ✔ faster
   ✔ clean
   ✔ real project-এ বেশি ব্যবহার হয়
*/

const multipleInsert = `
INSERT INTO student (name, age)
VALUES
('Anwar', 20),
('Rahim', 21),
('Karim', 22);
`;

/*
এখানে:
- এক query-তেই ৩টা row insert হয়েছে
- id auto-generate হবে
- isActive default true বসবে
*/

/* ============================================================
   5️⃣ INSERT Without Column List
   ------------------------------------------------------------
   column নাম না লিখে সরাসরি VALUES ব্যবহার
*/

const withoutColumnList = `
INSERT INTO student
VALUES (DEFAULT, 'Anwar', 20, true);
`;

/*
খুব গুরুত্বপূর্ণ:
- VALUES-এর order অবশ্যই table-এর column order-এর মতো হতে হবে

Table order:
(id, name, age, isActive)
*/

/*
❌ সমস্যা:
- column add হলে query ভেঙে যাবে
- order mismatch হলে ভুল data যাবে

👉 তাই real project-এ avoid করা হয়
*/

/* ============================================================
   6️⃣ INSERT With Column List but Without id (BEST PRACTICE)
   ------------------------------------------------------------
   👉 Column list লেখা হবে
   👉 কিন্তু auto-generated id বাদ দেওয়া হবে
*/

const bestPracticeInsert = `
INSERT INTO student (name, age)
VALUES ('Anwar', 20);
`;

/*
কেন এটা best practice?
- id auto-generated (SERIAL / UUID)
- sequence mismatch হয় না
- future-proof
- interview-এ recommended answer
*/

/* ============================================================
   7️⃣ Multiple Rows (Best Practice Style)
   ------------------------------------------------------------
*/

const bestPracticeMultipleInsert = `
INSERT INTO student (name, age)
VALUES
('Anwar', 20),
('Rahim', 21),
('Karim', 22);
`;

/*
সব row-এর id database নিজে generate করবে
*/

/* ============================================================
   ❌ Common Mistake (Avoid This)
   ------------------------------------------------------------
*/

const wrongInsert = `
INSERT INTO student (id, name, age)
VALUES (1, 'Anwar', 20);
`;

/*
Problem:
- manually id দেওয়া
- sequence ভেঙে যেতে পারে
- future insert এ error
*/

/* ============================================================
   ✅ FINAL SUMMARY
   ------------------------------------------------------------
   ✔ Multiple Constraints → এক column, অনেক rule
   ✔ PRIMARY KEY → NOT NULL + UNIQUE
   ✔ INSERT → single row
   ✔ Multiple INSERT → একসাথে অনেক row
   ✔ Without Column List → risky
   ✔ Best Practice → Column list ব্যবহার + id বাদ
============================================================ */

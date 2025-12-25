/**
 * ============================================================
 * PostgreSQL Column Constraints
 * ============================================================
 * এই ফাইলে PostgreSQL-এর Column Constraints গুলো উদাহরণসহ
 * comment হিসেবে ব্যাখ্যা করা হয়েছে।
 */

/* ============================================================
   1️⃣ Basic Constraints Example
   ------------------------------------------------------------
   Table: student
*/
const studentTable = `
CREATE TABLE student (
    id SERIAL PRIMARY KEY,           -- PRIMARY KEY: unique & NOT NULL, table-এর main ID
    name VARCHAR(50) NOT NULL,       -- NOT NULL: খালি রাখা যাবে না
    email VARCHAR(100) UNIQUE,       -- UNIQUE: duplicate email যাবে না
    age INT CHECK (age >= 5),        -- CHECK: বয়স অবশ্যই 5 বা তার বেশি
    dob DATE DEFAULT CURRENT_DATE    -- DEFAULT: যদি DOB না দেয়া হয়, আজকের date auto set হবে
);
`;

/* ============================================================
   2️⃣ Foreign Key Constraint Example
   ------------------------------------------------------------
   Table: class & student relationship
*/
const foreignKeyExample = `
CREATE TABLE class (
    class_id SERIAL PRIMARY KEY,
    class_name VARCHAR(50) NOT NULL
);

CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    class_id INT REFERENCES class(class_id)  -- FOREIGN KEY: student table-এর class_id, class table-এর class_id কে reference করে
);
`;

/* ============================================================
   3️⃣ CHECK Constraint Example
   ------------------------------------------------------------
   Table: products
*/
const checkConstraintExample = `
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC CHECK (price > 0),       -- price অবশ্যই positive হবে
    stock INT CHECK (stock >= 0)           -- stock কখনও negative হবে না
);
`;

/* ============================================================
   4️⃣ DEFAULT Constraint Example
   ------------------------------------------------------------
   Table: orders
*/
const defaultConstraintExample = `
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE DEFAULT CURRENT_DATE,   -- auto today date
    status VARCHAR(20) DEFAULT 'pending'    -- auto 'pending' যদি value না দেয়া হয়
);
`;

/* ============================================================
   5️⃣ Summary of Column Constraints
   ------------------------------------------------------------
   NOT NULL     → column খালি রাখা যাবে না
   UNIQUE       → column duplicate value যাবে না
   PRIMARY KEY  → unique + NOT NULL, main identifier
   FOREIGN KEY  → অন্য table-এর primary key refer করবে
   CHECK        → column value নির্দিষ্ট condition পূরণ করবে
   DEFAULT      → column value auto set হবে যদি explicit value না দেয়া হয়
============================================================ */

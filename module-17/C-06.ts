/**
 * ============================================================
 * PostgreSQL SQL Commands
 * ============================================================
 * এই ফাইলটিতে database এবং table সংক্রান্ত SQL commands
 * step by step ব্যাখ্যা করা হয়েছে।
 */

/* ============================================================
   1️⃣ Database তৈরি করা
   ------------------------------------------------------------
   SQL Command:
*/
const createDatabase = `
-- একটি নতুন database তৈরি করা
CREATE DATABASE school;
`;

/* ব্যাখ্যা:
   - 'CREATE DATABASE school;' মানে 'school' নামের নতুন database তৈরি করা।
   - এই database-এ পরে table, data ইত্যাদি রাখা যায়।
   - উদাহরণ: স্কুলের student data রাখার জন্য।
*/

/* ============================================================
   2️⃣ Database মুছে ফেলা
   ------------------------------------------------------------
   SQL Command:
*/
const dropDatabase = `
-- একটি database মুছে ফেলা
DROP DATABASE school;
`;

/* ব্যাখ্যা:
   - 'DROP DATABASE school;' মানে 'school' database সম্পূর্ণভাবে মুছে ফেলা।
   - সতর্কতা: database মুছে দিলে এর সব table, data, structure মুছে যাবে।
   - সাধারণত production system-এ আগে backup নিয়ে তারপর delete করা হয়।
*/

/* ============================================================
   3️⃣ Table তৈরি করা
   ------------------------------------------------------------
   SQL Command:
*/
const createTable = `
-- একটি নতুন table তৈরি করা
CREATE TABLE student (
  id serial,          -- auto-increment number, নতুন row আসলেই স্বয়ংক্রিয়ভাবে সংখ্যা বাড়বে
  name varchar(50),   -- student's নাম, সর্বোচ্চ 50 character
  age int,            -- student's বয়স, integer type
  isAktive boolean,   -- true/false, student active আছে কিনা
  dob date            -- date of birth (YYYY-MM-DD)
);
`;

/* ব্যাখ্যা:
   - 'CREATE TABLE student (...)' → student নামে table তৈরি করা হয়েছে।
   - সাধারণত 'id' কে primary key বানানো হয়: id serial PRIMARY KEY
*/

/* ============================================================
   4️⃣ Table মুছে ফেলা
   ------------------------------------------------------------
   SQL Command:
*/
const dropTable = `
-- একটি table সম্পূর্ণভাবে মুছে ফেলা
DROP TABLE student;
`;

/* ব্যাখ্যা:
   - 'DROP TABLE student;' → student table এবং তার সব data মুছে ফেলে।
   - সতর্কতা: data permanently gone।
*/

/* ============================================================
   5️⃣ Table safely মুছে ফেলা
   ------------------------------------------------------------
   SQL Command:
*/
const dropTableSafe = `
-- Safe way: table delete করা, যদি table না থাকে তবুও error হবে না
DROP TABLE IF EXISTS student;
`;

/* ব্যাখ্যা:
   - 'DROP TABLE IF EXISTS student;' → table delete করার চেষ্টা করবে।
   - যদি table না থাকে, তাহলে কোনো error দেখাবে না।
   - এটি safe way, accidental error এড়াতে ব্যবহার করা হয়।
*/

/* ============================================================
   ✅ সারসংক্ষেপ
   ------------------------------------------------------------
   1. CREATE DATABASE → নতুন database তৈরি করা
   2. DROP DATABASE → database সম্পূর্ণভাবে delete করা
   3. CREATE TABLE → নতুন table তৈরি করা
   4. DROP TABLE → table delete করা
   5. DROP TABLE IF EXISTS → safe table delete
============================================================ */

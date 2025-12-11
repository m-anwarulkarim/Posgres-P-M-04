/**
 * ==========================================================
 * PostgreSQL Commands & Add psql to PATH
 * ==========================================================
 *
 * 1️⃣ PostgreSQL কমান্ডসমূহ (psql CLI)
 * --------------------------------
 * psql হলো PostgreSQL-এর কমান্ড লাইন টুল।
 * এটি দিয়ে ডাটাবেস তৈরি, টেবিল তৈরি, ডাটা insert/query করা যায়।
 *
 * সাধারণ কমান্ড:
 * --------------------------------
 * \l               → সব ডাটাবেস দেখার জন্য
 * \c dbname        → নির্দিষ্ট ডাটাবেসে connect করা
 * \dt              → সব টেবিল দেখার জন্য
 * \d tablename     → টেবিল structure দেখার জন্য
 * \du              → user/role list দেখার জন্য
 * \password        → password পরিবর্তন করার জন্য
 * \q               → psql থেকে exit করার জন্য
 *
 * SQL উদাহরণ:
 * --------------------------------
 * CREATE DATABASE testdb;
 * CREATE TABLE students(
 *     id SERIAL PRIMARY KEY,
 *     name VARCHAR(50),
 *     email VARCHAR(50)
 * );
 * INSERT INTO students(name,email) VALUES('Rahim','rahim@example.com');
 * SELECT * FROM students;
 *
 * ---------------------------------------------------------
 * 2️⃣ psql Command PATH এ যোগ করা
 * --------------------------------
 * যদি Windows বা Linux/macOS-এ psql কমান্ড Recognize না হয়,
 * তাহলে PostgreSQL bin folder PATH-এ যোগ করতে হবে।
 *
 * Windows:
 * 1. PostgreSQL installation folder এ যান (যেমন: C:\Program Files\PostgreSQL\16\bin)
 * 2. Copy path
 * 3. Environment Variables → System variables → Path → Edit → New → paste path → OK
 * 4. Command Prompt পুনরায় খুলুন → psql -U postgres লিখে চেক করুন
 *
 * Linux/macOS:
 * 1. PostgreSQL bin folder এর path খুঁজে বের করুন (যেমন: /usr/pgsql-16/bin বা /usr/local/pgsql/bin)
 * 2. Terminal এ লিখুন:
 *    export PATH=$PATH:/usr/pgsql-16/bin
 * 3. PATH স্থায়ী করতে:
 *    - ~/.bashrc বা ~/.zshrc ফাইলে উপরের লাইন যোগ করুন
 * 4. Terminal পুনরায় খুলুন → psql -U postgres লিখে চেক করুন
 *
 * ---------------------------------------------------------
 * 3️⃣ Quick Tips
 * --------------------------------
 * - PATH ঠিক থাকলে যেকোনো Terminal/Command Prompt থেকে psql চালানো যাবে
 * - Tab key auto-completion ব্যবহার করতে পারা যাবে
 * - SQL কমান্ড শেষে semicolon (;) দিতে হবে
 * - \? লিখে সব psql commands দেখা যাবে
 *
 * ==========================================================
 *  1. CREATE TABLE users ( id SERIAL PRIMARY KEY, name VARCHAR(50) );
 *  2. \dt
 *  3. SELECT * FROM users;
 *  4. \du
 */

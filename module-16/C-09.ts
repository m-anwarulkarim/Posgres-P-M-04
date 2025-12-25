/**
 * ==========================================================
 * Install PostgreSQL & Explore psql CLI
 * ==========================================================
 *
 * 1️⃣ PostgreSQL ইনস্টলেশন
 * --------------------------------
 * PostgreSQL যেকোনো জনপ্রিয় OS-এ ইনস্টল করা সম্ভব।
 *
 * Windows:
 * 1. PostgreSQL অফিসিয়াল সাইট থেকে installer ডাউনলোড করা যাবে:
 *    https://www.postgresql.org/download/windows/
 * 2. Installer চালানো → Next → Password সেট করা → Finish
 * 3. Stack Builder optional, skip করা যেতে পারে
 *
 * Linux (Ubuntu/Debian):
 * 1. Update repos:
 *    sudo apt update
 * 2. Install PostgreSQL:
 *    sudo apt install postgresql postgresql-contrib
 * 3. Check service:
 *    sudo systemctl status postgresql
 *
 * macOS:
 * 1. Homebrew ব্যবহার করে install করা যায়:
 *    brew install postgresql
 * 2. Start service:
 *    brew services start postgresql
 *
 * ---------------------------------------------------------
 * 2️⃣ PostgreSQL সার্ভিস চেক করা
 * --------------------------------
 * Windows: Service list থেকে PostgreSQL service চেক করা যাবে
 * Linux: sudo systemctl status postgresql
 * macOS: brew services list
 *
 * ---------------------------------------------------------
 * 3️⃣ psql CLI ব্যবহার
 * --------------------------------
 * psql হলো PostgreSQL এর Command-Line Interface (CLI),
 * যা দিয়ে ডাটাবেস ম্যানেজ এবং query করা সম্ভব।
 *
 * - ডাটাবেসে লগইন:
 *   Linux/macOS: sudo -u postgres psql
 *   Windows: psql -U postgres
 *
 * - সাধারণ কমান্ড:
 *   \l          → সব ডাটাবেস দেখার জন্য
 *   \c dbname   → নির্দিষ্ট ডাটাবেসে connect করা
 *   \dt         → সব টেবিল দেখার জন্য
 *   \d tablename→ টেবিল structure দেখার জন্য
 *   \q          → psql থেকে exit করা
 *
 * - SQL কমান্ড উদাহরণ:
 *   CREATE DATABASE testdb;
 *   CREATE TABLE students(
 *     id SERIAL PRIMARY KEY,
 *     name VARCHAR(50),
 *     email VARCHAR(50)
 *   );
 *   INSERT INTO students(name,email) VALUES('Rahim','rahim@example.com');
 *   SELECT * FROM students;
 *
 * ---------------------------------------------------------
 * 4️⃣ Quick Tips
 * --------------------------------
 * - Tab key auto-completion ব্যবহার করা যায় psql-এ
 * - SQL কমান্ড শেষে semicolon (;) দিতে হবে
 * - psql prompt এ \? লিখে সব commands দেখা যায়
 *
 * ==========================================================
 */

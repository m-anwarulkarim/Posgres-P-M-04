/**
 * 🔗 Resolving Many-to-Many Relationship
 * ================================================
 *
 * 📌 Many-to-Many Relationship কী?
 * --------------------------------
 * যখন একটি টেবিলের অনেক রেকর্ড অন্য একটি টেবিলের অনেক রেকর্ডের সাথে
 * সম্পর্কিত হতে পারে, তখন একে Many-to-Many বলে।
 *
 * উদাহরণ:
 * একজন ছাত্র অনেক কোর্স করতে পারে
 * একটি কোর্স অনেক ছাত্র নিতে পারে
 * অর্থাৎ — এটা Many-to-Many Relationship।
 *
 * ❗ সমস্যা:
 * --------------------------------
 * Relational Database (MySQL/Postgres) সরাসরি Many-to-Many সাপোর্ট করে না।
 * তাই আমাদের একটি অতিরিক্ত টেবিল তৈরি করতে হয়।
 * এই টেবিলকে বলা হয়: Junction Table / Bridge Table / Associative Table
 *
 * ✔ Many-to-Many কে কিভাবে Resolve করা হয়?
 * ============================================
 *
 * ✅ ধাপ ১: Main দুইটি টেবিল
 *
 * Students:
 * id | name
 * -------------
 * 1  | Anwar
 * 2  | Karim
 *
 * Courses:
 * id | title
 * -------------
 * 1  | JavaScript
 * 2  | SQL
 *
 * ✅ ধাপ ২: নতুন একটি টেবিল তৈরি করা (Junction Table)
 *
 * Student_Course:
 * student_id | course_id
 * -----------------------
 * 1          | 1   -> Anwar enrolled in JavaScript
 * 1          | 2   -> Anwar enrolled in SQL
 * 2          | 1   -> Karim enrolled in JavaScript
 *
 * ⚡ Student_Course টেবিলে থাকবে:
 * -------------------------------
 * - দুইটি Foreign Key
 * - Composite Primary Key (ঐচ্ছিক)
 * - Extra column (ঐচ্ছিক, যেমন grade, enrolledAt)
 *
 * 🔥 PostgreSQL / SQL Example:
 * -------------------------------
 * CREATE TABLE students (
 *   id SERIAL PRIMARY KEY,
 *   name VARCHAR(100)
 * );
 *
 * CREATE TABLE courses (
 *   id SERIAL PRIMARY KEY,
 *   title VARCHAR(100)
 * );
 *
 * CREATE TABLE student_course (
 *   student_id INT REFERENCES students(id),
 *   course_id INT REFERENCES courses(id),
 *   PRIMARY KEY (student_id, course_id)
 * );
 *
 * ⭐ কেন Junction Table দরকার?
 * --------------------------------
 * - Database normalization বজায় রাখা
 * - Duplicate ডেটা এড়ানো
 * - Future data (enrollment date, marks) store করা সহজ
 * - Relationship flexible ও clean রাখা
 *
 * 🎯 Summary (এক লাইনে):
 * --------------------------------
 * Many-to-Many relationship resolve করতে দুই main টেবিলের মাঝে
 * একটি junction table বানাতে হয় যেখানে দুইটি foreign key থাকে।
 *
 */

/*
+------------------+           +------------------+
|     Students     |           |      Courses     |
+------------------+           +------------------+
| id | name        |           | id | title       |
+------------------+           +-----------------+
| 1  | Anwar       |           | 1  | JavaScript  |
| 2  | Karim       |           | 2  | SQL         |
+------------------+           +------------------+
        |                               |
        |                               |
        |           +---------------------------+
        |           |      Student_Course       |
        +----------o+---------------------------+
                    | student_id | course_id    |
                    +---------------------------+
                    | 1          | 1           | -> Anwar enrolled in JavaScript
                    | 1          | 2           | -> Anwar enrolled in SQL
                    | 2          | 1           | -> Karim enrolled in JavaScript
                    +---------------------------+
*/

/*
 * =========================================================
 * Foreign Key (ডেটাবেসে Foreign Key)
 * =========================================================
 *
 * Definition:
 * -----------
 * Foreign Key (FK) হলো একটি Column বা Column-এর combination
 * যা অন্য টেবিলের Primary Key বা Candidate Key কে reference করে।
 * এটি টেবিলগুলোর মধ্যে relationship তৈরি করতে সাহায্য করে।
 *
 * মূল কাজ:
 * - ডেটার consistency নিশ্চিত করা (invalid value entry এড়ানো)
 * - Parent-Child relationship তৈরি করা
 * - Relational integrity বজায় রাখা
 *
 * =========================================================
 * Key বৈশিষ্ট্য:
 * -------------------
 * - Foreign Key অবশ্যই Parent টেবিলের Key (Primary/Candidate Key) অনুযায়ী হবে
 * - Child টেবিলের Row-এ Foreign Key এর value Parent টেবিলে থাকতে হবে
 * - Null মান থাকতে পারে যদি optional relationship হয়
 * - একটি টেবিলে একাধিক Foreign Key থাকতে পারে
 *
 * =========================================================
 * Example 1: Student & Enrollment Table
 *
 * Parent Table (Student):
 * | StudentID | Name   | Email             |
 * |-----------|--------|-----------------|
 * | 1         | Rahim  | rahim@gmail.com  |
 * | 2         | Salma  | salma@gmail.com  |
 * | 3         | Karim  | karim@gmail.com  |
 *
 * Child Table (Enrollment):
 * | EnrollmentID | StudentID | CourseID |
 * |--------------|-----------|----------|
 * | 101          | 1         | 201      |
 * | 102          | 2         | 202      |
 * | 103          | 3         | 201      |
 *
 * Foreign Key:
 * Enrollment.StudentID → references Student.StudentID
 *
 * =========================================================
 * Example 2: Optional Foreign Key
 *
 * Books Table:
 * | BookID | Title       |
 * |--------|------------|
 * | 1      | Math Book  |
 * | 2      | English    |
 *
 * IssuedBooks Table:
 * | IssueID | BookID | StudentID |
 * |---------|--------|-----------|
 * | 1       | 1      | 2         |
 * | 2       | 2      | NULL      |  <- বইটি এখনো কাউকে ইস্যু করা হয়নি
 *
 * Foreign Keys:
 * - IssuedBooks.BookID → references Books.BookID
 * - IssuedBooks.StudentID → references Student.StudentID
 *
 * =========================================================
 * Advantages:
 * -----------
 * - ডেটার integrity বজায় রাখে
 * - Invalid data entry এড়ায়
 * - টেবিলগুলোর মধ্যে relationship সহজে query করা যায়
 *
 * =========================================================
 * Summary Table:
 * ---------------------------------------------------------
 * Term          | Example / Explanation
 * ---------------------------------------------------------
 * Parent Table  | Student Table
 * Child Table   | Enrollment Table
 * Foreign Key   | Enrollment.StudentID → Student.StudentID
 * Purpose       | Maintain relational integrity between tables
 *
 */

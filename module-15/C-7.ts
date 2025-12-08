/*
 * =========================================================
 * Keys in Databases: Primary, Alternate, Simple & Composite
 * =========================================================
 *
 * 1. Primary Key:
 * -------------------
 * Definition:
 * - Candidate Key-এর মধ্যে প্রধান Key।
 * - প্রতিটি Row ইউনিক রাখতে হবে এবং Null থাকতে পারবে না।
 *
 * Example (Student Table):
 * | StudentID | Name   | Email             | Phone      |
 * |-----------|--------|-----------------|-----------|
 * | 1         | Rahim  | rahim@gmail.com  | 0171000001 |
 * | 2         | Salma  | salma@gmail.com  | 0171000002 |
 * Primary Key = StudentID
 *
 * 2. Alternate Key:
 * -------------------
 * Definition:
 * - Candidate Key যা Primary Key নয়, কিন্তু Row ইউনিক রাখতে পারে।
 *
 * Example:
 * - Alternate Keys = Email, Phone
 *
 * 3. Simple Key:
 * -------------------
 * Definition:
 * - Key যা **Single Column** দিয়ে Row ইউনিক করে।
 *
 * Example:
 * - Primary Key = StudentID (Simple Key)
 * - Alternate Key = Email (Simple Key)
 *
 * 4. Composite Key:
 * -------------------
 * Definition:
 * - Key যা **একাধিক Column মিলিয়ে** Row ইউনিক করে।
 * - Primary বা Alternate Key হতে পারে।
 *
 * Example (Enrollment Table):
 * | StudentID | CourseID | EnrollmentDate |
 * |-----------|----------|----------------|
 * | 1         | 101      | 2025-01-10     |
 * | 1         | 102      | 2025-01-11     |
 * Primary Key = {StudentID, CourseID} → Composite Key
 *
 * =========================================================
 * Summary:
 * ---------------------------------------------------------
 * Key Type         | Description / Example
 * ---------------------------------------------------------
 * Primary Key      | প্রধান Candidate Key, Null নেই → StudentID
 * Alternate Key    | Primary Key নয়, কিন্তু Candidate Key → Email, Phone
 * Simple Key       | Single Column Key → StudentID, Email
 * Composite Key    | Multiple Column Key → {StudentID, CourseID}
 *
 */

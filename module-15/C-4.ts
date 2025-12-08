/**
 * ================================
 * RDBMS মূল ধারণা (Relational Database Concepts) / The Anatomy Of A Table Or Relation
 * ================================
 */

/**
 * 1. Table / Relation
 * -------------------
 * Table বা Relation হলো ডেটার স্টোরেজের মূল ইউনিট, যেখানে ডেটা টেবিল আকারে থাকে।
 * প্রতিটি টেবিলের একটি নাম থাকে।
 *
 * উদাহরণ:
 * +-----------+--------+-----+
 * | StudentID | Name   | Age |
 * +-----------+--------+-----+
 * | 1         | Rahim  | 18  |
 * | 2         | Salma  | 19  |
 * +-----------+--------+-----+
 *
 * Student হলো টেবিল/Relation।
 */

/**
 * 2. User / Entity
 * ----------------
 * Entity হলো কোনো জিনিস বা ব্যক্তি যার তথ্য রাখা যায়।
 * প্রতিটি Entity-র Attributes থাকে।
 *
 * উদাহরণ:
 * Student → প্রতিটি ছাত্র একটি Entity
 * Book → প্রতিটি বই একটি Entity
 */

/**
 * 3. Column / Attribute
 * ---------------------
 * Attribute হলো Entity বা টেবিলের একটি বৈশিষ্ট্য, যা Column আকারে থাকে।
 *
 * উদাহরণ:
 * Student টেবিলে Column/Attribute: StudentID, Name, Age
 */

/**
 * 4. Constraint / Domain
 * ----------------------
 * Constraint = নিয়ম যা ডেটা টেবিলে মান্য করতে হয়। যেমন, কোন Column null হতে পারবে কি না, কি মান গ্রহণ করবে ইত্যাদি।
 * Domain = Column-এর সম্ভাব্য মানের সীমা বা ধরন।
 *
 * উদাহরণ:
 * Age column → Domain = 0 থেকে 150
 * Constraint → StudentID = Primary Key, যেন একই ID দু’বার না থাকে
 * Constraint → Email column = UNIQUE, যেন একই ইমেইল একাধিকবার ব্যবহার না হয়
 */

/**
 * 5. Tuple / Record / Row
 * -----------------------
 * Tuple / Row / Record হলো টেবিলের একটি পূর্ণ ডেটা ইউনিট।
 * প্রতিটি Row একটি Entity-এর তথ্যের সম্পূর্ণ বিবরণ দেয়।
 *
 * উদাহরণ:
 * | StudentID | Name   | Age |
 * |-----------|--------|-----|
 * | 1         | Rahim  | 18  | → এটা একটি Tuple / Record
 * | 2         | Salma  | 19  | → এটা আরেকটি Tuple / Record
 * | 3         | Karim  | 20  | → এটিও একটি Tuple / Record
 */

/**
 * 6. Degree
 * ----------
 * Degree = টেবিলের Column-এর সংখ্যা।
 *
 * উদাহরণ:
 * Student টেবিলের Column = StudentID, Name, Age → Degree = 3
 */

/**
 * 7. Cardinality
 * ---------------
 * Cardinality = টেবিলের Row-এর সংখ্যা।
 *
 * উদাহরণ:
 * Student টেবিলে 2 জন ছাত্র → Cardinality = 2
 */

/**
 * ================================
 * সারসংক্ষেপ
 * ================================
 * Table/Relation → ডেটা রাখার টেবিল
 * Entity → যার তথ্য রাখা হচ্ছে
 * Attribute → Column, বৈশিষ্ট্য
 * Constraint/Domain → Column-এর নিয়ম ও সীমা
 * Tuple/Record/Row → একটি ডেটা ইউনিট
 * Degree → Column সংখ্যা
 * Cardinality → Row সংখ্যা
 */

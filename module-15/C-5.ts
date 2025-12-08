/*
 * =============================================
 * Database Keys Concepts (ডেটাবেসে Key ধারণা)
 * =============================================
 *
 * Key:
 * ----
 * ডেটাবেসে Key বলতে বোঝায় একটি Column বা Column-এর combination,
 * যা প্রতিটি Row-কে ইউনিকভাবে চিহ্নিত করতে সাহায্য করে।
 *
 * মূল কাজ:
 * - ডুপ্লিকেট রেকর্ড রোধ করা
 * - টেবিলের রিলেশন বজায় রাখা
 *
 * =============================================
 * 1. Super Key
 * ---------------------------------------------
 * Definition:
 * Super Key হলো একটি বা একাধিক Column-এর সেট,
 * যা টেবিলের প্রতিটি Row-কে ইউনিকভাবে চিহ্নিত করতে পারে।
 *
 * সহজভাবে:
 * যদি Column বা Column-এর কোন combination দিয়ে
 * টেবিলের প্রতিটি রেকর্ড আলাদা করা যায়, সেটাই Super Key।
 *
 * Example:
 * Student টেবিল:
 *
 * | StudentID | Name   | Email             | Phone      |
 * |-----------|--------|-----------------|-----------|
 * | 1         | Rahim  | rahim@gmail.com  | 0171000001 |
 * | 2         | Salma  | salma@gmail.com  | 0171000002 |
 * | 3         | Karim  | karim@gmail.com  | 0171000003 |
 *
 * Possible Super Keys:
 * - StudentID
 * - Email
 * - Phone
 * - StudentID + Name
 * - StudentID + Email + Phone
 */
/**
 * =============================================
 * 2. Candidate Key
 * ---------------------------------------------
 * Definition:
 * Candidate Key হলো Super Key-এর মধ্যে **minimal** অংশ,
 * যা Row ইউনিক করতে যথেষ্ট, কিন্তু অতিরিক্ত Column নেই।
 *
 * Example:
 * Student টেবিলে Candidate Keys:
 * - StudentID
 * - Email
 * - Phone
 *
 * =============================================
 * 3. Primary Key
 * ---------------------------------------------
 * Definition:
 * Candidate Key-এর মধ্যে **প্রধান Key**। এটি প্রতিটি Row ইউনিক রাখে
 * এবং Null হতে দেয় না।
 *
 * Example:
 * - StudentID (Primary Key)
 *
 * =============================================
 * 4. Alternate Key
 * ---------------------------------------------
 * Definition:
 * Candidate Key যা Primary Key নয়, কিন্তু Row ইউনিক রাখতে পারে।
 *
 * Example:
 * - Email (যদি StudentID Primary Key হয়)
 *
 * =============================================
 * 5. Foreign Key
 * ---------------------------------------------
 * Definition:
 * একটি Column যা অন্য টেবিলের Primary Key কে reference করে,
 * যাতে টেবিলগুলোর মধ্যে relation তৈরি হয়।
 *
 * Example:
 * - Course টেবিলের StudentID → Student টেবিলের Primary Key
 *
 * =============================================
 * 6. Composite Key
 * ---------------------------------------------
 * Definition:
 * একাধিক Column মিলিয়ে Row ইউনিক করে। Primary বা Candidate Key হতে পারে।
 *
 * Example:
 * - CourseID + StudentID (যদি এক Student একাধিক Course নিতে পারে)
 *
 * =============================================
 * 7. Unique Key
 * ---------------------------------------------
 * Definition:
 * Column-এর মান ইউনিক হবে, কিন্তু Null থাকতে পারে।
 *
 * Example:
 * - Email (প্রতিটি Student-এর Email ইউনিক)
 *
 * =============================================
 * 8. Subset & Proper Subset
 * ---------------------------------------------
 * Subset: Column-এর যেকোনো combination। যেমন {StudentID, Name}
 * Proper Subset: মূল Column set-এর subset, কিন্তু পুরো সেট নয়।
 *
 * Example:
 * Full Set = {StudentID, Name, Email, Phone}
 * Proper Subsets = {StudentID}, {Email, Phone}, {Name, Email}
 *
 * =============================================
 * 9. Candidate Key & Subset সম্পর্ক
 * ---------------------------------------------
 * Candidate Key = Minimal Super Key
 * Minimal মানে → কোন Column বাদ দিলে এটি আর Row ইউনিক হবে না
 *
 * Example:
 * - Super Key: {StudentID, Name}
 * - Proper Subset: {StudentID} → Candidate Key
 * - Proper Subset: {Name} → Candidate Key নয়
 *
 * =============================================
 * সারসংক্ষেপ:
 * Key Types:
 * - Super Key: Row ইউনিক করতে পারে (Overkill allowed)
 * - Candidate Key: Minimal Super Key
 * - Primary Key: প্রধান Candidate Key, Null নেই
 * - Alternate Key: Candidate Key যা Primary Key নয়
 * - Foreign Key: অন্য টেবিলের Primary Key reference
 * - Composite Key: Multiple Columns মিলিয়ে Row ইউনিক
 * - Unique Key: Column ইউনিক, Null allowed
 */

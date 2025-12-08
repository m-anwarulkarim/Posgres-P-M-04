/**
 * ⁡⁣⁣⁢Why File Systems Fail⁡
 *
 * এই ফাইলটি দেখাচ্ছে ফাইল সিস্টেমের সাধারণ ৫টি সমস্যা এবং
 * প্রতিটির সম্ভাব্য সমাধান। উদাহরণসহ লেখা হয়েছে যাতে সহজে বোঝা যায়।
 */

//////////////////////////////
// 1. বিভিন্ন ফরম্যাটের সমস্যা (Multiple Formats)
//////////////////////////////

/**
 * সমস্যা:
 * ফাইল বিভিন্ন ফরম্যাটে থাকতে পারে, কিন্তু তাদের মধ্যে relation সহজে তৈরি করা যায় না।
 *
 * উদাহরণ:
 * - Student data: CSV file
 * - Exam marks: Excel file
 * - Attendance: Text file
 * সব একত্রে query করা বা report তৈরি করা কঠিন।
 *
 * সমাধান:
 * - সব ডেটা একটি Database-এ structured format এ রাখা উচিত।
 * - SQL বা NoSQL ব্যবহার করে query এবং report সহজে তৈরি করা সম্ভব।
 */

//////////////////////////////
// 2. ডেটা পুনরাবৃত্তি (Data Redundancy)
//////////////////////////////

/**
 * সমস্যা:
 * একই তথ্য বিভিন্ন জায়গায় আলাদাভাবে রাখা। এতে ডিস্ক স্পেস নষ্ট হয় এবং ডেটা ম্যানেজ করা কঠিন হয়।
 *
 * উদাহরণ:
 * - “Students.txt” ফাইল ও “ExamResults.txt” ফাইলে একই student info।
 * - যদি ডেটা পরিবর্তন করতে হয়, দুই জায়গায় আলাদাভাবে update করতে হবে।
 *
 * সমাধান:
 * - Database Normalization ব্যবহার করে redundancy কমানো উচিত।
 * - একি তথ্য এক জায়গায় রাখা, অন্য টেবিল/ফাইল থেকে reference ব্যবহার করা যায়।
 */

//////////////////////////////
// 3. ডেটা অসঙ্গতি (Data Inconsistency)
//////////////////////////////

/**
 * সমস্যা:
 * Redundancy-এর কারণে এক জায়গার ডেটা পরিবর্তন হলেও অন্য জায়গায় update না হলে inconsistency হয়।
 *
 * উদাহরণ:
 * - ExamResults.txt-এ সুমনের মার্ক ৯০, Students.txt-এ ৮৫ লেখা → inconsistent।
 *
 * সমাধান:
 * - Database Constraints ব্যবহার করা উচিত (Primary Key, Foreign Key, Unique)।
 * - Data consistency automatic নিশ্চিত করা সম্ভব।
 */

//////////////////////////////
// 4. Concurrency Protocol নেই (No Concurrency Control)
//////////////////////////////

/**
 * সমস্যা:
 * একাধিক ইউজার একসাথে ফাইল access করলে সমস্যা হয়।
 *
 * উদাহরণ:
 * - দুইজন একই Excel ফাইল edit করছে।
 * - একের update করার সময় আরেকের save করলে ডেটা overwrite হবে → lost update।
 *
 * সমাধান:
 * - Database-এ Transactions, Locks, Atomic Operations ব্যবহার করা উচিত।
 * - একাধিক ইউজার safeভাবে একসাথে কাজ করতে পারবে।
 */

//////////////////////////////
// 5. সিকিউরিটি সমস্যা (Security Issues)
//////////////////////////////

/**
 * সমস্যা:
 * ফাইল সিস্টেমে sophisticated access control বা permission সীমিত।
 *
 * উদাহরণ:
 * - কেউ C:/Important.txt ফাইল access করছে।
 * - Proper authentication/authorization না থাকলে sensitive data leak হতে পারে।
 *
 * সমাধান:
 * - Database-এ Authentication & Authorization, Role-based Access Control (RBAC) ব্যবহার করা উচিত।
 * - ইউজার শুধু অনুমোদিত তথ্য access করতে পারবে।
 */

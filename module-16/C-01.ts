/**
 * ===============================================
 * Data Anomalies in DBMS (TypeScript Explanation)
 * ===============================================
 *
 * Data Anomaly বলতে বোঝায় ডাটাবেসে তথ্য সংরক্ষণের সময় বা
 * আপডেটের সময় যে অসঙ্গতি, ভুল বা অপ্রয়োজনীয় সমস্যা দেখা দেয়।
 * সাধারণভাবে, এগুলো ঘটে যখন ডাটাবেসের ডিজাইন ঠিকমত normalized নয়,
 * অর্থাৎ একই তথ্য একাধিক স্থানে রাখা হয়।
 *
 * মূলত Data Anomalies তিন ধরনের হয়:
 * 1️⃣ Insert Anomaly
 * 2️⃣ Update Anomaly
 * 3️⃣ Delete Anomaly
 *
 * কারণ (Causes):
 * - Redundancy (একই তথ্য বারবার রাখা)
 * - Improper normalization (1NF, 2NF, 3NF অনুসারে নর্মালাইজ করা না)
 * - Inconsistent data entry (একই তথ্যের বিভিন্ন রেকর্ডে ভিন্ন মান)
 *
 */

/**
 * ============================
 * 1️⃣ Insert Anomaly
 * ============================
 *
 * সমস্যা: কিছু তথ্য যোগ করতে গেলে প্রয়োজনীয় অন্য তথ্য না থাকলে সমস্যা হয়।
 * উদাহরণ:
 * Student_Course টেবিলে শুধুমাত্র Student আছে, Course নেই।
 * তখন নতুন Course যোগ করতে গেলে কোন StudentID লাগবে।
 * যদি StudentID না থাকে, তখন Course যোগ করা যাবে না।
 *
 * সমস্যার কারণ: Redundant বা incompletely structured data।
 */

/**
 * ============================
 * 2️⃣ Update Anomaly
 * ============================
 *
 * সমস্যা: একই তথ্য একাধিক স্থানে থাকলে, সব জায়গায় পরিবর্তন না করলে inconsistent data হয়ে যায়।
 * উদাহরণ:
 * Student_Course টেবিলে একই কোর্সের নাম একাধিক Student রেকর্ডে আছে:
 * | StudentID | StudentName | CourseID | CourseName |
 * | 101       | Rahim       | C01      | Math       |
 * | 102       | Karim       | C01      | Math       |
 *
 * যদি Math পরিবর্তন করে Advanced Math করা হয় কিন্তু শুধু একটি রেকর্ড আপডেট করা হয়,
 * তাহলে ডাটাবেস inconsistent হবে।
 *
 * সমস্যার কারণ: Redundant data একাধিক স্থানে থাকা।
 */

/**
 * ============================
 * 3️⃣ Delete Anomaly
 * ============================
 *
 * সমস্যা: কোন রেকর্ড মুছে দিলে প্রয়োজনীয় তথ্যও হারিয়ে যেতে পারে।
 * উদাহরণ:
 * Student_Course টেবিলে যদি শুধুমাত্র একজন Student থাকে Math কোর্সে:
 * | StudentID | StudentName | CourseID | CourseName |
 * | 101       | Rahim       | C01      | Math       |
 *
 * যদি Rahim মুছে দেওয়া হয়, আর কোন Student Math এ নেই, তাহলে CourseName "Math" হারিয়ে যাবে।
 *
 * সমস্যার কারণ: Redundant বা improperly normalized data।
 */

/**
 * ============================
 * সমাধান (Solution)
 * ============================
 * - Normalization ব্যবহার করা উচিত:
 *   1NF → Repeating groups বাদ
 *   2NF → Partial dependency দূর করা
 *   3NF → Transitive dependency দূর করা
 *
 * মূল কথা : ডাটা ভেঙ্গে ভেঙ্গে রাখা
 * উদাহরণ: Student-Course DB
 *
 * Student Table:
 * | StudentID | Name  |
 * |-----------|-------|
 * | 101       | Rahim |
 *
 * Course Table:
 * | CourseID | CourseName |
 * |----------|------------|
 * | C01      | Math       |
 * | C02      | English    |
 *
 * Enrollment Table:
 * | StudentID | CourseID |
 * |-----------|----------|
 * | 101       | C01      |
 * | 101       | C02      |
 *
 * এভাবে করলে Insert, Update, Delete anomalies দূর করা যায়।
 */

/**
 * ============================
 * সারসংক্ষেপ (Summary)
 * ============================
 *
 * | Anomaly Type  | Problem                        | Cause                         |
 * |---------------|--------------------------------|-------------------------------|
 * | Insert        | নতুন তথ্য যোগ করতে সমস্যা        | Required info নেই             |
 * | Update        | ডাটার inconsistent values      | Redundant data একাধিক স্থানে |
 * | Delete        | প্রয়োজনীয় তথ্য হারানো          | Redundant data একই রেকর্ডে  |
 *
 */

//
// 2. Candidate Key
// 3. Subset & Proper Subset
//

/*
 * =========================================================
 * Candidate Key
 * =========================================================
 *
 * Definition:
 * Candidate Key হলো একটি Column বা Column-এর combination,
 * যা প্রতিটি Row ইউনিকভাবে চিহ্নিত করতে পারে।
 * এটি হলো Super Key-এর মধ্যে minimal অংশ।
 * অর্থাৎ, যতটুকু Column দরকার Row ইউনিক করতে, সেটিই Candidate Key।
 * কোন অতিরিক্ত Column থাকবে না।
 *
 * বৈশিষ্ট্য:
 * - প্রতিটি Row-কে ইউনিকভাবে চিহ্নিত করে
 * - Minimal: কোনো Column বাদ দিলে আর ইউনিক থাকবে না
 * - Null মান থাকতে পারবে না
 * - Super Key-এর subset হতে হবে
 * - একাধিক Candidate Key থাকতে পারে
 *
 * Example (Student Table):
 * Columns = {StudentID, Name, Email, Phone}
 * Candidate Keys = {StudentID}, {Email}, {Phone}
 *
 * =========================================================
 * Subset (উপসেট)
 * =========================================================
 *
 * Definition:
 * Subset হলো একটি মূল সেটের যেকোনো অংশ বা combination।
 * অর্থাৎ, যদি মূল সেট = S, তাহলে T হলো S-এর subset
 * যদি T-এর সব element S-এ থাকে।
 *
 * Notation:
 * T ⊆ S → T হলো S-এর subset
 *
 * Example:
 * মূল সেট: {A, B, C}
 * Possible Subsets:
 * - {A}
 * - {B}
 * - {C}
 * - {A, B}
 * - {B, C}
 * - {A, C}
 * - {A, B, C}
 * - {} (Empty set)
 *
 * বৈশিষ্ট্য:
 * - Empty set সব subset-এ থাকে
 * - মূল set নিজেই subset
 * - একটি set-এর মোট Subset = 2^n, যেখানে n = element সংখ্যা
 *
 * =========================================================
 * Proper Subset (প্রপার সাবসেট)
 * =========================================================
 *
 * Definition:
 * Proper Subset হলো subset, কিন্তু মূল set নয়।
 * অর্থাৎ, Proper Subset = Subset - Full Set
 *
 * Notation:
 * T ⊂ S → T হলো S-এর proper subset
 *
 * Example:
 * মূল set = {A, B, C}
 * Proper Subsets:
 * - {A}
 * - {B}
 * - {C}
 * - {A, B}
 * - {B, C}
 * - {A, C}
 *
 * লক্ষ্য: {A, B, C} Proper Subset নয়, কারণ এটি পুরো set
 *
 * =========================================================
 * RDBMS উদাহরণ (Columns এর ক্ষেত্রে)
 * =========================================================
 *
 * Student Table Columns = {StudentID, Name, Email, Phone}
 *
 * Subsets:
 * - {StudentID}
 * - {Email, Phone}
 * - {StudentID, Name, Email}
 * - {StudentID, Name, Email, Phone} → Full Set included
 *
 * Proper Subsets:
 * - {StudentID}
 * - {Email, Phone}
 * - {StudentID, Name, Email}
 * - {StudentID, Name, Email, Phone} → Proper Subset নয়
 *
 * =========================================================
 * মজার কথা:
 * Candidate Key বের করার সময় আমরা Subset এবং Proper Subset ব্যবহার করি।
 * Minimal Super Key = Candidate Key
 *
 */

/**
 * ================================================================
 * Transitive Dependency & Third Normal Form (3NF) – Easy Explanation
 * ================================================================
 *
 * 1) Transitive Dependency কি?
 * --------------------------------
 * Transitive Dependency তখন হয় যখন একটি non-key attribute
 * অন্য একটি non-key attribute-এর মাধ্যমে Primary Key-এর উপর
 * নির্ভর করে।
 *
 * সাধারণ কাঠামো:
 *
 *   PrimaryKey  -> A
 *   A -> B
 *
 * এখানে:
 *   - A = non-key attribute
 *   - B = non-key attribute
 *
 * ফলে পরোক্ষভাবে:
 *
 *   PrimaryKey -> B   (এটাই Transitive Dependency)
 *
 * সহজ ভাষায়:
 * “Primary Key → কলাম A → কলাম B”
 * অর্থাৎ, B সরাসরি Primary Key-এর উপর নয়,
 * বরং A-এর মাধ্যমে নির্ভর করছে।
 *
 * ------------------------------------------------
 * 2) Transitive Dependency কেন খারাপ?
 * ------------------------------------------------
 *
 * এর ফলে:
 * - একই ডাটা বারবার লিখতে হয় (Redundancy)
 * - Update anomaly হয় (এক জায়গায় পরিবর্তন, অন্য জায়গায় ঠিক হয় না)
 * - Delete anomaly হয় (একটি রো ডিলিট করলে দরকারি ডাটা হারাতে পারো)
 *
 * ------------------------------------------------
 
 * 3) Example (টেবিল সহ)
 * ------------------------------------------------
 *
 * ধরা যাক একটি টেবিল:
 *
 *   StudentID | StudentName | DeptID | DeptName
 *   -------------------------------------------
 *   101       | Rahim       | D01    | CSE
 *   102       | Karim       | D02    | EEE
 *
 * Primary Key: StudentID
 *
 * Functional Dependencies:
 *
 *   StudentID -> StudentName
 *   StudentID -> DeptID
 *   DeptID    -> DeptName
 *
 * এখানে relation:
 *
 *   StudentID -> DeptID -> DeptName
 *
 * তাই:
 *   DeptName হচ্ছে StudentID-এর উপর
 *   transitively dependent (পরোক্ষভাবে নির্ভরশীল)।
 *
 * ------------------------------------------------
 * 4) Third Normal Form (3NF) কি?
 * ------------------------------------------------
 *
 * 3NF হলো এমন একটি Normal Form যেখানে:
 *
 * ✅ টেবিলটি আগে অবশ্যই 1NF এবং 2NF এ থাকতে হবে।
 * ✅ কোনো non-key attribute আরেকটি non-key attribute-এর
 *    উপর depend করতে পারবে না।
 *
 * সহজ ভাষায়:
 * “সব non-key attribute সরাসরি Primary Key-এর উপর নির্ভর করবে,
 * অন্য non-key attribute-এর মাধ্যমে নয়।”
 *
 * ------------------------------------------------
 * 5) 3NF-এ যাওয়ার নিয়ম (Solution to Transitive Dependency)
 * ------------------------------------------------
 *
 * Transitive Dependency দূর করতে টেবিলকে ভেঙে ফেলতে হয়
 * (Decomposition)।
 *
 * আগের টেবিলকে 2 ভাগ করি:
 *
 * Table 1: Student
 * -------------------------
 *   StudentID | StudentName | DeptID
 *
 * Table 2: Department
 * -------------------------
 *   DeptID | DeptName
 *
 * এখন:
 * - StudentName সরাসরি StudentID-এর উপর depend করে ✅
 * - DeptName সরাসরি DeptID-এর উপর depend করে ✅
 * - আর কোনো indirect (transitive) dependency নাই ✅
 *
 * তাই এই টেবিলগুলো এখন 3NF এ আছে।
 *
 * ------------------------------------------------
 * 6) মনে রাখার সহজ ট্রিক:
 * ------------------------------------------------
 *
 * যদি এমন চেইন দেখো:
 *
 *   Primary Key -> A -> B
 *
 * এবং A ও B দুটোই non-key attribute হয়
 * → তাহলে বুঝবে Transitive Dependency আছে
 * → তখন 3NF ভাঙা
 * → সমাধান: আলাদা টেবিল বানাও।
 *
 * ------------------------------------------------
 * Summary:
 * ------------------------------------------------
 *
 * Transitive Dependency = Indirect dependency
 * 3NF Goal = Remove transitive dependency
 *
 * ================================================================
 */

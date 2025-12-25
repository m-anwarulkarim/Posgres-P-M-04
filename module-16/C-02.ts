/**
 * ===============================================
 * Functional Dependency (FD) in DBMS
 * ===============================================
 *
 * ১️⃣ Functional Dependency (FD) কি?
 *
 * Functional Dependency হলো এমন একটি সম্পর্ক যেখানে
 * একটি attribute বা attribute-এর set অন্য attribute বা attribute setকে
 * uniquely নির্ধারণ করে।
 *
 * লেখা হয় এভাবে: X → Y
 * - X = Determinant (যা জানলে Y জানা যায়)
 * - Y = Dependent attribute
 *
 * অর্থ: যদি X-এর মান জানা থাকে, তাহলে Y-এর মানও নিশ্চিতভাবে জানা যায়।
 *
 * -------------------------------------------------
 * উদাহরণ:
 *
 * ধরা যাক একটি টেবিল আছে:
 *
 * | StudentID | Name  | Department | DeptHead |
 * |-----------|-------|-----------|----------|
 * | 101       | Rahim | CSE       | Mr. A    |
 * | 102       | Karim | EEE       | Mr. B    |
 *
 * এখানে কিছু Functional Dependency আছে:
 *
 * 1️⃣ StudentID → Name, Department
 *    - StudentID জানলে Name এবং Department নিশ্চিতভাবে জানা যায়।
 *    - অর্থাৎ, StudentID হলো determinant, Name ও Department dependent।
 *
 * 2️⃣ Department → DeptHead
 *    - Department জানলে DeptHead নিশ্চিতভাবে জানা যায়।
 *    - অর্থাৎ, Department হলো determinant, DeptHead dependent।
 *
 * -------------------------------------------------
 * মূল ধারণা:
 * - FD হল “একটি value অন্য value কে নির্ধারণ করে” এর সম্পর্ক।
 * - DB ডিজাইনে FD বোঝা খুব গুরুত্বপূর্ণ, কারণ এটি Normalization
 *   করতে সাহায্য করে, যা Redundancy এবং Anomalies কমায়।
 *
 * -------------------------------------------------
 * আরও উদাহরণ (Student-Course টেবিল):
 *
 * | StudentID | CourseID | Grade |
 * |-----------|----------|-------|
 * | 101       | C01      | A     |
 * | 101       | C02      | B     |
 *
 * Functional Dependency:
 * - StudentID + CourseID → Grade
 *   (Composite key দিয়ে Grade নির্ধারিত হয়)
 * - CourseID → CourseName
 *   (CourseID জানলে কোর্সের নাম নির্ধারিত হয়)
 *
 * =================================================
 */

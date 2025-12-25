/**
 *⁡⁣⁣⁢Types Of Database Models⁡
 *
 * এই ফাইলে আমরা বিভিন্ন Database Model এর ধরন,
 * আগের সমস্যাগুলো, সমাধান এবং কেন আমরা SQL ব্যবহার করি
 * তা বিস্তারিতভাবে সাজিয়েছি।
 */

/**
 * 1. Hierarchical Database Model (হায়ারারকিক্যাল)
 *
 * কী:
 * - Data tree structure-এ থাকে।
 * - প্রতিটি record-এর এক parent থাকতে পারে, multiple child থাকতে পারে।
 *
 * উদাহরণ:
 * Company
 *  ├─ HR
 *  ├─ IT
 *  └─ Finance
 *
 * সমস্যা:
 * - Structure fix হলে পরিবর্তন কঠিন
 * - Complex query করা কঠিন
 * - শুধু parent-child relationship সহজে handle করা যায়
 *
 * সমাধান:
 * - এখন relational DB ব্যবহার করা হয়, table & foreign key দিয়ে relationship manage করা যায়
 *
 * SQL ব্যবহার কারণ:
 * - Tree না থাকলেও relational table-এ parent-child relationship তৈরি ও query করা সহজ
 */

/**
 * 2. Network Database Model (নেটওয়ার্ক)
 *
 * কী:
 * - Data graph structure-এ থাকে
 * - Record multiple parent & multiple child থাকতে পারে
 *
 * উদাহরণ:
 * Student ↔ Courses
 * - একজন student অনেক course নিতে পারে
 * - একটি course অনেক student-এর হতে পারে
 *
 * সমস্যা:
 * - Structure খুব complex, maintenance কঠিন
 * - Query language standardized ছিল না
 * - Learning curve বেশি
 *
 * সমাধান:
 * - Relational DB তে graph relationships simplify করা যায় (junction table ব্যবহার করে)
 *
 * SQL ব্যবহার কারণ:
 * - Relational tables ও JOIN query দিয়ে complex relationships handle করা যায়
 */

/**
 * 3. Relational Database Model (রিলেশনাল)
 *
 * কী:
 * - Data tables (rows & columns) আকারে থাকে
 * - Primary key ও foreign key দিয়ে relationships manage করা যায়
 *
 * উদাহরণ:
 * Students Table:
 * | StudentID | Name  | Age |
 * |-----------|-------|-----|
 * | 1         | Sumon | 18  |
 *
 * Courses Table:
 * | StudentID | Course |
 * |-----------|--------|
 * | 1         | Math   |
 *
 * সমস্যা:
 * - আগের মডেলগুলোর সীমাবদ্ধতা দূর করে
 *
 * সমাধান:
 * - Table, primary key, foreign key ব্যবহার করে structured, normalized, এবং query-able data
 *
 * SQL ব্যবহার কারণ:
 * - Structured data query করতে সহজ
 * - JOIN, aggregation, filtering সহজ
 * - Standardized language
 */

/**
 * 4. Entity-Relationship Model (ER Model)
 *
 * কী:
 * - Conceptual model, যা দেখায় data entities এবং relationships
 * - Visual view: ER Diagram
 *
 * উদাহরণ:
 * Student —enrolls in→ Course
 * Teacher —teaches→ Course
 *
 * সমস্যা:
 * - Conceptual view, real storage নয়
 * - Directly data query করা যায় না
 *
 * সমাধান:
 * - ER Diagram design করে relational DB implement করা হয়
 *
 * SQL ব্যবহার কারণ:
 * - ER design অনুযায়ী table, constraints, এবং relationships তৈরি করতে
 */

/**
 * 5. Object-Oriented Database Model (OO Model)
 *
 * কী:
 * - Data object-oriented style-এ থাকে
 * - Object-এর properties এবং methods থাকে
 *
 * উদাহরণ:
 * Student {
 *   Name: "Sumon",
 *   Age: 18,
 *   enroll(course)
 * }
 *
 * সমস্যা:
 * - Traditional SQL compatible নয়
 * - Widespread adoption কম
 * - Complex query support কম
 *
 * সমাধান:
 * - Relational DB + ORM (Object-Relational Mapping) ব্যবহার করা হয়
 *
 * SQL ব্যবহার কারণ:
 * - Business apps relational data handle করতে SQL standardized
 */

/**
 * 6. Document Database Model (NoSQL)
 *
 * কী:
 * - Data JSON/BSON document আকারে থাকে
 * - Flexible schema, relational constraint নেই
 *
 * উদাহরণ:
 * {
 *   "name": "Sumon",
 *   "age": 18,
 *   "courses": ["Math", "Physics"]
 * }
 *
 * সমস্যা:
 * - Complex queries করা কঠিন
 * - Joins কম support
 * - Transactions কম
 *
 * সমাধান:
 * - Relational DB-তে structured data ও strong constraints থাকায় stability বেশি
 *
 * SQL ব্যবহার কারণ:
 * - ACID properties, complex relationships, reporting সহজ
 */

/**
 * 7. Key-Value Database Model (NoSQL)
 *
 * কী:
 * - Data key-value pair আকারে থাকে
 * - খুব দ্রুত read/write সম্ভব
 *
 * উদাহরণ:
 * Key: "Student:1"
 * Value: {"name":"Sumon","age":18}
 *
 * সমস্যা:
 * - শুধু key-value, complex relationships handle করতে পারে না
 * - Query limited
 *
 * সমাধান:
 * - Relational DB-তে relational mapping, indexing ও query flexibility আছে
 *
 * SQL ব্যবহার কারণ:
 * - Complex queries, joins, constraints, transactions সব একসাথে support করে
 */

/**
 * 🔑 সারসংক্ষেপ:
 * আগের মডেলগুলোতে flexibility, query complexity, maintenance, relationship handling সমস্যা ছিল
 * Relational Database + SQL সব সমস্যা সমাধান করে:
 * - Flexible queries
 * - Relationship management via foreign keys
 * - ACID transactions
 * - Standardized structure
 */

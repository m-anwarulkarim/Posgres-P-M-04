/*
==========================================================
🟦 PostgreSQL Indexing — TypeScript File Version
==========================================================

1️⃣ Index কী?  

Index হলো database-এর এমন একটি structure,  
যা **query execution speed বাড়াতে** ব্যবহৃত হয়।  

Simply বলতে গেলে:  
👉 এটা হলো database table-এর জন্য একটি “fast lookup” system।  
👉 ঠিক যেমন বই-এর শেষে Index থাকলে আমরা দ্রুত page খুঁজে পাই।  

উদাহরণ:  
- Employee table থেকে specific id বা name খুঁজে বের করা  
- Large table এ search operations দ্রুত করা  

*/

/*
2️⃣ Index কেন ব্যবহার করি?  

1. SELECT query গুলো দ্রুত execute করতে  
2. WHERE clause এর performance improve করতে  
3. JOIN operation দ্রুত করতে  
4. ORDER BY, GROUP BY operation দ্রুত করতে  

*/

/*
3️⃣ Index Type (PostgreSQL)
*/
/*
1. **B-Tree Index** (Default)
   - Most common  
   - WHERE, JOIN, ORDER BY এর জন্য best  
   - Example: PRIMARY KEY automatically B-Tree index তৈরি করে  

2. **Hash Index**
   - Exact match এর জন্য  
   - WHERE column = value

3. **GIN (Generalized Inverted Index)**
   - Array, JSONB column এর জন্য  
   - Full-text search এর জন্য  

4. **GiST (Generalized Search Tree)**
   - Geometric data, range type, full-text search  

5. **BRIN (Block Range Index)**
   - Large sequential tables  
   - Column data sequential হলে খুব দ্রুত  

*/

/*
4️⃣ Index কিভাবে বানানো হয়?  
*/

/*
-- Example: Employee table(id, name, salary)
-- 1. Simple Index on name
*/

`CREATE INDEX idx_employee_name
ON employees(name)`;

/*
-- 2. Unique Index
-- Ensures no duplicate values
*/

`CREATE UNIQUE INDEX idx_employee_id
ON employees(id)`;

/*
-- 3. Composite Index (multiple columns)
*/

`CREATE INDEX idx_employee_name_salary
ON employees(name, salary)`;

/*
-- 4. Partial Index (conditional index)
-- শুধুমাত্র salary > 50000 এর জন্য
*/

`CREATE INDEX idx_high_salary
ON employees(salary)
WHERE salary > 50000`;

/*
-- 5. Index on expression
-- যেমন UPPER(name) এর উপর index
*/

`CREATE INDEX idx_upper_name
ON employees(UPPER(name))`;

/*
5️⃣ Index কিভাবে কাজ করে?  

- Table scan না করে index structure থেকে value খুঁজে নেয়  
- B-Tree, Hash, GIN, GiST, BRIN অনুযায়ী lookup হয়  
- WHERE, JOIN, ORDER BY, GROUP BY operations দ্রুত হয়  

*/

/*
6️⃣ Index Drop করা
*/

`DROP INDEX idx_employee_name`;

/*
7️⃣ Index এর সুবিধা ও অসুবিধা  

✅ Advantages:
- Query performance বৃদ্ধি পায়  
- Search, Join, Order, Group operations দ্রুত হয়  

❌ Disadvantages:
- Table এ data insert/update/delete এর performance কিছুটা slow হয়  
- Extra storage লাগে  
*/

/*
==========================================================
✅ Summary  

- Index হলো database table এর fast lookup structure  
- PostgreSQL বিভিন্ন ধরনের index support করে: B-Tree, Hash, GIN, GiST, BRIN  
- SELECT, WHERE, JOIN, ORDER BY, GROUP BY operations দ্রুত হয়  
- Proper indexing query performance dramatically improve করে  
==========================================================
*/

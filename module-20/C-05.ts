/*
==========================================================
🟦 PostgreSQL Trigger —
==========================================================

1️⃣ Trigger কী?  

Trigger হলো SQL-এর একটি special type এর stored procedure,  
যেটি **automaticভাবে চালানো হয়** যখন কোনো নির্দিষ্ট event ঘটে কোনো table-এ।  

Simply বলতে গেলে:  
👉 এটা হলো database-এর "event listener"।  

উদাহরণ:  
- যখন কোনো row insert, update বা delete হয়, Trigger automatically কাজ করবে।  
*/

/*
2️⃣ Trigger কেন ব্যবহার করি?  

1. Data integrity বজায় রাখতে  
2. Audit বা logging system তৈরি করতে  
3. Automatic calculations বা updates করতে  
4. নির্দিষ্ট condition অনুযায়ী warning বা error দেখাতে  
*/

/*
3️⃣ Trigger-এর ধরণ (Types):  

1. **BEFORE Trigger**  
   - Event ঘটার আগে চালানো হয়  
   - সাধারণত validation বা data modification এর জন্য ব্যবহৃত হয়  

2. **AFTER Trigger**  
   - Event ঘটার পরে চালানো হয়  
   - সাধারণত logging বা audit এর জন্য ব্যবহৃত হয়  

3. **INSTEAD OF Trigger** (mostly View-এর জন্য)  
   - Event-এর পরিবর্তে custom logic চালায়  
*/

/*
4️⃣ Trigger কোন event-এর জন্য ব্যবহার করা যায়?  

- **INSERT** → যখন কোনো নতুন row add হয়  
- **UPDATE** → যখন কোনো row update হয়  
- **DELETE** → যখন কোনো row delete হয়  
*/

/*
5️⃣ Trigger Syntax উদাহরণ (PostgreSQL)
*/

/*
-- Table উদাহরণ: employees(id, name, salary)
*/

/*
-- 1. Trigger Function বানানো (BEFORE INSERT)
*/

`CREATE OR REPLACE FUNCTION before_employee_insert()
RETURNS TRIGGER AS $$
BEGIN
    -- Example: salary 0 এর কম হলে error দেখাবে
    IF NEW.salary < 0 THEN
        RAISE EXCEPTION 'Salary cannot be negative!';
    END IF;
    RETURN NEW; -- নতুন row insert করতে RETURN করা লাগবে
END;
$$ LANGUAGE plpgsql`;

/*
-- 2. Trigger বানানো
*/

`CREATE TRIGGER check_salary_before_insert
BEFORE INSERT ON employees
FOR EACH ROW
EXECUTE FUNCTION before_employee_insert()`;

/*
6️⃣ UPDATE Trigger উদাহরণ
*/

/*
-- যখন salary update হবে, তার আগেই log table-এ লিখে রাখা
*/

`CREATE OR REPLACE FUNCTION log_salary_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO salary_log(employee_id, old_salary, new_salary, updated_at)
    VALUES(OLD.id, OLD.salary, NEW.salary, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql`;

`CREATE TRIGGER after_salary_update
AFTER UPDATE OF salary ON employees
FOR EACH ROW
EXECUTE FUNCTION log_salary_update()`;

/*
7️⃣ DELETE Trigger উদাহরণ
*/

/*
-- যখন কোনো employee delete হবে, তার data audit table-এ রাখা
*/

`CREATE OR REPLACE FUNCTION log_employee_delete()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO employee_audit(id, name, salary, deleted_at)
    VALUES(OLD.id, OLD.name, OLD.salary, NOW());
    RETURN OLD;
END;
$$ LANGUAGE plpgsql`;

`CREATE TRIGGER after_employee_delete
AFTER DELETE ON employees
FOR EACH ROW
EXECUTE FUNCTION log_employee_delete()`;

/*
==========================================================
✅ Summary  

- Trigger হলো automatic SQL procedure  
- Event-driven: INSERT, UPDATE, DELETE  
- BEFORE / AFTER / INSTEAD OF ধরণ  
- Row বা statement level Trigger হতে পারে  
- Data integrity, logging, automation-এর জন্য খুব দরকারি  
==========================================================
*/

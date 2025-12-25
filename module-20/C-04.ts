/*
====================================================================
🟦 PostgreSQL — STORED PROCEDURE 
====================================================================

Stored Procedure কী?
--------------------------------
- Procedure হলো database-এ থাকা reusable program  
- Function-এর মতো logic execute করে, কিন্তু সরাসরি return value বাধ্যতামূলক নয়  
- Procedure মূলত Data Manipulation (INSERT, UPDATE, DELETE) বা Complex Logic এর জন্য ব্যবহৃত হয়

Key Points:
✔ Function → value return করে  
✔ Procedure → কাজ সম্পন্ন করে, return value optional  
✔ Procedure CALL command দিয়ে execute হয়
*/

/*
====================================================================
🟩 Procedure এর সুবিধা
====================================================================
- কোড reusable → একবার declare করলে বারবার ব্যবহার করা যায়  
- Business logic database-এ রাখা যায়  
- Performance improve হয়, কারণ database-এ logic execute হয়  
- Function-এর মতো strict return value নেই → বেশি flexible  
*/

/*
====================================================================
🔵 PostgreSQL Procedure Structure
====================================================================
*/

`CREATE PROCEDURE procedure_name(parameters)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Procedure logic
END;
$$`;

/*
====================================================================
1) Simple Procedure — কোনো parameter নেই
====================================================================
Explanation:
- কোন parameter নেই  
- কাজ console-এ message দেখানো
*/

`CREATE PROCEDURE say_hello()
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE NOTICE 'Hello, world!';
END;
$$`;

/*
Execute:
CALL say_hello();
*/

/*
====================================================================
2) Procedure With IN parameter
====================================================================
Explanation:
- parameter হিসেবে input নেয়  
- console-এ message দেখায়
*/

`CREATE PROCEDURE greet_user(name text)
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE NOTICE 'Hello, %', name;
END;
$$`;

/*
Execute:
CALL greet_user('Anwar');
*/

/*
====================================================================
3) Procedure With OUT parameter
====================================================================
Explanation:
- OUT parameter দিয়ে value return করা যায়  
- employees table থেকে total count return করবে
*/

`CREATE PROCEDURE get_employee_count(OUT total int)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT COUNT(*) INTO total FROM employees;
END;
$$`;

/*
Execute:
CALL get_employee_count(total => 0);
*/

/*
====================================================================
4) Procedure Doing INSERT / UPDATE
====================================================================
Explanation:
- Student table-এ নতুন row insert করবে
*/

`CREATE PROCEDURE add_student(student_name text, student_age int)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO students(name, age) VALUES (student_name, student_age);
END;
$$`;

/*
Execute:
CALL add_student('Karim', 20);
*/

/*
====================================================================
5) Key Differences: Function vs Procedure
====================================================================
| Feature | Function | Procedure |
|---------|---------|-----------|
| Return Value | অবশ্যই return করতে হবে | Optional; OUT parameter ব্যবহার করা যায় |
| Execute | SELECT / expression | CALL procedure_name() |
| Use | Calculation / Query | Data manipulation / Business logic |
| Transaction control | সীমিত | BEGIN/COMMIT/ROLLBACK করতে পারে |
*/

/*
====================================================================
✔ END — PostgreSQL Stored Procedure (TS File Style)
====================================================================
*/

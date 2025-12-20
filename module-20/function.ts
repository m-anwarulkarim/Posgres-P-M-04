/*
====================================================================
🟦 PostgreSQL — FUNCTION (FULL CLEAR EXPLANATION)
====================================================================

PostgreSQL Function কী?
--------------------------------
Function হলো database-এর ভেতরে থাকা এমন একটি reusable program  
👉 যা input নিতে পারে (parameter)  
👉 কোনো কাজ করতে পারে (calculation, query, logic ইত্যাদি)  
👉 output return করতে পারে

অর্থাৎ:
✔ কোড বারবার না লিখে একবার define করে বারবার run করা  
✔ Logic database-এর ভিতরেই execute করা  
✔ Performance improve করা

Function তৈরি করতে সাধারণত এই keyword ব্যবহার হয়:
CREATE FUNCTION  
RETURNS  
LANGUAGE plpgsql  
BEGIN ... END;


====================================================================
🟩 কেন PostgreSQL Function ব্যবহার করা হয়?
====================================================================
- বারবার একই logic লিখতে না হয়  
- Business logic database এর ভিতরে রাখা যায়  
- Query আরও ছোট ও clean হয়  
- Calculation বা validation DB এর মধ্যেই করা যায়  
- অনেক সময় performance JOIN-এর চেয়ে দ্রুত হয়  


====================================================================
🔵 PostgreSQL Function এর Basic Structure
====================================================================
*/

`CREATE FUNCTION function_name(parameters)
RETURNS return_type AS $$
BEGIN
    -- function body (logic)
    RETURN something;
END;
$$ LANGUAGE plpgsql;`;

/*
====================================================================
1) Simple Function — কোনো parameter নেই, শুধু value return করবে
====================================================================
Explanation:
- শুধু একটি সংখ্যা return করবে
*/

`CREATE FUNCTION get_fixed_value()
RETURNS int AS $$
BEGIN
    RETURN 100;
END;
$$ LANGUAGE plpgsql;`;

/*
====================================================================
2) Function With Parameter
====================================================================
Explanation:
- parameter হিসেবে দুটি সংখ্যা নেবে
- যোগফল return করবে
*/

`CREATE FUNCTION add_numbers(a int, b int)
RETURNS int AS $$
BEGIN
    RETURN a + b;
END;
$$ LANGUAGE plpgsql;`;

/*
====================================================================
3) Function That Returns TEXT
====================================================================
Explanation:
- কোনো নাম নিলে সেটাকে 'Hello' সহ return করবে
*/

`CREATE FUNCTION greet(name text)
RETURNS text AS $$
BEGIN
    RETURN 'Hello, ' || name;
END;
$$ LANGUAGE plpgsql;`;

/*
====================================================================
4) Function Returning Table (Important)
====================================================================
Explanation:
- employee টেবিলের সব row return করবে
*/

`CREATE FUNCTION get_all_employees()
RETURNS TABLE(id int, name text, salary int) AS $$
BEGIN
    RETURN QUERY
    SELECT id, name, salary FROM employees;
END;
$$ LANGUAGE plpgsql;`;

/*
====================================================================
5) Function With Conditions (IF / ELSE)
====================================================================
Explanation:
- salary > 50000 হলে "High"
- না হলে "Normal"
*/

`CREATE FUNCTION salary_status(salary int)
RETURNS text AS $$
BEGIN
    IF salary > 50000 THEN
        RETURN 'High';
    ELSE
        RETURN 'Normal';
    END IF;
END;
$$ LANGUAGE plpgsql;`;

/*
====================================================================
6) FUNCTION Example With Business Logic
====================================================================
Explanation:
- basic salary নেবে
- 10% bonus যোগ করে final salary return করবে
*/

`CREATE FUNCTION calculate_salary(basic int)
RETURNS int AS $$
DECLARE
    bonus int;
BEGIN
    bonus := basic * 0.10;
    RETURN basic + bonus;
END;
$$ LANGUAGE plpgsql;`;

/*
====================================================================
🟧 Function Call কিভাবে করতে হয়?
====================================================================
*/

`SELECT get_fixed_value();`;
`SELECT add_numbers(10, 5);`;
`SELECT greet('Karim');`;
`SELECT * FROM get_all_employees();`;
`SELECT salary_status(60000);`;
`SELECT calculate_salary(30000);`;

/*
====================================================================
✔ END — PostgreSQL Function (Best Clean Explanation)
====================================================================
*/

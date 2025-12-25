/*
====================================================
🔹 GROUP BY WITH HAVING কী?
====================================================
GROUP BY row গুলোকে নির্দিষ্ট column অনুযায়ী group করে, আর HAVING ব্যবহার করে সেই grouped data এর উপর filter লাগানো হয়।

WHERE → row filter করে aggregation করার আগে
HAVING → group filter করে aggregation করার পরে

- WHERE ব্যবহার করা হয় individual row filter করার জন্য
- HAVING ব্যবহার করা হয় grouped data filter করার জন্য

Syntax:
*/
const groupByHavingSyntax = `
SELECT column1, aggregate_function(column2)
FROM table_name
WHERE condition
GROUP BY column1
HAVING aggregate_function(column2) condition;
`;

/*
====================================================
🔹 Example: Basic Usage
====================================================
ধরা যাক orders table:

id | customer | amount
1  | Anwar    | 100
2  | Karim    | 200
3  | Anwar    | 150
4  | Rahim    | 300
5  | Karim    | 100

Goal: প্রতিটি customer এর total order amount বের করো যাদের total_amount > 200
*/
const groupByHavingExample = `
SELECT customer, SUM(amount) AS total_amount
FROM orders
GROUP BY customer
HAVING SUM(amount) > 200;
`;

/*
Result:
customer | total_amount
Karim    | 300
Rahim    | 300

📌 দেখা যাচ্ছে, Anwar এর total_amount 250, HAVING condition apply করলে সে excluded হয়ে গেছে।
*/

/*
====================================================
🔹 Multiple Columns With HAVING
====================================================
ধরা যাক আমরা city অনুযায়ী গ্রুপ করতে চাই এবং শুধুমাত্র সেই group দেখাবো যাদের total_amount > 200
*/
const multipleColumnsHavingExample = `
SELECT customer, city, SUM(amount) AS total_amount
FROM orders
GROUP BY customer, city
HAVING SUM(amount) > 200;
`;

/*
ব্যাখ্যা:
- প্রথমে customer + city অনুযায়ী group হবে
- তারপর HAVING filter apply হবে
- শুধুমাত্র সেই group গুলো দেখাবে যাদের total_amount > 200
*/

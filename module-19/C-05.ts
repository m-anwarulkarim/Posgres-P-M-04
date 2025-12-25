/*
====================================================
1️⃣ GROUP BY কী?
====================================================
GROUP BY হলো SQL command যা row গুলোকে নির্দিষ্ট column অনুযায়ী গ্রুপ করে।

সাধারণত Aggregate Functions (SUM, COUNT, AVG, MAX, MIN) এর সাথে ব্যবহার হয়।

একই ধরনের data একত্রিত করে summary report তৈরি করতে সাহায্য করে।

Syntax:
*/
const groupBySyntax = `
SELECT column1, aggregate_function(column2)
FROM table_name
WHERE condition
GROUP BY column1;
`;

/*
====================================================
🔹 2️⃣ Basic Example
====================================================
ধরা যাক orders table:

id | customer | amount
1  | Anwar    | 100
2  | Karim    | 200
3  | Anwar    | 150
4  | Rahim    | 300
5  | Karim    | 100

Goal: প্রতিটি customer এর total order amount
*/
const basicGroupByExample = `
SELECT customer, SUM(amount) AS total_amount
FROM orders
GROUP BY customer;
`;

/*
Result:
customer | total_amount
Anwar    | 250
Karim    | 300
Rahim    | 300

📌 দেখা যাচ্ছে, একই customer এর order একত্রিত হয়ে total বের হয়েছে।
*/

/*
====================================================
🔹 3️⃣ Multiple Columns দিয়ে GROUP BY
====================================================
একাধিক column অনুযায়ী group করতে হলে:
*/
const multipleColumnsGroupBy = `
SELECT customer, city, SUM(amount) AS total_amount
FROM orders
GROUP BY customer, city;
`;

/*
ব্যাখ্যা:
- একসাথে customer + city অনুযায়ী group করা হবে
- একই customer কিন্তু বিভিন্ন city তে থাকলে আলাদা group হবে
*/

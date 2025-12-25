/*
============================================================
PostgreSQL SELECT – DISTINCT & WHERE Filtering (Bangla)
------------------------------------------------------------
এই অংশে আমরা দেখব:
1) DISTINCT অর্থাৎ duplicate row remove করা
2) WHERE অর্থাৎ  row filter করা
============================================================
*/

/*
------------------------------------------------------------
1) DISTINCT – Duplicate Row Remove করা
------------------------------------------------------------
Syntax:
*/
`SELECT DISTINCT column1, column2, ...
FROM table_name;`;
/*
ব্যাখ্যা:
- একই column value এর duplicate row output থেকে remove হয়
- একাধিক column দিতে পারি: combination অনুযায়ী unique row বের হয়

উদাহরণ Table: users
| id | name    | age |
|----|---------|-----|
| 1  | Anwarul | 25  |
| 2  | Karim   | 30  |
| 3  | Anwarul | 25  |
| 4  | Sumit   | 30  |
| 5  | Rafiq   | 28  |

Query:
*/
`SELECT DISTINCT age FROM users;
`;
/*
Result:
| age |
|-----|
| 25  |
| 30  |
| 28  |

Multiple column DISTINCT:
*/
`SELECT DISTINCT name, age FROM users;`;
/*
Result:
| name    | age |
|---------|-----|
| Anwarul | 25  |
| Karim   | 30  |
| Sumit   | 30  |
| Rafiq   | 28  |
*/

/*
------------------------------------------------------------
2) WHERE – Condition Apply করা (Row Filter)
------------------------------------------------------------
Syntax:
SELECT column1, column2, ...
FROM table_name
WHERE condition;

ব্যাখ্যা:
- Row filter করতে WHERE ব্যবহার হয়
- Logical operators: =, !=, <, >, <=, >=
- Multiple conditions: AND, OR, NOT

উদাহরণ Table: users
| id | name    | age |
|----|---------|-----|
| 1  | Anwarul | 25  |
| 2  | Karim   | 30  |
| 3  | Abdullah| 22  |
| 4  | Sumit   | 30  |
| 5  | Rafiq   | 28  |

Query Examples:

1) Single condition:
*/
`SELECT name, age FROM users WHERE age > 25;`;
/*
Result:
| name   | age |
|--------|-----|
| Karim  | 30  |
| Sumit  | 30  |
| Rafiq  | 28  |

2) Multiple condition (AND):
SELECT name, age FROM users WHERE age > 25 AND name LIKE 'S%';

Result:
| name | age |
|------|-----|
| Sumit| 30  |

3) Multiple condition (OR):
*/
("SELECT name, age FROM users WHERE age < 23 OR age = 30");

// Result:
// | name    | age |
// |---------|-----|
// | Karim   | 30  |
// | Abdullah| 22  |
// | Sumit   | 30  |

// 4) NOT condition:
`SELECT name, age FROM users WHERE NOT age = 30;`;

// Result:
// | name    | age |
// |---------|-----|
// | Anwarul | 25  |
// | Abdullah| 22  |
// | Rafiq   | 28  |
// */

/*
------------------------------------------------------------
3) DISTINCT + WHERE Combination
------------------------------------------------------------
উদাহরণ:
SELECT DISTINCT age FROM users WHERE age >= 25;

ব্যাখ্যা:
- WHERE filter করে row select হয়
- DISTINCT duplicate age remove করে

Result:
| age |
|-----|
| 25  |
| 28  |
| 30  |
*/

/*
------------------------------------------------------------
Quick Notes / Tips
------------------------------------------------------------
- DISTINCT → duplicate remove
- WHERE → condition filter
- Logical operators → =, !=, <, >, <=, >=
- AND, OR, NOT → complex condition
- DISTINCT + WHERE → filtered unique data
============================================================
*/

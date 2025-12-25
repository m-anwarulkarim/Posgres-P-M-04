/*
============================================================
PostgreSQL ALTER – Default Values & Column Constraints (Bangla)
------------------------------------------------------------
এই অংশে আমরা দেখব কিভাবে ALTER TABLE দিয়ে
1) Column এর Default Value set বা remove করা যায়
2) Column Constraints (NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK) manage করা যায়
============================================================
*/

/*
------------------------------------------------------------
1) DEFAULT Value – Column এর Default Value set / remove করা
------------------------------------------------------------
Syntax:
*/
`ALTER TABLE table_name
ALTER COLUMN column_name SET DEFAULT default_value`;
/*

ব্যাখ্যা:
- Column এ যদি কোন value insert না করা হয়, তাহলে default_value বসবে
- পুরোনো row এ কোন impact নেই, নতুন insert এ প্রভাব

Example Table: users
| id | name    | status |
|----|---------|--------|
| 1  | Anwarul | NULL   |
| 2  | Karim   | NULL   |

Query – Default value set করা:
*/
`ALTER TABLE users
ALTER COLUMN status SET DEFAULT 'active'`;
/*
Explanation:
- এখন থেকে status column এ যদি value না দেওয়া হয়, default হবে 'active'
- পুরোনো rows এর জন্য NULL থাকবে

Query – Default value remove করা:
*/
`ALTER TABLE users
ALTER COLUMN status DROP DEFAULT`;

/*
------------------------------------------------------------
2) Column Constraints – Basic Types
------------------------------------------------------------
Column constraint types:
- NOT NULL → value অবশ্যই থাকতে হবে
- UNIQUE   → duplicate value allowed নয়
- PRIMARY KEY → unique + not null
- FOREIGN KEY → অন্য table এর column reference
- CHECK → condition অনুযায়ী data validate

------------------------------------------------------------
2a) NOT NULL Constraint
------------------------------------------------------------
Syntax:
*/
`ALTER TABLE table_name
ALTER COLUMN column_name SET NOT NULL`;

// Example:
`ALTER TABLE users
ALTER COLUMN name SET NOT NULL`;
/*
Explanation:
- Column এ null value allow হবে না
- আগে যদি null data থাকে, প্রথমে UPDATE করতে হবে

Drop NOT NULL:
*/
`ALTER TABLE users
ALTER COLUMN name DROP NOT NULL`;
/*
------------------------------------------------------------
2b) UNIQUE Constraint
------------------------------------------------------------
Syntax:
ALTER TABLE table_name
ADD CONSTRAINT constraint_name UNIQUE (column1, column2, ...);

Example:
*/
`ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE (email)`;

/*
Explanation:
- Column/Column combination duplicate value blocked
- Constraint নাম দিতে হয়
- পূর্বে যদি duplicate data থাকে, তাহলে error হবে

Drop UNIQUE Constraint:
*/
`ALTER TABLE users
DROP CONSTRAINT unique_email`;
/*
------------------------------------------------------------
2c) PRIMARY KEY Constraint
------------------------------------------------------------
Syntax:
ALTER TABLE table_name
ADD CONSTRAINT constraint_name PRIMARY KEY (column1, column2, ...);

Example:
*/
`ALTER TABLE users
ADD CONSTRAINT users_pk PRIMARY KEY (id)`;
/*
Explanation:
- Unique + Not Null enforced
- Table এ একটিমাত্র primary key থাকতে পারে

Drop PRIMARY KEY Constraint:
*/
`ALTER TABLE users
DROP CONSTRAINT users_pk`;
/*
------------------------------------------------------------
2d) FOREIGN KEY Constraint
------------------------------------------------------------
Syntax:
ALTER TABLE table_name
ADD CONSTRAINT constraint_name
FOREIGN KEY (column_name) REFERENCES other_table(other_column);

Example:
*/
`ALTER TABLE orders
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) REFERENCES users(id) `;
/*
Explanation:
- orders.user_id অবশ্যই users.id এর value হবে
- Referential integrity maintain হয়
Drop FOREIGN KEY:
*/
`ALTER TABLE orders
DROP CONSTRAINT fk_user`;
/*
------------------------------------------------------------
2e) CHECK Constraint
------------------------------------------------------------
Syntax:
ALTER TABLE table_name
ADD CONSTRAINT constraint_name
CHECK (condition);

Example:
*/ `ALTER TABLE users
ADD CONSTRAINT age_check CHECK (age >= 18)`;
/*

Explanation:
- age column 18 এর কম value insert করা যাবে না
- Business rules enforce করা যায়

Drop CHECK:
*/
`ALTER TABLE users
DROP CONSTRAINT age_check`;

/*
------------------------------------------------------------
Quick Notes / Tips
------------------------------------------------------------
- DEFAULT → নতুন row insert এ auto value set হয়
- NOT NULL → Column empty হবে না
- UNIQUE → Duplicate value blocked
- PRIMARY KEY → Unique + Not Null
- FOREIGN KEY → Relation enforce করা
- CHECK → Condition validate
- ALTER TABLE + ALTER COLUMN/ADD CONSTRAINT + DROP CONSTRAINT → Main workflow
============================================================
*/

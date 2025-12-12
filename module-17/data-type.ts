/*
==================================================
PostgreSQL Data Types Cheat Sheet (Bangla)
==================================================

1️⃣ Boolean (বুলিয়ান)
- সত্য / মিথ্যা সংরক্ষণ
- Allowed Values: TRUE, FALSE, NULL
- উদাহরণ:
  is_active BOOLEAN DEFAULT TRUE;
- Use Case: Active/Inactive, Yes/No, On/Off flags

2️⃣ Integer / Numeric (সংখ্যা)
| Data Type        | Storage    | Range / Precision                 | Use Case                 |
|-----------------|-----------|----------------------------------|-------------------------|
| SMALLINT (int2)  | 2 bytes   | -32,768 to +32,767               | ছোট সংখ্যা (Age, Quantity) |
| INTEGER (int4)   | 4 bytes   | ~ -2B to +2B                     | সাধারণ পূর্ণসংখ্যা       |
| BIGINT (int8)    | 8 bytes   | ~ -9 quintillion to +9 quintillion | বড় সংখ্যা, IDs, Counters |
| REAL (float4)    | 4 bytes   | ~6 দশমিক precision               | Approximate value (sensor data) |
| DOUBLE PRECISION (float8) | 8 bytes | ~15 দশমিক precision          | High precision calculation |
| NUMERIC / DECIMAL | Variable  | User-defined precision (exact)   | Money, financial calculations |
| SERIAL           | 4 bytes   | 1 to 2,147,483,647               | Auto-increment IDs, primary keys |

3️⃣ Character / String (লেখা / টেক্সট)
| Type       | Description                          | Use Case               |
|-----------|--------------------------------------|-----------------------|
| CHAR(n)    | Fixed length string (n characters)  | Country code, fixed text |
| VARCHAR(n) | Variable length string (max n)      | Name, Address, Email  |
| TEXT       | Unlimited length text                | Description, notes    |

4️⃣ Date / Time (তারিখ / সময়)
| Type       | Description                          | Use Case              |
|-----------|--------------------------------------|----------------------|
| DATE       | YYYY-MM-DD                            | Birthdate, Join date  |
| TIME       | HH:MM:SS                              | Event time           |
| TIMESTAMP  | Date + Time                           | Created_at, Updated_at |
| INTERVAL   | Duration / time difference           | Time differences     |

5️⃣ UUID (Unique Identifier)
- Universally unique ID
- উদাহরণ:
  uuid_column UUID DEFAULT gen_random_uuid();
- Use Case: Unique record ID, distributed systems

6️⃣ JSON / JSONB
- Structured JSON data
- উদাহরণ:
  data JSON;  // normal
  data JSONB; // faster queries
- Use Case: API responses, config storage

7️⃣ Array (একাধিক মান)
- এক কলামে একাধিক value সংরক্ষণ
- উদাহরণ:
  phone_numbers TEXT[];
- Use Case: List of values in single column

8️⃣ Binary (বাইনারি)
- Binary file বা image সংরক্ষণ
- উদাহরণ:
  profile_image BYTEA;

9️⃣ XML
- XML data সংরক্ষণ
- উদাহরণ:
  config XML;

==================================================
💡 Tips:
- Boolean: 2-state value (TRUE/FALSE) জন্য ব্যবহার করুন
- Numeric: সংখ্যা সংরক্ষণ বা গণনার জন্য
- Character/Text: লেখা সংরক্ষণে
- Date/Time: তারিখ/সময় সংরক্ষণে
- UUID: unique record ID এর জন্য
- JSON/Array/XML: structured বা multiple data সংরক্ষণে
- Data type ঠিক রাখলে performance এবং data integrity ভালো থাকে
==================================================
*/

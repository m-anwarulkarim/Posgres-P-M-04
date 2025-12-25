/**
 * ============================================================
 * PostgreSQL Data Types Examples
 * ============================================================
 * এই ফাইলটিতে PostgreSQL এর কিছু গুরুত্বপূর্ণ Data Types
 * ব্যাখ্যা করা হয়েছে: Character Types, Date/Time Types, UUID Type
 *
 * এই example মূলত শিক্ষামূলক, SQL query structure বোঝানোর জন্য।
 */

/* ============================================================
   1️⃣ Character Types (Text/String Data)
   ------------------------------------------------------------
   PostgreSQL এ text বা string ডেটা রাখার জন্য তিনটি মূল টাইপ আছে:
   - CHAR(n)      → fixed-length string, n characters
   - VARCHAR(n)   → variable-length string, max n characters
   - TEXT         → unlimited length string
*/
const characterTypesExample = `
CREATE TABLE users (
    username VARCHAR(20),   -- variable-length string, max 20 chars
    full_name TEXT,         -- unlimited length string
    code CHAR(6)            -- fixed-length string, exactly 6 chars
);

INSERT INTO users (username, full_name, code)
VALUES ('anwar', 'Anwar Karim', 'A123');
`;

/* ============================================================
   2️⃣ Date/Time Types
   ------------------------------------------------------------
   PostgreSQL এ date/time সংক্রান্ত বিভিন্ন টাইপ আছে:
   - DATE                    → শুধুমাত্র date (YYYY-MM-DD)
   - TIME [WITHOUT TIME ZONE] → time (HH:MM:SS)
   - TIME WITH TIME ZONE      → time + timezone (HH:MM:SS+TZ)
   - TIMESTAMP [WITHOUT TIME ZONE] → date + time
   - TIMESTAMP WITH TIME ZONE (TIMESTAMPTZ) → date + time + timezone
   - INTERVAL                → time period (ex: '2 days 3 hours')
*/
const dateTypesExample = `
CREATE TABLE events (
    event_name VARCHAR(50),
    event_date DATE,                  -- কেবল date
    start_time TIME,                  -- কেবল time
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- auto timestamp
);

INSERT INTO events (event_name, event_date, start_time)
VALUES ('Workshop', '2025-12-20', '10:00:00');
`;

/* ============================================================
   3️⃣ UUID Type (Universally Unique Identifier)
   ------------------------------------------------------------
   - 128-bit globally unique identifier
   - Primary key হিসেবে ব্যবহার করা হয় large/distributed systems এ
   - PostgreSQL এ UUID functions ব্যবহার করতে হলে extension লাগবে
     (uuid-ossp)
*/
const uuidTypeExample = `
-- Extension install (একবারই করতে হয়)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),  -- auto generate unique UUID
    name VARCHAR(100)
);

INSERT INTO products (name) VALUES ('Laptop');
`;

/* ============================================================
   4️⃣ সারসংক্ষেপ
   ------------------------------------------------------------
   Character Types: CHAR, VARCHAR, TEXT
   Date/Time Types: DATE, TIME, TIMESTAMP, TIMESTAMPTZ, INTERVAL
   UUID Type: UUID
============================================================ */

/*
============================================================
PostgreSQL – LIKE vs ILIKE (Bangla)
------------------------------------------------------------
PostgreSQL এ String Matching এর জন্য আমরা প্রায়শই 
LIKE বা ILIKE ব্যবহার করি। এগুলোর পার্থক্য ও ব্যবহার নিচে ব্যাখ্যা করা হলো।

1) LIKE:
---------
- এটা Case-Sensitive।
  অর্থাৎ, বড় অক্ষর এবং ছোট অক্ষর আলাদা মনে করা হয়।
- সাধারণত pattern matching এর জন্য ব্যবহার হয়।
- Pattern এ আমরা দুইটি wildcard ব্যবহার করতে পারি:
    1) %  ব্যবহার করা হয় zero বা more character এর জন্য
    2) _  ব্যবহার করা হয় একটি character এর জন্য

উদাহরণ:
*/
`SELECT * FROM users WHERE name LIKE 'An%'`;
/*
- এর মানে হলো, name "An" দিয়ে শুরু হওয়া সব record পাবে
- "Anwar" পাবে, কিন্তু "anwar" পাবেনা (কারণ ছোট a case mismatch)
*/
`SELECT * FROM users WHERE name LIKE '%war'`;
/*
- name এর শেষের অংশ "war" হলে match হবে
- "Anwar" হবে match, "anWar" হবে না

2) ILIKE:
----------
- এটা Case-Insensitive।
  অর্থাৎ, বড় অক্ষর ও ছোট অক্ষরের পার্থক্য থাকে না।
- Syntax ও wildcard একই, কিন্তু case-ignore করে।
- খুব কাজে লাগে যখন আমরা user input অনুসারে search করতে চাই, 
  কিন্তু case match ঠিক গুরুত্বপূর্ণ নয়।

উদাহরণ:
*/
`SELECT * FROM users WHERE name ILIKE 'An%'`;
// - "Anwar", "anwar", "ANWAR" সব match হবে

`SELECT * FROM users WHERE name ILIKE '%war'`;
// - "Anwar", "anWar", "anWAR" সব match হবে

// 3) মূল পার্থক্য:
// ----------------
// - LIKE = Case-Sensitive
// - ILIKE = Case-Insensitive
/*
4) Notes / ব্যবহার টিপস:
------------------------
- ILIKE PostgreSQL-specific, অন্য RDBMS এ নাও থাকতে পারে।
- Pattern matching এ % বা _ ব্যবহার করলে search flexible হয়।
- ছোট table এ LIKE দ্রুত কাজ করে, বড় table এ performance 
  impact হতে পারে, তখন index বা full-text search ব্যবহার করা যায়।

============================================================
*/

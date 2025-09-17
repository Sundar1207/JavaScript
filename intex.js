// Current date & time
let now = new Date();
console.log(now);   // e.g., 2025-09-17T07:20:30.123Z

// Specific date
let d1 = new Date("2025-09-17");
console.log(d1);   // Wed Sep 17 2025 ...

// Year, Month, Date, etc.
console.log(now.getFullYear());  // 2025
console.log(now.getMonth());     // 0-11 (0=Jan, 8=Sep)
console.log(now.getDate());      // 17
console.log(now.getDay());       // 0-6 (0=Sunday)
console.log(now.getHours());     // 0-23
console.log(now.getMinutes());   // 0-59
console.log(now.getSeconds());   // 0-59

// Set date values
now.setFullYear(2030);
console.log(now.getFullYear());  // 2030

let arr = [1, 2, 3];

arr.forEach(x => console.log(x));  // 1 2 3
arr.map(x => x * 2);  // [2, 4, 6]
arr.filter(x => x > 1); // [2, 3]
arr.reduce((a, b) => a + b, 0); // 6
arr.some(x => x > 2); // true
arr.every(x => x > 0); // true

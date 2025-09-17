let arr = [3, 1, 2];

arr.sort();        // [1, 2, 3] (string sort by default)
arr.reverse();     // [3, 2, 1]
arr.sort((a,b) => b - a); // [3, 2, 1] numeric sort

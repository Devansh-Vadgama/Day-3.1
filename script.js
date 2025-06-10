// 1. Initialize the array
let marks = [85, 62, 90, 78, 88, 95, 70, 60, 100, 82];

// 2. Display the original array
console.log("Original Marks:", marks);

// 3. Calculations
let totalStudents = marks.length;
let highestMark = Math.max(...marks);
let lowestMark = Math.min(...marks);
let sum = marks.reduce((total, mark) => total + mark, 0);
let average = (sum / totalStudents).toFixed(2);

console.log("\n--- Statistics ---");
console.log("Total number of students:", totalStudents);
console.log("Highest mark:", highestMark);
console.log("Lowest mark:", lowestMark);
console.log("Average mark:", average);

// 4. Sort the array
let ascending = [...marks].sort((a, b) => a - b);
let descending = [...marks].sort((a, b) => b - a);

console.log("\n--- Sorted Marks ---");
console.log("Ascending:", ascending);
console.log("Descending:", descending);

// 5. Add a new mark (76) at the end and at the beginning
marks.push(76);        // Add at the end
marks.unshift(76);     // Add at the beginning

console.log("\nAfter adding 76 at start and end:", marks);

// 6. Remove the first and last mark
marks.shift();         // Remove the first
marks.pop();           // Remove the last

console.log("After removing first and last mark:", marks);

// 7. Check if 90 exists
let has90 = marks.includes(90);
console.log("\nDoes the mark 90 exist in the array?", has90 ? "Yes" : "No");

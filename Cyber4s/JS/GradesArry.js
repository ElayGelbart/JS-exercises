const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
let secondHalfGrades = grades.slice(Math.floor((grades.length)/2));
secondHalfGrades.sort(function(a, b){return a-b});
grades.sort(function(a, b){return a-b});
console.log(grades);
let lowestGrade = grades[0]
let highestGrade = grades[grades.length-1];
let differenceGrade = highestGrade - lowestGrade;
let middleGrade = grades[Math.floor((grades.length-1)/2)];
console.log('Range: ' + differenceGrade);
console.log('Median ' + middleGrade);
console.log('Half Range: ' + (secondHalfGrades[secondHalfGrades.length-1]-secondHalfGrades[0]));


const a = 3; b = -2; c = -3;
let solutionA = solutionB = 0
solutionA = (-b + Math.sqrt(b**2-4*a*c))/(2*a);
solutionB = (-b - Math.sqrt(b**2-4*a*c))/(2*a);
console.log(solutionA, solutionB);
const num = 555;
let sum =0;
let firstD = Math.floor(num/100);
let secondD = Math.floor(num/10-firstD*10);
let thirdD = Math.floor(num-firstD*100-secondD*10)
sum = firstD + secondD + thirdD;
console.log(sum);
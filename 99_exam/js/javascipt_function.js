// 1615
// const num = prompt("1 10").split(" ").map(Number);

// function isSelfNumber(n) {
//     let sum = n;
//     while (n > 0) {
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return sum;
// }

// let result = 0;

// for (let i = num[0]; i <= num[1]; i++) {
//     let selfNumber = true;
//     for (let j = num[0]; j <= num[1]; j++) {
//         if (isSelfNumber(j) === i) {
//             selfNumber = false;
//             break;
//         }
//     }
//     if (selfNumber) {
//         result += i;
//     }
// }

// console.log(result);

// 1620
// const num = prompt("1234567");
// let sumValue = 0;
// let result = sumValue;
// function sum (a) {
//     for(let i = 0; i < a.length; i++) {
//         sumValue += Number(a[i]);
//     }
// }
// sum(num);
// while (sumValue >= 10) {
//     const result = sumValue.toString();
//     sumValue = 0;
//     sum(result);
// }
// console.log(sumValue);
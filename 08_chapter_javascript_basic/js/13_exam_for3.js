// 문제 1)
// for 문 안에 if문으로 짝수 체크해서 더하기
// 1-100까지 합계 : 짝수의 합계
// let sum = 0;
// for(i = 1; i <=100; i++) {
//     if(i % 2 === 0) {
//         sum += i
//     }
// } document.querySelector("#output").innerHTML = sum


// 문제 2)
// 1-100까지의 수 중에 3의 배수의 합

// let sum1 = 0;
// for(i = 1; i <=100; i++) {
//     if(i % 3 === 0) {
//         sum1 += i
//     }
// } document.querySelector("#output").innerHTML = sum1

// 문제 3)
// 1부터 n까지의 합 구하기

// let n = Number(prompt("숫자"));
// let sum3 = 0;
// for(i = 1; i <= n; i++) {
//     sum3 += i;
// } document.querySelector("#output").innerHTML = sum3
    
// 문제 4)
// 10개의 수 중에서 5의 배수가 있으면 그 중 하나만 출력, 없다면 0 출력

// let num = prompt("10개 입력").split(" ").map(Number);
// let result = 0;
// let count = 0;
// for(i = 0; i <= num.length; i++) {
//     if(num[i] % 5 == 0) {
//         result = num[i];
//         document.querySelector("#output").innerHTML = result;
//         count += 1;
//         break;
//     } else {
//         result = 0;
//         document.querySelector("#output").innerHTML = result;
//     }
// }
    

// 문제 5)
// 1부터 n까지 중 짝수의 합 구하기

// let n = Number(prompt("n 입력"));
// let sum = 0;
// for(i = 1; i <= n; i++) {
//     if(i % 2 === 0) {
//         sum += i;
//         document.querySelector("#output").innerHTML = sum;
//     }
// }

// 문제 6)
// 두 수 사이의 홀수 출력

// let num1 = Number(prompt("num1"));
// let num2 = Number(prompt("num2"));
// let result = " ";
// let min = Math.min(num1, num2);
// let max = Math.max(num1, num2);

// for(i = min; i <= max; i++) {
//     if(i % 2 === 1){
//         result += i + " ";
//         document.querySelector("#output").innerHTML = result;
//     }
// }


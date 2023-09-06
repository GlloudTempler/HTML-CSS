
// 연습문제 1
// 함수를 만들어서 출력
// 입력 10
// 출력 20

// function multiply(num) {
//     return num*2;
// }
// let a = Number(prompt("10"));
// console.log(multiply(a));

// 연습문제 2
// 함수를 만들어서 출력
// 짝수면 "even", 홀수면 "odd"

// function choice(num) {
//     if((num % 2) == 0) {
//         console.log("even")
//     }else if((num%2) == 1){
//         console.log("odd")
//     }
// }

// let a = Number(prompt("2"));
// choice(a);

// 함수를 이용해서 아래 작성
// 1~10까지의 합을 출력

// function sum(num) {
//     let result = 0;
//     for(i=1; i <=num; i++) {
//         result += i;
//     }
//     console.log(result);
// }

// let a = Number(prompt("10"));
// sum(a);

// 4) 함수로 만들어서 풀기
// 최소값 구하기
// function minNum(num1, num2, num3) {
//     let a = Math.min(num1, num2, num3);
//     console.log(a);
// }

// let b = Number(prompt("num1"));
// let c = Number(prompt("num2"));
// let d = Number(prompt("num3"));
// minNum(b,c,d);

// 5) 함수로 만들어서 풀기
// 5의 배수 참/거짓구하기

// function num5(num) {
//     if(num % 5 == 0) {
//         console.log("5의 배수입니다.")
//     }else {
//         console.log("5의 배수가 아닙니다.")
//     }
// }

// let a = Number(prompt("5"));
// num5(a);

// 6) 함수를 이용하여 코딩
// 3가지 숫자를 입력받아 합계와 평균 구하기

// function answer(num1,num2,num3) {
//     let sum = num1 + num2 + num3;
//     let average = sum / 3;
//     console.log(sum);
//     console.log(average);
// }

// let a = prompt("a b c").split(" ");
// answer(Number(a[0]), Number(a[1]), Number(a[2]));

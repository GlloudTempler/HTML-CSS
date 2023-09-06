// 문제1)
// 부호를 바꾸어 출력한다.
// 입력 : -1
// 입력 : 1

// let num = prompt("-1");
// console.log(-num);

// 문제2)
// 입력 : -2147483649
// 출력 : -2147483649

// let num2 = prompt("-2147483649");
// console.log(num2);

// 문제3)
// 정수 2개 입력, a 를 b로 나눈 몫을 출력
// 입력1(a) : 1
// 입력2(b) : 3
// 출력 : 0
// 힌트 : parseInt(실수) - 정수, parseInt(문자열) - 정수
// let a = prompt("1");
// let b = prompt("3");
// console.log(parseInt(a/b));

// 문제4)
// 정수 2개 입력
// a를 b로 나눈 나머지
// 입력1 : 10
// 입력2 : 3
// 출력 : 1
// let a = prompt("1");
// let b = prompt("3");

// console.log(a % b);

// 문제5)
// 입력된 정수에 1을 더해 출력
// 입력 : 2147483647
// 출력 : 2147483648

// let a = prompt("2147483647");
// console.log(++a);


// 문제 6)
// 정수 2개
// 첫 줄 합
//  둘째 줄 차이
// 셋째 줄 곱
// 넷째 줄 몫
// 다섯째 줄 나머지
// 입력 1 : 10
// 입력 2 : 13

// let a = Number(prompt("10"));
// let b = Number(prompt("3"));

// console.log((a + b) + '\n' + (a - b) + '\n' + (a * b) + '\n' + parseInt(a / b) + '\n' + (a % b));

// 문제 7)
// 정수 3개 입력받아 합과 평균 출력하기
// 입력 1 : 1
// 입력 2 : 2
// 입력 3 : 3
// 출력 : 6 , 2

// let num1 = Number(prompt("1"));
// let num2 = Number(prompt("2"));
// let num3 = Number(prompt("3"));
// let sum = Number(num1 + num2 + num3);

// console.log(sum + '\n' + sum/3);


// 문제8)
// 정수 1개 입력받아 2배 곱하기
// 입력 : 1024

// let num = Number(prompt(1024));
// console.log(num*2);

// 문제 9)
// 두 정수 입력받아 비교하기
// a가 b보다 큰 경우 1, 그렇지 않으면 0
// 입력 1 : 9
// 입력 2 : 1

// let a = Number(prompt("9"));
// let b = Number(prompt("1"));

// if(a > b) {
//     console.log(1);
// } else if(a<b){
//     console.log(0);
// }

// 문제 9)
// 두 정수 입력받아 비교하기2
// a와 b의 값이 같은 경우 1, 아닌 경우 0
// 입력1 :0 입력2 : 0

// let a = Number(prompt("0"));
// let b = Number(prompt("0"));

// if (a==b) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// 문제 10)
// 입력된 값이 0이면 1, 1이면 0을 출력
// 단, 0또는 1만 입력
// while(true){
//     let c = Number(prompt("0또는 1만 입력"));
//     if(c == 0) {
//         console.log(1);
//         break;
//     } else if(c == 1) {
//         console.log(0);
//         break;
//     } else {
//         console.log("잘못입력하셨네요.");
//     }
// }

// 문제 11)
// 정수 3개 입력받아 가장 작은 수 출력
// 가장 작은 값출력
// 입력1 : 3
// 입력2 : -1
// 입력3 : 5
// 입력4 : -1
// Math.min(값1, 값2....) : 최소값, Math.max(값1, 값2... : 최대값

// let num1 = Number(prompt("3"));
// let num2 = Number(prompt("-1"));
// let num3 = Number(prompt("5"));
// let num4 = Number(prompt("-1"));

// console.log(Math.min(num1, num2, num3, num4));
// console.log(Math.max(num1, num2, num3, num4));

// 문제 12)
// 정수 3개 입력받아 짝수만 출력
// 입력1 : 1
// 입력2 : 2
// 입력3 : 4

// let arr = prompt("1 2 4").split(" ");
// let num2 = Number(prompt("2"));
// let num3 = Number(prompt("4"));
// for(i = 0; i <= arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         console.log(arr[i] + '\n');
//     }
// }


// 문제 13)
// 정수 3개 입력받아 짝/홀 출력
// let a = Number(prompt("1"));
// if(a % 2 == 1) {
//     console.log('odd');
// } else if (a % 2 == 0) {
//     console.log('even');
// }
// let b = Number(prompt("2"));
// if(b % 2 == 1) {
//     console.log('odd');
// } else if (b % 2 == 0) {
//     console.log('even');
// }
// let c = Number(prompt("8"));
// if(c % 2 == 1) {
//     console.log('odd');
// } else if (c % 2 == 0) {
//     console.log('even');
// }

// 문제 14)
// 점수를 입력받아 평가 출력
// 평가 기준
// 점수범위
// 90 - 100 : A
// 70 - 89 : B
// 40 - 69 : C
// 0 - 39 : D

// let score = Number(prompt("점수"));
// let grade = " ";
// if(90 <= score && score <= 100) {
//     grade = "A";
// } else if(70 <= score && score <= 89) {
//     grade = "B";
// } else if(40 <= score && score <= 69) {
//     grade = "C";
// } else if(20 <= score && score <= 39) {
//     grade = "D"
// } else if(0<= score && score <= 19) {
//     grade = "F"
// } else {
//     console.log("잘못입력");
// }

// console.log(grade);

// 문제 15)
// 평가 출력
// 평가 : 내용
// A : Best
// B : Good
// c : Run
// D : Slowly
// 나머지 what~


// if(grade == "A") {
//     console.log('Best!!');
// } else if(grade == "B") {
//     console.log('Good!');
// } else if(grade == "C") {
//     console.log('Run!!!');
// } else if(grade == "D") {
//     console.log('Slowly');
// } else {
//     console.log('What!@~!');
// }

// 문제 16)
// 양수이면 "양수", 음수이면 "음수", 0이면 0을 출력

// let num = Number(prompt("수 입력"));

// if(num > 0) {
//     console.log("양수");
// }else if(num < 0) {
//     console.log("음수");
// }else if(num == 0) {
//     console.log("0");
// }

// 문제 17)
// 비만도 측정 0
// BMI 수치 비만 판정
//  ~10이하 정상
// 11 ~ 20과체중
// 20초과 비만
// 비만도를 입력받아 위의 문자열 출력

// let BMI = Number(prompt("BMI지수(0-)"));

// if(BMI <= 10 && BMi > 0) {
//     console.log("정상");
// }else if(BMI <= 20 && BMI >= 11) {
//     console.log("과체중");
// }else if(BMI > 20) {
//     console.log("비만");
// }else {
//     console.log("잘못입력");
// }
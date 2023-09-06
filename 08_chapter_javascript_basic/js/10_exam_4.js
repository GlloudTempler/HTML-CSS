// 문제 1)
// for문 사용
// 1부터 100까지 출력

// for(i = 1; i <=100; i++) {
//     console.log(i);
// }

// 문제 2)
// 1부터 n까지 출력
// let a = Number(prompt("숫자입력"));
// for(l = 1; l <= a; l++) {
//     console.log(l);
// }

// 문제 3)
// a부터 b까지 출력

// let num1 = Number(prompt("num1"));
// let num2 = Number(prompt("num2"));

// if(num1 < num2) {
//     for(q = num1; q <= num2; q++) {
//         console.log(q);
//     }
// }else if(num1 > num2) {
//     for(q = num2; q <= num1; q++) {
//         console.log(q);
//     }
// }else if(num1 === num2) {
//     console.log(num1);
// }

// 최대값(Math.max()), 최소값(Math.min())
// let maxNum = Math.max(num1,num2);
// let minNum = Math.min(num1,num2);

// 문자열 붙이기 변수
// let result = " ";

// for(시작값, 시작값<=끝값 증감식) {}
// for(let i=minNum; i <=maxNum; i++) {
    // 문자열 붙이기 : 문자열 + 숫자 => 문자열(자동 자료형 변환)
//     result = result + i + " ";
// }

// alert(result);

// 문제 4)
// *출력하기
// 입력 5
// 출력 *****

// let a = Number(prompt("반복할 수 입력"));
// let str = '';
// for(i = 1; i <= a; i++) {
//     str += "*";
// }
// console.log(str);

// 문제 5)
// 1-10까지의 합계를 구해서 아래와 같이 화면에 출력
// "1~10까지의 합계 : 55"

// let result = 0;
// for(i = 1; i <= 10; i++) {
//     result += i;
// }
// console.log("1부터 10까지의 합계는 " + result);

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }

// const result = `1 ~ 10까지의 합계 : ${sum}`;
// console.log(result);
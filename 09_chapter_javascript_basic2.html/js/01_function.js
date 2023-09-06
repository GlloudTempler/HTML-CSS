// 함수(메서드) : js 내장함수(js에서 미리 만들어 놓은 함수)
//                  ex) .split() , .toFixed() 등
// 함수 사용 이유 : 코드 재사용(코딩 생산성 증가) , 코드 효율성 증가(코딩 라인이 짧아짐)

//TODO 함수 만드는 법(함수 정의)
// 1) 1st 형태
// 사용법 :
// .1 함수 정의 : 한번만 정의(함수명은 유일하게)
// function 함수명() {
//     실행문;
// }
// .2 함수 사용(호출)
//    함수명(); //  함수 사용(호출)

// 예제) 안녕하세요 출력하는 함수를 정의하고 사용
// function hello() {
//     alert("안녕하세요");
// }
// 호출
// hello();
// hello();
// hello();

// 예제1)
// "Hello World" 출력하는 함수를 작성하고 함수를 사용(호출)
// function hello() {
//     console.log("Hello World");
// }
// hello();

// 만약 hello();에 다른 값을 출력하고 싶으면 새로 함수를 정의 해야함
// 코드 수정 지양
// 유연한 코드 작성 필요

// TODO 2) 함수 2nd 형태, 1st보다 효율적
// 사용법 : 
// 1) 함수 정의
// function 함수명(매개변수) {
//          실행문 + 매개변수;
// }

// 2) 함수 사용(호출)
// 함수명(값;) //매개변수에 값을 넣으면서 사용

// 예제2) 매개변수를 이용해서 함수를 정의하고 "안녕하세요 출력"

// function hello(params) {
//     console.log(params);
// }

// hello("안녕하세요");

// TODO 3)함수 3rd형태
// 변수의 허용범위(스코프) : 항상 중괄호 안에서만 의미가 있음
// 사용법 : 1) 함수 정의
// function 함수명(매개변수,...) {
//      let 결과 = 실행문(매개변수);
//      return 결과; // 결과 내보내기(함수 밖으로 - 중괄호 밖에서도 사용가능)
// }
// 2) 사용
// let 결과(변수) = 함수명(매개변수);

// 예제 3) 매개변수와 return이 있는 함수를 정의해서 hello worlld를 출력
// function hello(str) {
//     return str + " wolrd";
// }
// let result = hello("hello");
// console.log(result);

// 예제 4) 어떤 수를 매개변수로 받아서 제곱을 구하는 함수를 작성하시오
// 입력 : f(3)
// 출력 : 9

// function f(num1) {
//     return num1*num1;
// }
// let i = Number(prompt("숫자"));
// result = f(i);
// console.log(result);

// 예제 5) 원의 넓이를 구하기
// 원의 넓이 공식 : 반지름 * 반지름 * 3.14
// 입력 : 5
// 출력 : 78.5
// function circle(radius) {
//     return radius*radius*3.14
// }

// let r = Number(prompt("5"));
// let result = circle(r);
// console.log(result);

// 예제 6) 원의 둘레 구하기 함수
// 원의 둘레 : 반지름 * 2 * 3.14

// function circle(radius) {
//     return radius*2*3.14
// }

// let r = Number(prompt("6"));
// let result = circle(r).toFixed(2);
// console.log(result);

// 예제 7) 시작수, 끝수가 주어지면 시작수~끝수까지의 합계를 구하는 함수

// function sum(num1, num2) {
//     let min = Math.min(num1,num2);
//     let max = Math.max(num1,num2);
//     let result = 0;
//     for(i = min; i <=max; i++) {
//         result +=i;
//     }
//     return result;
// }

// let a = Number(prompt("100"));
// let b = Number(prompt("300"));

// console.log(sum(a,b));
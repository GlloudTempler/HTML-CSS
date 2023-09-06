// 조건문 연습
// 1) 입력값이 y이면 글쓰기 라고 출력
//    y가 아니면 글수정이라고 출력
// 새로운 출력방법(3) : document.querySelector(#output).innerHTML = "값";
// 값이 웹브라우저에 출력

// let a = prompt("글?");
// if(a == "y" || a == "Y") {
//     document.querySelector("#output").innerHTML = "글쓰기";    
// }else {
//     document.querySelector("#output").innerHTML = "글수정";
// }

// 문제 2)
// 입력값이 짝수면 짝수
// 홀수면 홀수
// 웹브라우저 출력

// let num = Number(prompt("숫자"));
// if(num % 2 == 0) {
//     document.querySelector("#output").innerHTML = "짝수"
// }else if(num % 2 == 1) {
//     document.querySelector("#output").innerHTML = "홀수"
// }

// 문제 3)
// 입력값이 3~5가 들어오면 봄
// 6~8이 들어오면 여름
// 9~11이 들어오면 가을
// 12~2가 들어오면 겨울

// let month = Number(prompt("몇 월입니까?"));
// if(month > 12){
//     document.querySelector("#output").innerHTML = "잘못입력된 값입니다."
// }else {
//     if(month >= 3 && month <= 5) {
//         document.querySelector("#output").innerHTML = "봄"
//     }else if (month >= 6 && month <= 8) {
//         document.querySelector("#output").innerHTML = "여름"
//     }else if (month >= 9 && month <= 11) {
//         document.querySelector("#output").innerHTML = "가을"
//     }else if (month >= 12 || month <= 2) {
//         document.querySelector("#output").innerHTML = "겨울"
//     }    
// }

// 문제 4)
// 입력을 하나 받아 admin이 맞으면 "해당콘텐츠 이용가능"
// 아니면 다시 입력값을 숫자로 하나 받아 입력값이 1~7사이에 있으면
// 해당 콘텐츠 이용 가능 이라고 출력
// 아니면 해당 콘텐츠에 접근할 수 없습니다. 출력

// let str = prompt("admin");
// if(str == "admin") {
//     document.querySelector("#output").innerHTML = "해당 콘텐츠 이용가능"
// }else {
//     let num1 = Number(prompt("1~7"));
//     if(num1 >= 1 && num1 <= 7) {
//         document.querySelector("#output").innerHTML = "해당 콘텐츠 이용가능"
//     }else {
//         document.querySelector("#output").innerHTML = "해당 콘텐츠 이용불가"
//     }
// }

// 문제 5)
// X가 1일경우 "x의 값은 1입니다."
// x가 2일 경우 "x의 값은 2입니다."
// x가 1도 2도 아닐 경우 "x의 값은 1또는 2가 아닙니다."
// let x = Number(prompt("x의 값을 입력"));

// if(x == 1 || x == 2) {
//     const result = `x의 값은 ${x}`;
//     document.querySelector("#output").innerHTML = result
// } else {
//     document.querySelector("#output").innerHTML = "x의 값은 1또는 2가 아닙니다."
// }

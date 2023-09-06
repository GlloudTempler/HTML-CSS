// 조건문 (if문 === switch문)
// 문제 5) 를 switch문으로 변경
// X가 1일경우 "x의 값은 1입니다."
// x가 2일 경우 "x의 값은 2입니다."
// x가 1도 2도 아닐 경우 "x의 값은 1또는 2가 아닙니다."

// let x = Number(prompt("x의 값을 입력"));
// if(x == 1 || x == 2) {
//     const result = `x의 값은 ${x}`;
//    console.log(result);
// } else {
//     console.log("x의 값은 1또는 2가 아닙니다.");
// }

// TODO switch문으로 바꾸기
// 조건변수와 값을 비교해서 각각의 case에 따라 실행
// switch (조건변수) {
//     case 값 :
//         실행문;
//         break;
//     default : 
//         실행문;
// }
// let x = Number(prompt("x의 값을 입력"));
// // 조건문 switch
// switch(x) {
//     case 1 : 
//         const result = `x의 값은 ${x}`;    
//         console.log(result);
//         break;
//     case 2 : 
//         const result1 = `x의 값은 ${x}`;    
//         console.log(result1);
//         break;
//     default :
//         console.log("x의 값은 1또는 2가 아닙니다.");    
// }  

// ! TODO 3항 연산자(조건문) _ react에서 자주 사용*********
// 사용법 : let 변수명 = (조건식)? 실행문 : 실행문2;
// 조건식을 판별하여 참이면 실행문1 실행, 거짓이면 실행문2 실행
// 입력값을 받아서 값이 admin이면 있음 실행, 아니면 없음
let user = prompt("admin")
let result = (user == "admin")? "있음" : "없음";
console.log(result);

// 반복문 : for === while

// 안녕하세요 5번 출력
// TODO for 문
// 사용법 : for(초기값; 조건식; 증감식){}
// for(let i = 1; i <=5; i++) {
//     console.log("안녕하세요")
// }

// TODO while문 변경
// let i = 1;
// 사용법 : 초기값; while(조건식) {반복문; 증감식;}
// while(i<=5){
//     console.log("안녕하세요")
//     i++;
// }

// TODO do ~ while문 (반복문 #3)
// TODO 특징 : 조건식이 거짓이라도 1번은 실행

// let i = 1;

// do{
//     console.log("안녕하세요");
//     i++
// } while(i<=5);

// TODO 반복문 특수형태 : 무한루프(무한히 반복)

// while(true) {
//     console.log("안녕하세요");
// }

// for(;true;) {
//     console.log("안녕하세요");
// }

// 입력값이 숫자 5가 될 때 까지 무한히 화면에 숫자 출력

// while(true) {
//     let a = Number(prompt("숫자"))
//     if(a === 5) {
//         break;
//     } else{
//         continue;
//     }
// }

// 연습문제1)
// 숫자를 입력하면 이미지를 화면에 그 숫자만큼 반복해서 출력
// 힌트 : document.querySelector("#output").innerHTML = "<img src = '이미지경로/'";

let a = Number(prompt("반복할 숫자"));
let result = "";
for(let i=1; i<=a; i++) {
    result = result + "<img scr='./img/fish.jpg' />";
}
document.querySelector("#output").innerHTML = result;
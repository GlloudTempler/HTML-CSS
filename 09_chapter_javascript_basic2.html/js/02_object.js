// 객체(object) : 실생활에서 보이는 모든 것
//           ex) : 사람, 사물 등
// 객체의 요소 :
// 1) 속성(특징을 나타냄, 90%) 2) 함수(행동, 동작)
// 비교) css사용법, 객체 사용법 유사
// 선택자 {
//  속성:값;
//  속성2:값2;
//  ....
// }

// TODO 객체 사용법
// let 변수명 = {
//    속성 : 값,
//    속성 : 값2.
//    ....
// }

// 예제) 안지영이라는 사람의 속성(특징)을 나열하고 객체 생성

// let member = {
//     name: "안지영",
//     email: "ahnlab@naver.com",
//     phone: "010-0000-0000",
//     age: 24,
//     job: true
// }

// 객체 속성 출력
// 객체명.속성명 => 값출력
// console.log(member.name);
// console.log(member.email);
// console.log(member.phone);
// console.log(member.age);
// console.log(member.job);

// 연습문제 1)
//  객체 정의 하고 객체 출력하기
// 고양이에 대한 특징을 alert 을 이용해서 화면에 출력하세요
// 속성 :
//     이름: 나비
//     색깔: 황토색
//     무게: 10kg
//  코드번호: 1234
//  전화번호: 010-1234-5678

// let cat = {
//     name: "navi",
//     color: "brown",
//     weight: "10kg",
//     codeNumber: "1234",
//     phone: "010-1234-5678"
// }
// alert("이름: " + cat.name + "\n" + "색깔: " + cat.color + "\n" + "무게: " + cat.weight + "코드번호: "
// + cat.codeNumber + "\n" + "전화번호: " + cat.phone);

// 연습문제 2)
// 토끼 객체를 만들어서 화면에 출력해 보세요
// 속성 :
//    이름 : 삼식이
//    색깔 : 갈색
//    무게 : 5kg
//  코드번호: 1234 
// 객체 정의
// let rabbit = {
//     name:"삼식이",
//     color: "갈색",
//     weight: "5kg",
//     code: 1234     // 자료형 모두 사용가능(문자열, 숫자, 참/거짓 등)
// }
// 객체 속성 출력
// 사용법 : 객체명.속성명
// console.log("name", rabbit.name);
// console.log("color", rabbit.color);
// console.log("weight", rabbit.weight);
// console.log("code", rabbit.code);

// 자료형 : 문자열(String), 숫자(Number), 참/거짓(bool/boolean), 배열(객체), null, undefined, 참고)Symbol
// TODO null 자료형 : 변수는 있으나 공간이 비어있는것.
// 예제) 변수에 null 넣기
// let char1 = null; // 사용법, 과거코딩(변수초기화 많이 사용)
// 현재는 null초기화 권장하지 않음

// 메모리 : 프로그램 실행 => 컴퓨터 메모리에 올라감

// TODO undifined 자료형(js에만 있음)
// 객체의 속성명이 정의되지 않은 상태

// let dog = {
//     name: "삼순",
//     age: "2"
// }
// console.log(dog.name);
// console.log(dog.age);
// console.log(dog.code);

// 문제풀이
// 1)증감연산자를 활용해서 화면 출력하세요
// 출력방법 : alert(), console.log()
// 입력 : 없음
// 출력 : 10
// 출력 : 11
// 출력 : 12

// let num = 10;
// alert(num);
// num++;
// alert(num);
// num++;
// alert(num);
// for (i = 10; i < 13; ++i ){
//     alert(i);
// }

// 2) 공식 : price(개당가격) = 1500;, num(구매 개수) = 3, pay(지불 금액) = 10000;
// 잔돈계산 공식 == pay - price * num;
// 출력 : - 개당 가격 : 1500원
//        - 구매 개수 3개
//        - 지불 금액 : 10000원
//        - 거스름돈은 5500원
// let price = 1500;
// let num = 3;
// let pay = 10000;
// let change = pay - (price * num);

// alert("개당 가격은 " + price + "원 입니다.")
// alert("구매 개수는 " + num + "개 입니다.")
// alert("지불 금액은 " + pay + "원 입니다.")
// alert("잔돈은 " + change + "원 입니다.")

// 3) 입력함수 : prompt() 이용해서 입력받기
// 아래 코딩을 완성하시오.
// 입력1 : a
// 입력2 : b
// 출력 : b a

// 사용법 : let qustnaud = prompt("문자열"); //문자열(입력 대화상자의 문구)
// 입력받은 문자가 변수명에 저장
// let char1 = prompt("1개의 문자가 입력");
// let char2 = prompt("1개의 문자가 입력");
// alert(char1 + " / " + char2);

// 4) 입력받은 정수를 줄을 바꿔 3번 출력
// 단, 줄바꿈 특수문자 사용해서 한번에 출력

// let char1 = prompt("1개의 정수 입력")
// let char2 = prompt("1개의 정수 입력")
// let char3 = prompt("1개의 정수 입력")
// alert(char1 + "\n" + char2 + "\n" + char3);

// 5) 단어 2개가 입력
// 2개를 거꾸로 붙여서 출력
// 입력1 : hello 입력2 : world

// let char1 = prompt("hello");
// let char2 = prompt("world");
// alert(char2 + " " + char1 + "😀");

// 6) 입력1 : Hello 입력2 : World
//    출력 : Hello
//           World

// let char1 = prompt("Hello");
// let char2 = prompt("World");
// alert(char1 + "\n" + char2 + "\n" + "😎");

// 7) 두 정수의 합을 출력
// 입력 1 : 123
// 입력 2 : -123
// 결과값 출력
// 힌트 : Number(promt("문자열")) (문자열 -> 숫자)

let a = Number(prompt("123"));
let b = Number(prompt("-123"));
alert(a + b);
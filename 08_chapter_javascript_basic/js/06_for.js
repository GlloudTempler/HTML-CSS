// 반복문 : for문(80%)
// 같은 명령문을 많은 횟수를 출력하고 싶을 때 사용
// 사용법 : 초기값을 조건식에 넣어 판단해서 참이면 반복, 거짓이면 중단
// for(초기값; 조건식; 증감식) {(반복시키고 싶은 문장)}

// 예제 안녕하세요를 3번 출력

// for(i = 0; i < 3; i++) {
//     alert("안녕하세요");
// }

// TODO 자주 나오는 코딩 2가지 패턴 : 꼭 기억할 것
// TODO 1) 카운팅 : 1씩 증가시키기
// count 변수가 1부터 10까지 1씩 증가하는 코드를 작성하세요.

// for(let count = 1; count < 11; count++) {
//     alert(count);
// }

// let count = 0;

// for(let i = 1; i <= 10; i++) {
//     count += 1;
//     console.log(count);
// }

// TODO 2) 누적합
// 1~10까지 모든 숫자를 더해서 최종 결과를 출력하는 코드 작성


// let count = 0;
// let num = 0;
// for(let i = 1; i <=10; i++) {
//     count = count + 1;
//     num += count;
//     console.log(num);
// }

// TODO 3) 문자열 붙이기
// 예제 : * 10개 출력

// let strCount = "";
// for(let i = 1; i <=10; i++) {
//     strCount += "*";
//     console.log(strCount);
// }

// 연습 아래 결과처럼 * 출력
// 결과 : * ** *** **** *****

let strCount = "";
for(let i = 1; i <=5; i++) {
    strCount += "*";
    console.log(strCount);
}

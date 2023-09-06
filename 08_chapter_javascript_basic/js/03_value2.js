// 문자열 연산(더하기 == 붙이기 *********)
// let 변수명 = "문자열" + "문자열2" .......;
// let hello = "안녕하세요 " + "잘가세요";
// alert(hello);

// 자료형 : 문자열(string), 숫자(number)
// 참/거짓 : bool(boolean)
// 사용법 : let변수명 = true(또는 false)
//  **) C언어나 java와 달리 변수의 자료형을 나타내는 예약어가 없음
// let(const) 이용해서 변수 정의

// let hello = true; // 내부적으로 bool된 것
// let hello2 = false;
// alert(hello);
// alert(hello2);

// 비교연산자 : >=(크거나 같음), <=(작거나 같음), >(크다), <(작다), ==(같다), ===(엄격하게 같다)
// 코딩실수 조심

// 식별자 : 변수명, 상수명, 함수명 등 ....
// 변수(변하는 공간), 상수(안변하는 공간)
// 변수, 상수의 이름 짓기 규칙(명명법)
// 변수명 규칙
// 1) 첫글자는 영문자, 달러($), 언더바(_)만 올 수 있음(숫자X)
// 2) 대소문자 구분
// 3) js예약어(let, const 등) 사용 못함
// 기타(참고) : 한글, 한자 가능
// let Hello = "하이"
// let hello = "dkgkdla"

// 명명법(이름을 정하는 규칙)
// 1) 카멜표기(camelCase) : 단어와 단어 사이를 대문자로 표기 - helloWorld
//    변수명, 함수명 등

// 2) pascal표기법 : 단어와 단어 사이는 대문자, 첫글자는 대문자(HelloWorld)
// 사용처 : 클래스명, 생성자명

// 기타 언더바 표기법, 마이너스 표기법
// 언더바 : hello_world
// 마이너스 : hello-world

// 논리 연산자
// 참/거짓을 이용해서 논리 연산함
// 1) 논리 부정 : !(반대), (참이면 거짓, 거짓이면 참이됨)
// let hello = !true;
// alert(hello);

// 2) 논리 곱 : &&(연산시 하나라도 거짓이면 거짓)
// 리액트 코딩 시 많이 나옴
// let hello = true && true;
// let hello2 = true && false;
// alert(hello);
// alert(hello2);

// 활용 : if문 대신 논리곱을 사용할 수 있음(고급코딩)

// 3) 논리 합(or) : || (연산 시 하나라도 참이면 참)
// let hello = true || true;
// let hello2 = true || false;
// alert(hello);
// alert(hello2);

// 대입 연산자 : =
// 변수, 상수에 값을 넣을 때 사용
// let hello = "hello"
// let num = 1;

// 대입 연산자 축약형
// let x = 10; // x의 변수에 10값을 저장
// x = x + 5; // 10 + 5 > 다시 x로 저장 == x = 15
// x += 5; // + 축약형

// x = x - 5;
// x -= 5;

// x *= 5;

// x /= 2;

// x %= 4;

// 증감 연산자
// 변수++ , ++변수 / 변수-- --변수
// 1씩 증가, 1씩 감소
// let x = 10;
// ++x;
// alert(x);
// --x;
// alert(x);

let y = 10;
y++;
alert(y);
y--;
alert(y);

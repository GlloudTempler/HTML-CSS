// jquery 라이브러리 맛보기
// 자주 사용되는 함수들의 모임(묶음)
// jquery 배경 : 웹브라우저(익스플로러, 크롬, 사파리 등) 간에 js문법이 잘 동작 안함(크로스브라우저문제)
// 현재는 js에서 거의 해결
// 바닐라js보다 코딩이 짧고 사용이 쉬움
// 단점 : 용량이 크다. 성능이 떨어진다.
// TODO jquery사용법 : 
// jquery : 함수를 이용해서 dom조작
// $(function() {jquery실행문} : html위쪽에 넣어도 실행된다.
// --> html태그보다 뒤 늦게 실행을 시켜주는 구문
// $(function() {
//     $(css선택자).함수(속성명, 속성값);
// });

$(function() {
    $("#title").css("background-color", "skyblue");
});
// TODO 형제 요소(태그)
// 선택함수
// 사용법 : document.querySelector("css선택자");
// li태그 중 class=two인것
let liTag = document.querySelector(".two");

// TODO 사용법
// TODO 태그의 앞에 있는 형제 요소(태그) 접근 - 태그.previousElementSibling
let siblingPre = liTag.previousElementSibling.innerHTML;
console.log("siblingPre", siblingPre);

// TODO 태그의 뒤에 있는 형제 요소(태그) 접근 - 태그.nextElementSibling
let siblingNext = liTag.nextElementSibling.innerHTML;
console.log("siblingNext", siblingNext);
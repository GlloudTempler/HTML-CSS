// TODO 선택한 자기 자기 자신 삭제
// 선택함수 : class="one"인것
let liOne = document.querySelector(".one");

// TODO 요소 삭제
// 사용법 : 태그.remove()
liOne.remove();

// TODO 2) 부모의 자식 중 1개 삭제
// 부모 선택
let ulTag = document.querySelector("ul");
// 삭제할 자식 태그 선택 : class="removeTarget"
let removeTarget = document.querySelector(".removeTarget");

// TODO 자식 태그 삭제
// 사용법 : 부모태그.removeChild(삭제할 자식 태그)
ulTag.removeChild(removeTarget);


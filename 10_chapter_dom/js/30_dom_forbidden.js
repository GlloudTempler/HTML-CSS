// 금칙어 예제
// 채팅 : 입력못하는 문자(욕, 육두문자등)
// 선택함수 : 체크대상(.name-input 클래스를 가진 input태그)
// 금칙어 == "test"
let nameInput = document.querySelector(".name-input"); // input태그

// 금칙어를 화면에 출력할 태그 선택
let warningMessage = document.querySelector(".warning-message"); // p태그

// 이벤트 : 클릭, 마우스 3개, 키입력(input);
// 태그.addEventListener("input", function() {실행문})
nameInput.addEventListener("input", function() {
    // 금칙어 감시 코딩 : nameInput의 값(value)
    let inputStr = nameInput.value; // 현재 입력된 값
    // 입력된 값 - > 소문자로 변경
    let smallChar = inputStr.toLowerCase();

    // 조건문 : test문자가 들어 왔는지 비교
    if(smallChar.includes("test")==true) {
        // 금치겅가 들어왔음 : test
        warningMessage.innerHTML = "경고: test들어옴" //p태그에 출력
    }else {
        warningMessage.innerHTML = " ";
    }
})
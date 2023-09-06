// TODO dark 클래스가 있으면 light 적용 없으면 dark클래스 적용


// let a = container.classList.contains(".dark");
// console.log(a)
function setToggle() {
    let content = document.querySelector("#content");
    // .dark클래스가 있는지 확인
    if(content.classList.contains("dark")==true) {
        // .light 클래스 추가
        content.classList.toggle("light");
    }else {
        content.classList.toggle("dark");
    }
}
// form input 태그 접근해서 디자인 적용
$(function(){
    // 1) 사용법 : 태그[속성] (속성선택자) : 해당되는 속성이 있는 태그를 선택
    $("#wrap a[target]").css({ color: "red"});

    // 2) 사용법 : 속성의 값중 https로 시작하는 태그 선택(태그[^=])
    $("#wrap a[href^=https]").css({color: "skyblue"});

    // 3) 속성의 값 중 net로 끝나느 ($) 태그 선택
    $("#wrap a[href$=net]").css({color: "black"})

    // 4) 속성의 값 중 google이 포함되는 태그 선택
    $("#wrap a[href*=google]").css({color: "yellow"})
})


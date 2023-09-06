// 배열(객체) : 여러가지 값을 저장하는 곳(장소)
// 비교) 변수 : 한가지 값을 저장하는 곳(장소)

// 배열의 형태
// 사용법 : 
// 1) 배열 정의
//    let 배열 변수명 = ["값", "값2", ---- "값n"];
// 2) 배열 사용
//    배열변수명[0] <- "값"
//    배열변수명[1] <- "값2"
//    --------------------
//    배열변수명[n-1] <- "값n"
// let color = ["red", "green", "blue", "yellow", "skyblue"]

// for(i = 0; i < color.length; i++) {
//     console.log(color[i]);
// }


// 예제 2)
// let todos = ["우유구매", "업무 메일 확인하기", "필라테스 수업"]

// for(i = 0; i < todos.length; i++) {
//     console.log((i+1) + "번째 할 일 : " + todos[i])
// }

// 예제 3)
// 화면에 배열 값들을 출력하시오
// 12345
// 힌트 : 배열의 길이 : 배열 변수명 .length 사용
let array = [1,2,3,4,5];
let result = "";
for(i = 0; i < array.length; i++) {
    result += array[i]
}
console.log(result);
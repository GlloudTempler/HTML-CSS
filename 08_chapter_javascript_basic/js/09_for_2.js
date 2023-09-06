// TODO 반복문과 함께 사용하는 예약어
// 1) break : 중단 예약어
// 1부터 5까지 반복해서 3이 될 때 중단하고 빠져나오는 코드 작성

// for(i = 1; i <= 5; ++i) {
//     console.log(i);
//     if(i == 3) {
//         break;
//     }
// }

// 2) continue : 계속이라는 예약어
// 1부터 5까지 출력, 3은 제외

for(i = 1; i <= 5; ++i) {
    if(i == 3) {
        continue;
    } else {
        console.log(i);
    }
}
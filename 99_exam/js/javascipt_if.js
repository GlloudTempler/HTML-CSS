// 1151
// let number = Number(prompt("5"));
// if(number < 10) {
//     console.log("small");
// }

// 1152
// let number = Number(prompt("5"));
// if(number < 10) {
//     console.log("small");
// }else {
//     console.log("big")
// }

// 1153
// let number = prompt("a b").split(" ");
// if(number[0] < number[1]) {
//     console.log("<")
// }else if(number[0] === number[1]) {
//     console.log("=")
// }else if(number[0] > number[1]) {
//     console.log(">")
// }

// 1154
// let number = prompt("5 7").split(" ");

// if(number[0] >= number[1]) {
//     console.log(number[0] - number[1]);
// }else if(number[0] <= number[1]) {
//     console.log(number[1] - number[0]);
// }

// let max = Math.max(number[0], number[1]);
// let min = Math.min(number[0], number[1]);
// console.log(max-min);

// 1155
// let number = Number(prompt("9")) 
// if(number % 7 == 0) {
//     console.log("multiple");
// }else{
//     console.log("not multiple")
// }

// 1156
// let number = Number(prompt("5"));
// if(number % 2 === 0){
//     console.log("even");
// }else {
//     console.log("odd");
// }

// 1157
// let length = Number(prompt(50.213));
// if(length <= 60 && length >= 50) {
//     console.log("win");
// }else {
//     console.log("lose");
// }

// 1158
// let length = Number(prompt(50));
// if((length <= 40 && length >= 30) || (length <= 60 && length >=70)) {
//     console.log("win");
// }else {
//     console.log("lose");
// }

// 1159
// let length = Number(prompt(30));
// if((length <= 70 && length >= 50) || (length % 6 === 0)) {
//     console.log("win");
// }else {
//     console.log("lose");
// }

// 1160
// let day = Number(prompt(1))
// if(day === 1 || day === 3 || day === 5 || day === 7) {
//     console.log("oh my god")
// }

// 1161
// let number = prompt("2 3").split(" ").map(Number);
// let result1 = "";
// let result2 = "";
// let result3 = "";
// if(number[0] % 2 === 0) {
//     result1 += "짝수" + "+";
// }else {
//     result1 += "홀수" + "+";
// }

// if(number[1] % 2 === 0) {
//     result2 += "짝수";
// }else {
//     result2 += "홀수";
// }

// if((number[0]+number[1]) % 2 === 0) {
//     result3 += "짝수";
// }else {
//     result3 += "홀수";
// }

// console.log(result1 + result2 + "=" + result3);

// 1162
// let birth = prompt("1902 2 10").split(" ").map(Number);
// if((birth[0] - birth[1] + birth[2]) % 10 === 0) {
//     console.log("대박");
// }else {
//     console.log("그럭저럭")
// }

// 1163
// let birth = prompt("1502 2 10").split(" ").map(Number);
// let l = ((birth[0] + birth[1] + birth[2])/100).toFixed(0);
// if(l % 2 === 0){
//     console.log("대박")
// }else {
//     console.log("그럭저럭")
// }

// 1164
// let height = prompt("170 168 175").split(" ").map(Number);
// let truck = 170;
// for(let i = 0; i < height.length; i++) {
//     if(height[i] <= truck) {
//         console.log("CRASH");
//         break;
//     }else {
//         console.log("PASS")
//     }
// }

// 1165
// let score = prompt("74 2").split(" ").map(Number);
// let goal = 1;
// for(let i = score[0]; i < 90; i++) {
//     if(i % 5 == 0) {
//         goal++;
//     }
// }

// console.log(score[1] + goal);

// 1166
// let year = Number(prompt("2012"));
// if((year % 400 === 0) || (year % 4 === 0 && year % 100 != 0)) {
//     console.log("Leap");
// } else {
//     console.log("Normal");
// }

// 1167
// let num = prompt("201 20 3").split(" ");

// const numarr = num.sort(function(a,b) {
//     if(a < b) return 1;
//     if(a === b) return 0;
//     if(a > b) return -1;
// })

// console.log(numarr[numarr.length-1]);

// 1168
// let birth = prompt("790101 1").split(" ").map(Number);

// let year = Number((birth[0] / 10000).toFixed(0));
// if(birth[1] === 1 || birth[1] === 2) {
//     year += 1900;
// }else if(birth[1] === 3 || birth[1] ===4) {
//     year += 2000;
// }
// console.log((2012 - year + 1));

// 1170
// let grade = prompt("3 1 2").split(" ");
// if(grade[2] < 10) {
//     console.log(grade[0] + grade[1] + "0" + grade[2]);
// }else {
//     console.log(grade[0] + grade[1] + grade[2]);
// }

// 1171
// let grade = prompt("2 7 15").split(" ");
// let year = grade[0];
// let cls = grade[1];
// let number = grade[2];

// if(cls < 10) {
//     cls = "0" + cls;
// }

// if(number < 100) {
//     number = "0" + number;
// }else if(number < 10) {
//     number = "00" + number;
// }

// console.log(year+cls+number);

// 1172
// let num = prompt("8 7 6").split(" ");

// const numarr = num.sort(function(a,b) {
//     if(a > b) return 1;
//     if(a === b) return 0;
//     if(a < b) return -1;
// })

// console.log(numarr[0], numarr[1], numarr[2]);

// 1173
// let time = prompt("12 35").split(" ").map(Number);
// let hour = time[0];
// let min = time[1];
// if(min - 30 < 0) {
//     hour = hour - 1;
//     min = 60 + (min -30);
// }else {
//     min = min -30;
// }

// console.log(hour + " " + min);

// 1180
// const trash = prompt("90");
// let ten = Number(trash[1] + trash[0]) * 2;
// if(ten >= 100) {
//     if((ten % 100) > 50) {
//         console.log("OH MY GOd");
//     }else {
//         console.log("GOOD")
//     }
// }else {
//     if(ten > 50) {
//         console.log("OH MY GOd");
//     }else {
//         console.log("GOOD")
//     }
// }

// 1201
// let num = Number(prompt("5"));
// if(num > 0) {
//     console.log("양수");
// }else if(num === 0) {
//     console.log("0");
// }else{
//     console.log("음수")
// }

// 1202
// let a = Number(prompt("score"));
// if(a >= 90) {
//     console.log("A");
// }else if(a >= 80) {
//     console.log("B");
// }else if(a >= 70) {
//     console.log("C");
// }else if(a >= 60) {
//     console.log("D");
// }else {
//     console.log("F")
// }

// 1203
// let bmi = Number(prompt("15"));
// if(bmi <= 10) {
//     console.log("정상");
// }else if(bmi <=20) {
//     console.log("과체중");
// }else {
//     console.log("비만")
// }

// 1204
// let num = Number(prompt("2"));
// if(num <= 20) {
//     if(num === 1) {
//         console.log(num + "st")
//     }else if(num === 2) {
//         console.log(num + "nd")
//     }else if(num === 3) {
//         console.log(num + "rd")
//     }else {
//         console.log(num + "th")
//     }
// }else {
//     if(num % 10 === 1) {
//         console.log(num + "st")
//     }else if(num % 10 ===2) {
//         console.log(num + "nd")
//     }else if(num % 10 === 3) {
//         console.log(num + "rd")
//     }else {
//         console.log(num + "th")
//     }
// }


// 1205
// let num = prompt("1 2").split(" ").map(Number);
// let max;
// max = Math.max((num[0]*num[1]), (num[0] / num[1]), (num[0] - num[1]), (num[0] + num[1]), (num[0]**num[1]), (num[1]**num[0]));
// console.log(max.toFixed(6));

// 1206
// let num = prompt("a b").split(" ");
// let a = 0;
// if(num[1] % num[0] === 0) {
//     a = (num[1]/num[0]).toFixed(0);
//     console.log(num[0] + "*" + a + "=" + num[1]);
// }else if(num[0] % num[1] === 0) {
//     a = (num[0]/num[1]).toFixed(0);
//     console.log(num[1] + "*" + a + "=" + num[0]);
// }else {
//     console.log("none");
// }

// 1207
// let game = prompt("0 0 1 0").split(" ").map(Number);
// result = 0;
// for(let i = 0; i < game.length; i++) {
//     result += game[i];
// }

// if(result === 1) {
//     console.log("도");
// }else if(result === 2) {
//     console.log("개");
// }else if(result === 3) {
//     console.log("걸");
// }else if(result === 4) {
//     console.log("윷");
// }else if(result === 0) {
//     console.log("모");
// }

// 1210
// let menuNumber = prompt("a b").split(" ").map(Number);
// let a = menuNumber[0];
// let b = menuNumber[1];

// const menu = [400, 340, 170, 100, 70];
// let kcal = menu[a-1] + menu[b-1];
// if(kcal > 500) {
//     console.log("angry")
// }else {
//     console.log("no angry")
// }

// 1212
// let num = prompt("a b c").split(" ").map(Number);
// if(num[0] + num[1] > num[2]){
//     console.log("yes");
// }

// 1214
// let date = prompt("y m").split(" ").map(Number);

// if((date[0] % 400 === 0) || (date[0] % 4 === 0 && date[0] % 100 != 0)) {
//     if(date[1] === 1 || date[1] === 3 || date[1] === 5 || date[1] === 7 || date[1] === 8 || date[1] === 10 || date[1] === 12){
//         console.log("31");
//     }else if(date[1] === 2) {
//         console.log("29")
//     }else {
//         console.log("30")
//     }
// } else {
//     if(date[1] === 1 || date[1] === 3 || date[1] === 5 || date[1] === 7 || date[1] === 8 || date[1] === 10 || date[1] === 12){
//         console.log("31");
//     }else if(date[1] === 2) {
//         console.log("28")
//     }else {
//         console.log("30")
//     }
// }
// 1216
// let money = prompt("a b c").split(" ").map(Number);
// let earn = (money[1] - money[2]);
// if(money[0] > earn) {
//     console.log("do not advertise");
// }else if(money[0] < earn) {
//     console.log("advertise");
// }else {
//     console.log("dose not matter");
// }

// 1218
// let length = prompt("a b c").split(" ").map(Number);
// if(length[0] + length[1] > length[2]) {
//     if(length[0] === length[1] && length[1] === length[2]) {
//         console.log("정삼각형");
//     }else if(length[0] === length[1] || length[1] === length[2] || length[0] === length[2]){
//         console.log("이등변삼각형");
//     }else if(length[0]**2 + length[1]**2 === length[2]**2 || length[1]**2 + length[2]**2 === length[0]**2 || length[2]**2 + length[0]**2 === length[1]**2) {
//         console.log("직각삼각형");
//     }else {
//         console.log("삼각형");
//     }
// }else {
//     console.log("삼각형 아님");
// }
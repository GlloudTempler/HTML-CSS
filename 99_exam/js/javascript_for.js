// 1251
// let result = "";
// for(let i  = 1; i <=100; i++) {
//     result += (i + " ");
// }
// console.log(result);

// 1252
// let num = Number(prompt("5"));
// let result = "";
// for(let i  = 1; i <= num; i++) {
//     result += (i + " ");
// }
// console.log(result);

// 1253
// let num = prompt("a b").split(" ").map(Number);
// let result = "";
// for(let i = num[0]; i <= num[1]; i++) {
//     result += (i + " ");
// }
// console.log(result);

// 1254
// let num = prompt("a b").split(" ");
// let result = "";
// let a = num[0].charCodeAt();
// let b = num[1].charCodeAt();
// for(let i = a; i <= b; i++) {
//     result += (String.fromCharCode(i) + " ");
// }
// console.log(result);

// 1255
// let num = prompt("2.00 2.03").split(" ").map(Number);
// let result = "";
// const epsilon = 0.0001;
// for (let i = num[0]; i <= num[1] + epsilon; i += 0.01) {
//     result += (i.toFixed(2) + " "); // 소수점 둘째 자리까지 표시
// }
// console.log(result);

// 1256
// let num = Number(prompt("5"));
// let result = "";
// for(let i  = 1; i <= num; i++) {
//     result += "*";
// }
// console.log(result);

// 1257
// let num = prompt("a b").split(" ").map(Number);
// let result = "";
// for(let i = num[0]; i <= num[1]; i++) {
//     if(i % 2 != 0) {
//         result += (i + " ");
//     }
// }
// console.log(result);

// 1258
// let num = Number(prompt("100"));
// let result = 0;
// for(let i  = 1; i <= num; i++) {
//     result += i;
// }
// console.log(result);

// 1259
// let num = Number(prompt("5"));
// let result = 0;
// for(let i  = 1; i <= num; i++) {
//     if(i % 2 === 0) {
//         result += i;
//     }
// }
// console.log(result);

// 1260
// let num = prompt("a b").split(" ").map(Number);
// let result = 0;
// for(let i = num[0]; i <= num[1]; i++) {
//     if(i % 3 === 0) {
//         result += i;
//     }
// }
// console.log(result);

// 1261
// let num = prompt("1 2 3 4 5 6 7 8 9 10").split(" ").map(Number);
// const result = [];
// for(let i = 0; i < num.length; i ++) {
//     if(num[i] % 5 === 0) {
//         result.push(num[i]);
//     }
// }
// let l = Math.floor(Math.random()*(result.length));
// console.log(result[l]);

// 1265
// let num = Number(prompt("3"))
// const result = [];

// for(let i = 1; i <= 9; i++) {
//     result.push(num * i);
// }
// let result2 = "";
// for(let l = 0; l < result.length; l++) {
//     result2 += (num + " * " + (l+1) + " = " + result[l]) + "\n";
// }
// console.log(result2);

// 1266
// let num = Number(prompt("5"));
// const nums = [];
// for(let i = 1; i <= num; i++) {
//     nums.push(Math.floor((Math.random()*100 + 1)));
// }
// console.log(nums);
// let result = 0;
// for(let l = 0; l < nums.length; l++) {
//     result += nums[l];
// }
// console.log(result);

// 1267
// let num = prompt("3 5 7 15 2").split(" ").map(Number);
// let result = 0;
// for(let i = 0; i < num.length; i++) {
//     if(num[i] % 5 === 0) {
//         result += num[i];
//     }
// }
// console.log(result);

// 1268
// let num = prompt("3 5 7 15 2").split(" ").map(Number);
// let result = 0;
// for(let i = 0; i < num.length; i++) {
//     if(num[i] % 2 != 0) {
//         result += 1;
//     }
// }
// console.log(result);

// 1269
// let num = prompt("2 -1 3 5").split(" ").map(Number);
// let a = num[0];
// for(let i = 1; i < num[3]; i++){
//     a = (a*(num[1]) + num[2]);
// }
// console.log(a);

// 1270
// let num = Number(prompt("35"));
// let result=0;
// for(i = 1; i <= num; i++) {
//     if(i % 10 === 1) {
//         result++;
//     }
// }
// console.log(result);

// 1271
// let num = prompt("3 1 29 31 21").split(" ").map(Number);
// console.log(Math.max(num[0], num[1], num[2], num[3], num[4]));

// 1272
// let num = prompt("1 2").split(" ").map(Number);
// const arr = [];
// for(let i = 1; i <= num.length; i++) {
//     if(i % 2 == 0){
//         for(let l = 1; l < num.length; l++){
//             arr.push(l*10);
//         }
//     }else {
//         for(let k = 1; k < num.length; k++){
//             arr.push(k);
//         }
//     }
// }
// console.log((arr[num[0]-1]+arr[num[1]-1]));

// 1273
// let num = Number(prompt("6"));
// let result = "";
// for(i = 1; i<=num; i++) {
//     if(num % i === 0) {
//         result += i + " ";
//     }
// }
// console.log(result);

// 1274
// let num = Number(prompt("7"));
// let result = [];
// for(i = 1; i<=num; i++) {
//     if(num % i === 0) {
//         result.push(i);
//     }
// }
// if(result.length === 2) {
//     console.log("prime");
// }else {
//     console.log("not prime");
// }

// 1275
// let num = Number(prompt("3"));
// console.log(num**num);

// 1276
// let num = Number(prompt("5"));
// let result = 1;
// for(let i = 1; i <= num; i++) {
//     result = result*i;
// }
// console.log(result);

// 1277
// let num = prompt("2 4 7 3 1 2 5").split(" ").map(Number);
// console.log(num[0], num[Math.ceil(num.length / 2)-1], num[(num.length-1)]);

// 1278
// const num = prompt("932");
// console.log(num.length);

// 1279
// let num = prompt("5 10").split(" ").map(Number);
// let result = 0;
// for(i = num[0]; i <= num[1]; i++) {
//     if(i % 2 === 0) {
//         result += -i;
//     }else {
//         result += i;
//     }
// }
// console.log(result);

// 1280
// let num = prompt("5 7").split(" ").map(Number);
// let result = 0;
// let result2 = "";
// for(i = num[0]; i <= num[1]; i++) {
//     if(i % 2 === 0) {
//         result += -i;
//         result2 += -i;
//     }else {
//         result += i;
//         result2 += "+" + i;
//     }
// }
// console.log(result2 + "=" + result);

// 1281
// let num = prompt("5 7").split(" ").map(Number);
// let result = 0;
// let result2 = "";
// for(i = num[0]; i <= num[1]; i++) {
//     if(i % 2 === 0) {
//         result += -i;
//         result2 += -i;
//     }else {
//         result += i;
//         if(i === num[0]){
//             result2 += i;    
//         }else {
//             result2 += "+" + i;
//         }
//     }
// }
// console.log(result2 + "=" + result);

// 1282
// let num = Number(prompt("34"));
// let result1 = 0;
// let result2 = 0;
// for(let i = 0; i*i < 2**31; i++) {
//     if(i*i >= num) {
//         result1 = num-((i-1)*(i-1));
//         result2 = (i-1);
//         console.log(result1 + " " + result2);
//         break;
//     }
// }

// 1283
// let money = Number(prompt("10000"));
// let day = Number(prompt("4"));
// let earn = prompt("10 -10 5 -5").split(" ");
// let result = money;
// for(let i = 0; i < day; i++){
//     result = result + (result * (Number(earn[i])/100));
// }

// console.log(result);
// let profit = result - money;

// if(profit < 0.5 && profit > -0.5) {
//     console.log("0");
//     console.log("same");
// }else if(profit < -0.5) {
//     console.log(profit.toFixed(0));
//     console.log("bad")
// }else if(profit > 0.5) {
//     console.log(profit.toFixed(0));
//     console.log("good")
// }

// 1284
// let num = Number(prompt("34"));
// let found = false;
// for(let i = 1; i <= num; i++) {
//     for(let l = 1; l <= 34; l++) {
//         let a = num - i;
//         if(a === l*l) {
//             console.log(i + " " + l);
//             found = true;
//             break;
//         }
//     }
//     if(found === true) {
//         break;
//     }
// }

// 1286
// let num1 = Number(prompt("3"))
// let num2 = Number(prompt("7"))
// let num3 = Number(prompt("-4"))
// let num4 = Number(prompt("-6"))
// let num5 = Number(prompt("5"))

// console.log(Math.max(num1, num2, num3, num4, num5));
// console.log(Math.min(num1, num2, num3, num4, num5));

// 1294
// let str = prompt("never trust brutus").split(" ")
// let result = "";

// for(let i = 0; i < str.length; i++) {
//     for(let l = 0; l < str[i].length; l++) {
//         if(str[i][l].charCodeAt() + 3 <= 122) {
//             result += String.fromCharCode(str[i][l].charCodeAt() + 3);
//         }else if(str[i][l].charCodeAt() + 3 > 122){
//             result += String.fromCharCode(97 + (str[i][l].charCodeAt() - 122));
//         }
//     }
//     result += " ";
// }
// console.log(result);

// 1295
// const str = prompt("CodeChallenge2014withMSP");
// let str2 = [];
// for(i = 0; i < str.length; i++){
//     if(str[i] === str[i].toUpperCase()) {
//         str2.push(str[i].toLowerCase());
//     } else if(str[i] === str[i].toLowerCase()) {
//         str2.push(str[i].toUpperCase());
//     }
// }

// console.log(str2.join(""));

// 1675
// let str = prompt("qhyhu wuxvw euxwxv").split(" ")
// let result = "";

// for(let i = 0; i < str.length; i++) {
//     for(let l = 0; l < str[i].length; l++) {
//         if(str[i][l].charCodeAt() - 3 >= 97) {
//             result += String.fromCharCode(str[i][l].charCodeAt() - 3);
//         }else if(str[i][l].charCodeAt() - 3 < 97){
//             result += String.fromCharCode(122 + (str[i][l].charCodeAt() - 3));
//         }
//     }
//     result += " ";
// }
// console.log(result);
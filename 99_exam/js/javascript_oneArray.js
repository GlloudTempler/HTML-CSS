// 1402
// let n = Number(prompt("5"));
// let nArr = prompt("1 3 5 6 8").split(" ");
// let result = " ";
// for(i = n-1; i >= 0; i--) {
//     result += nArr[i] + " ";
// }
// console.log(result);

// 1403
// let n = Number(prompt("3"));
// let nArr = prompt("1 2 3").split(" ");
// for(l = 0; l < 2; l++){
//     for(i = 0; i < n; i++) {
//         console.log(nArr[i])
//     }
// }

// 1405
// let n = Number(prompt("5"));
// let nArr = prompt("1 2 3 4 5").split(" ");
// let length = nArr.length;
// let result = "";
// for(let i = 0; i < n; i++) {
//     for(let l = 0; l < length; l++){
//         if(l-i >= 0){
//             result += (nArr[l - i] + " ");
//         }else {
//             result += (nArr[length - (i - l)] + " ");
//         }  
//     }
//     console.log(result);
//     result ="";
// }

// 1407
// let str = prompt("abC Def gh").split(" ");
// let result = "";
// for(let i = 0; i < str.length; i++) {
//     result += str[i];
// }
// console.log(result);

// 1409
// let num = prompt("10 9 8 7 6 5 4 3 2 1").split(" ");
// let count = Number(prompt("3"));
// console.log(num[(count-1)]);

// 1412
// const sentence = prompt("oh! my god!");
// let check = "";

// let af = "a".charCodeAt();
// let al = "z".charCodeAt();
// let arr = [];
// let length = 0;
// for(let l = af; l <= al; l++){
//     arr[(length)] = String.fromCharCode(l);
//     length++;
// }
// console.log(arr);

// let arr2 = [];
// arr2.length = arr.length;
// for(let j = 0; j < arr2.length; j++){
//     arr2[j] = 0;
// }

// let k = 0;
// while(k <= (sentence.length-1)) {
//     for(let n = 0; n < arr.length; n++) {
//         if(sentence[k] === arr[n]) {
//             arr2[n] += 1;
//             break;
//         }
//     }
//     k++
// }

// console.log[arr2];

// for(y = 0; y < arr.length; y++) {
//     console.log((arr[y] + " : " + arr2[y]));
// }

// 1416
// let number = Number(prompt("7"));
// console.log(number.toString(2));

// 1420
// let number = Number(prompt("5"));
// let score1 = prompt("minsu 78").split(" ");
// let score2 = prompt("gunho 64").split(" ");
// let score3 = prompt("sumin 84").split(" ");
// let score4 = prompt("jiwon 96").split(" ");
// let score5 = prompt("woosung 55").split(" ");

// const arr1 = [
//     { name: score1[0], score: parseInt(score1[1]) }, 
//     { name: score2[0], score: parseInt(score2[1]) }, 
//     { name: score3[0], score: parseInt(score3[1]) }, 
//     { name: score4[0], score: parseInt(score4[1]) },
//     { name: score5[0], score: parseInt(score5[1]) }
//     ];

// const arr2 = arr1.sort(function(a, b) {
//         return b.score - a.score;
//     });

// console.log(arr2);

// let result = arr2[(number -3)].name;
// console.log(result);

// 1425
// let sn = prompt("9 6").split(" ");
// let std = prompt("160 165 164 165 150 165 168 148 170 ").split(" ");

// const stdarr = std.sort(function(a,b) {
//     if(a > b) return 1;
//     if(a === b) return 0;
//     if(a < b) return -1;
// })

// let result1 = "";
// let result2 = "";
// for(let i = 0; i < stdarr.length; i++) {
//     if(i < sn[1]) {
//         result1 += stdarr[i] + " ";
//     } else {
//         result2 += stdarr[i] + " ";
//     }
// }

// console.log(result1 + "\n" + result2);

// 1430
// let questionN = Number(prompt("5"));
// let question = prompt("2 52 23 55 100").split(" ").map(Number);
// let answerN = Number(prompt("4"));
// let answer = prompt("5 2 55 99").split(" ").map(Number);
// let result = [];
// result.length[answerN];
// console.log(question);
// console.log(answer);

// let l = 0;
// while(l < answerN){
//     for(let i = 0; i < questionN; i++) {
//         if(answer[l] === question[i]) {
//             result[l]=1;
//             break;
//         } else {
//             result[l]=0;
//         }
//     }
//     l++    
// }

// let resultConsole = "";
// for(let n = 0; n < result.length; n++) {
//     resultConsole += (result[n] + " ");
// }

// console.log(resultConsole);

// 1440
// let number = Number(prompt("5"));
// let numberArray = prompt("1 2 3 2 1 ").split(" ").map(Number);

// let result = "";
// for(let i = 0; i < number; i++) {
//     let result = "";
//     for(let l = 0; l < number; l++){
//         if(numberArray[i] < numberArray[l]){
//             result += "<" + " ";
//         }else if(numberArray[i] === numberArray[l]){
//             result += "=" + " ";
//         }else if(numberArray[i] > numberArray[l]){
//             result += ">" + " ";
//         }
//     }
//     console.log(i + " : " + result);
// }
// 1131
// let str = prompt("a");
// console.log(str);

// 1132
// let str = prompt("cat");
// console.log(str);

// 1133
// let str = prompt("black sheep wall");
// console.log(str);

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

// 1406
// let str = prompt("love");
// console.log("I", str, "you.")

// 1408
// const str = prompt("password");
// let charCode = [];
// let charCode2 = [];
// for(i = 0; i < str.length; i++) {
//     charCode.push(str.charCodeAt(i) + 2);
//     charCode2.push((str.charCodeAt(i)*7)%80 + 48);
// }

// let result1 = [];
// let result2 = [];
// for(l = 0; l < str.length; l++) {
//     result1.push(String.fromCharCode(charCode[l]));
//     result2.push(String.fromCharCode(charCode2[l]));
// }

// console.log(result1.join(""));
// console.log(result2.join(""));


// 1410
// const str = prompt("((())()(()))")
// let result1 = 0;
// let result2 = 0;
// for(i = 0; i < str.length; i++) {
//     if(str[i] == "(") {
//         result1 += 1;
//     }else if(str[i]) {
//         result2 +=1;
//     }
// }
// console.log(result1)
// console.log(result2)

// 1414
// const str = prompt("cCCc");
// let result1 = 0;
// let result2 = 0;
// for(i = 0; i < str.length; i++) {
//     if(str[i] === "C" || str[i] === "c") {
//         result1 += 1;
//     }
//     if(i < str.length - 1 && (str[i] + str[i+1]).toLowerCase() === "cc"){
//         result2 += 1;
//     }
// }
// console.log(result1 + "\n" + result2);

// 1418
// const str = prompt("test");
// let result = 0;
// for(i = 0; i < str.length; i++) {
//     if(str[i] === "t") {
//         result += ((i+1) + " ");
//     }
// }
// console.log(result);

// 1419
// const str = prompt("love lovely");
// let result = 0;
// for(i = 0; i < str.length; i++) {
//     if(i <= str.length - 4 && (str[i] + str[i+1] + str[i+2] + str[i+3]) === "love") {
//         result++;
//     }
// }
// console.log(result);

// 1733
// const str = prompt("IOI");
// let result = "IOI is the International Olympiad in Informatics"

// for(i = 0; i < str.length; i++) {
//     if(i <= str.length - 3 && (str[i] + str[i+1] + str[i+2]) === "IOI") {
//         console.log(result);
//     }
// }

// 1734
// const id = prompt("anaki");
// let result = ("Welcome!" + " " + id);
// console.log(result);

// 1754
// let num = prompt("9999999999999999999999999 9999999999999999999999998").split(" ");
// let num1 = BigInt(num[0]);
// let num2 = BigInt(num[1]);

// if(num1 < num2) {
//     console.log(num1 + " " + num2)
// }else if(num1 > num2) {
//     console.log(num2 + " " + num1)
// }

// 1990
// let num = Number(prompt("3321"));
// if(num % 3 === 0) {
//     console.log("1");
// } else {
//     console.log("0")
// }

// 2721
// const str1 = prompt("turtle");
// const str2 = prompt("error");
// const str3 = prompt("robot");

// if(str1[str1.length-1] === str2[0] && str2[str2.length-1] === str3[0] && str3[str3.length-1] === str1[0]) {
//     console.log("good")
// }else {
//     console.log("not good")
// }
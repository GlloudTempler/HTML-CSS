// 1001
// let str = prompt("Hello");
// console.log(str);

// 1002
// console.log("Hello world");

// 1003
// console.log("Hello" + "\n" + "World");

// 1004
// console.log("'Hello'");

// 1005
// console.log('"Hello World"');

// 1006
// console.log('"!@#$%^&*()"');

// 1007
// console.log('"C:\\Download\\hello.cpp"')

// 1008
// console.log('┌'+'┬'+'┐' + "\n" + '├'+'┼'+'┤' + "\n" + '└' + '┴' + '┘');

// 1010
// let a = 0;
// a = Number(prompt("15"));
// console.log(a);

// 1011
// let str = " ";
// str = prompt("p");
// console.log(str);

// 1012
// let float = " ";
// float = Number(prompt("1.414213"));
// console.log(float);

// 1013
// let a = Number(prompt("a"));
// let b = Number(prompt("b"));
// console.log(a + " " + b);

// 1014
// let a = prompt("A");
// let b = prompt("b");
// console.log(b + " " + a);

// 1015
// let a = Number(prompt("1.59254"));
// console.log(a.toFixed(2));

// 1017
// let num = Number(prompt("125"));
// console.log(num + " " + num + " " + num);

// 1018
// let time = prompt("3:16").split(":");
// console.log(time[0] + ":" + time[1]);

// 1019
// let date = new Date();
// let year = date.getFullYear();
// let month = "";
// if(date.getMonth() >= 10) {
//     day = date.getMonth();
// }else {
//     month = ("0" + (date.getMonth() + 1));
// }
// let day = "";
// if(date.getDate() >= 10) {
//     day = date.getDate();
// }else {
//     day = ("0" + date.getDate());
// }
// console.log(year+'.'+month+'.'+day);

// 1020
// let a = prompt("주민번호").split("-");
// console.log(a[0] + a[1]);

// 1021
// let a = prompt("Informatics");
// console.log(a);

// 1022
// let b = prompt("Programming is very fun!!");
// console.log(b);

// 1023
// let a = (Number(prompt('1.1414213')).toFixed(6)).split(".");
// console.log(a[0] + "\n" + a[1]);

// 1024
// let a = prompt("Boy");
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

// 1025
// let a = prompt('75254');
// let b = '';
// for(i = (a.length-1); i >= 0; i--){
//     console.log(a[i] + b + "\n");
//     b += '0';
// }

// 1026
// let a = prompt('17:23:57').split(":");
// console.log(a[1]);

// 1027
// let a = prompt('2014.07.15').split(".");
// console.log(a[2]+"-"+a[1]+"-"+a[0]);

// 1028
// let a = Number(prompt("2147483684"));
// console.log(a);

// 1029
// let a = Number(prompt('3.14159265359')).toFixed(11);
// console.log(a);

// 1030
// let a = Number(prompt("-2147483649"));
// console.log(a);

// 1031
// let a = Number(prompt("10"));
// console.log(a.toString(8));

// 1032
// let a = Number(prompt("255"));
// console.log(a.toString(16));

// 1033
// let a = Number(prompt("255"));
// console.log(a.toString(16).toUpperCase());

// 1034
// let a = Number(prompt('13'));
// b = parseInt(a, 8).toString(10);
// console.log(b);

// 1035
// let a = prompt('f');
// b = parseInt(a, 16).toString(8);
// console.log(b);

// 1036
// let a = prompt("A");
// console.log(a.charCodeAt(0));

// 1037
// let a = Number(prompt("65"));
// console.log(String.fromCharCode(a));

// 1038
// let a = prompt("123 -123").split(" ");
// console.log((Number(a[0])+Number(a[1])));

// 1039
// let a = prompt("2147483648 2147483648").split(" ");
// console.log((Number(a[0]) + Number(a[1])));

// 1040
// let a = Number(prompt("-1"));
// console.log(-a);

// 1041
// let a = prompt("A");
// let b = String.fromCharCode((a.charCodeAt(0) + 1));
// console.log(b);

// 1042
// let a = prompt("a b").split(" ");
// console.log((Number(a[0]) / Number(a[1])).toFixed(0));

// 1043
// let a = prompt("a b").split(" ");
// console.log((Number(a[0]) % Number(a[1])));

// 1044
// let a = Number(prompt("2147483647"));
// console.log(++a);

// 1045
// let a = prompt("a b").split(" ");
// console.log((Number(a[0]) + Number(a[1])));
// console.log((Number(a[0]) - Number(a[1])));
// console.log((Number(a[0]) * Number(a[1])));
// console.log((Number(a[0]) / Number(a[1])).toFixed(0));
// console.log((Number(a[0]) % Number(a[1])));
// console.log((Number(a[0]) / Number(a[1])).toFixed(2));

// 1046
// let a = prompt("a b c").split(" ");
// let sum = 0;
// for(i = 0; i < a.length; i++){
//     sum += Number(a[i]);
// }
// console.log(sum);
// console.log((sum/(a.length)).toFixed(1));

// 1047
// let a = Number(prompt("1024"));
// console.log(a*2);

// 1048
// let a = prompt("2 3").split(" ");
// console.log((Number(a[0])**Number(a[1])));

// 1049
// let a = prompt("a b").split(" ");
// if(Number(a[0]) > Number(a[1])) {
//     console.log("1");   
// }else {
//     console.log("0");
// }

// 1050
// let a = prompt("a b").split(" ");
// if(Number(a[0]) === Number(a[1])) {
//     console.log("1");   
// }else {
//     console.log("0");
// }

// 1051
// let a = prompt("a b").split(" ");
// if(Number(a[0]) >= Number(a[1])) {
//     console.log("1");   
// }else {
//     console.log("0");
// }

// 1052
// let a = prompt("a b").split(" ");
// if(Number(a[0]) != Number(a[1])) {
//     console.log("1");   
// }else {
//     console.log("0");
// }

// 1053
// let a = Number(prompt("a"));
// if(a === 0) {
//     console.log("1");   
// }else if(a === 1){
//     console.log("0");
// }

// 1054
// let a = prompt("a b").split(" ");
// if((Number(a[0]) === 1) && (Number(a[1])===1)) {
//     console.log("1");   
// }else {
//     console.log("0");
// }

// 1055
// let a = prompt("a b").split(" ");
// if((Number(a[0]) === 1) || (Number(a[1])===1)) {
//     console.log("1");   
// }else {
//     console.log("0");
// }

// 1056
// let a = prompt("a b").split(" ");
// if((Number(a[0]) != (Number(a[1])))) {
//     console.log("1");   
// }else {
//     console.log("0");
// }

// 1057
// let a = prompt("a b").split(" ");
// if((Number(a[0]) === (Number(a[1])))) {
//     console.log("1");   
// }else {
//     console.log("0");
// }

// 1058
// let a = prompt("a b").split(" ");
// if((Number(a[0]) === 0) || (Number(a[1])===0)) {
//     console.log("1");   
// }else {
//     console.log("0");
// }

// 1059
// let a = Number(prompt("2"));
// const b = a;
// let result = Number(~b);
// console.log(result);

// 1060
// let a = prompt("3 5").split(" ");
// const b = Number(a[0]);
// const c = Number(a[1]);
// let result = b&c;
// console.log(Number(result));

// 1061
// let a = prompt("3 5").split(" ");
// const b = Number(a[0]);
// const c = Number(a[1]);
// let result = (b|c);
// console.log(Number(result));

// 1062
// let a = prompt("3 5").split(" ");
// const b = Number(a[0]);
// const c = Number(a[1]);
// let result = (b^c);
// console.log(Number(result));

// 1063
// let a = prompt("123 456").split(" ");
// let result = Math.max(Number(a[0]), Number(a[1]));
// console.log(result);

// 1064
// let a = prompt("3 -1 5").split(" ");
// let result = Math.min(Number(a[0]), Number(a[1]), Number(a[2]));
// console.log(result);

// 1065
// let a = prompt("1 2 4").split(" ");
// for(i = 0; i < a.length; i++) {
//     if(a[i] % 2 == 0) {
//         console.log(a[i]);
//     }
// }

// 1066
// let a = prompt("1 2 8").split(" ");
// for(i = 0; i < a.length; i++) {
//     if(a[i] % 2 == 0) {
//         console.log("even");
//     }else{
//         console.log("odd")
//     }
// }

// 1067
// let a = Number(prompt("-2147483648"));
// let result = "";
// if(a < 0) {
//     result += ("minus" +"\n");
//     if((a % 2) == 0) {
//         result += ("even");
//     }else {
//         result += ("odd");
//     }
// }else if(a > 0) {
//     result += ("plus" +"\n");
//     if((a % 2) == 0) {
//         result += ("even");
//     }else {
//         result += ("odd");
//     }
// }else if(a == 0) {
//     result += "zero";
// }

// console.log(result);

// 1068
// let a = Number(prompt("score"));
// if(a >= 90 && a <= 100) {
//     console.log("A");
// }else if(a >= 70 && a <=89) {
//     console.log("B");
// }else if(a >= 40 && a<=69) {
//     console.log("C");
// }else if(a >= 0 && a <= 39) {
//     console.log("D");
// }

// 1069
// let a = prompt("grade");
// if(a == "A") {
//     console.log('Best!!');
// } else if(a == "B") {
//     console.log('Good!');
// } else if(a == "C") {
//     console.log('Run!!!');
// } else if(a == "D") {
//     console.log('Slowly');
// } else {
//     console.log('What!@~!');
// }

// 1070
// let month = Number(prompt("몇 월입니까?"));
// if(month > 12){
//     document.querySelector("#output").innerHTML = "잘못입력된 값입니다."
// }else {
//     if(month >= 3 && month <= 5) {
//         console.log("봄");
//     }else if (month >= 6 && month <= 8) {
//         console.log("여름");
//     }else if (month >= 9 && month <= 11) {
//         console.log("가을");
//     }else if (month >= 12 || month <= 2) {
//         console.log("겨울");
//     }    
// }

// 1071
// let result = "";
// while(true){
//     let num = Number(prompt("0입력시 종료"));
//     if(num == 0) {
//         break;
//     }else{
//         result += (num + "\n");
//     }
// }console.log(result);

// 1072
// let a = Number(prompt("5"));
// let b = prompt("1 2 3 4 5").split(" ");

// for(i = 0; i < a; i++) {
//     console.log(Number(b[i]) + "\n");
// }

// 1074
// let a = Number(prompt("5"));
// let result;
// while(result != 0) {
//     console.log(result);
//     result = a--;
// }

// 1075
// let a = Number(prompt("5"));
// let result;
// while(result != 0) {
//     result = --a;
//     console.log(result);
// }

// 1076
// let str = prompt("f");
// let a = str.charCodeAt(0);
// let result = "";
// for(i = 97; i <= a; i++){
//     result += (String.fromCharCode(i)+" ");
// }
// console.log(result);

// 1077
// let num = Number(prompt("4"));
// let result = "";
// for(i = 0; i <= num; i++){
//     result += (i +"\n");
// }
// console.log(result);

// 1078
// let num = Number(prompt("5"));
// let result = 0;
// for(i = 1; i <= num; i++){
//     if(i%2 === 0){
//         result += i;
//     }
// }
// console.log(result);

// 1079
// let result = "";
// while(true){
//     let str = prompt("q입력시 종료");
//     if(str === "q") {
//         result += str;
//         break;
//     }else{
//         result += (str + "\n");
//     }
// }console.log(result);

// 1080
// let num = 1;
// let sum = 0;
// let a = Number(prompt("55"));
// while(true){
//     sum += num++;
//     if(sum === a){
//         console.log((num-1));
//         break;
//     }
// }

// 1081
// let num = prompt("a b").split(" ");
// let a = Number(num[0]);
// let b = Number(num[1]);
// for(i = 1; i <= a; i++) {
//     for(l = 1; l <= b; l++){
//         console.log(i + " " + l);
//     }
// }

// 1082
// let a = prompt("A~F");
// let b = parseInt(a, 16);

// let result = "";

// for(i = 1; i <= 15; i++) {
//     let c = i.toString(16);
//     let anw = (a + "*" + c + "=" + (b*i).toString(16));
//     result += (anw.toUpperCase() + '\n');
// }
// console.log(result);

// 1083
// let num = Number(prompt());
// let result = "";

// for (let i = 1; i <= num; i++) {
//     let isClap = false;
    
//     if (i % 3 === 0) {
//         result += "X";
//         isClap = true;
//     }
    
//     if (i >= 10) {
//         let tensDigit = Math.floor(i / 10);
//         if (tensDigit % 3 === 0) {
//             result += "X";
//             isClap = true;
//         }
//     }
    
//     if (!isClap) {
//         result += i;
//     }
    
//     result += " ";
// }

// console.log(result);

// 1084
// let a = prompt("a b c").split(" ");

// let result1;
// let result2;
// let result3;
// let time = 0;
// for(result1 = 0; result1 < a[0]; result1++){
//     for(result2 = 0; result2 < a[1]; result2++){
//         for(result3 = 0; result3 < a[2]; result3++){
//             let result = result1 + " " + result2 + " " + result3 + " " + "\n";
//             console.log(result);
//             time += 1;
//         }
//     }
// }
// console.log(time);

// 1085
// let a = prompt("h b c s").split(" ");
// let result = (a[0] * a[1] * a[2] * a[3]) / (1024*1024*8);
// console.log(result.toFixed(1));

// 1086
// let a = prompt("w h b").split(" ");
// let result = (a[0] * a[1] * a[2]) / (1024*1024*8);
// console.log(result.toFixed(2) + "MB");

// 1087
// let a = Number(prompt("n"));
// let i = 1;
// let result = 0;
// while(true) {
//     if(result >= a) {
//         console.log(result);
//         break;
//     }else {
//         result += i++;
//     }
// }

// 1088
// let a = Number(prompt("a"));
// let result = "";
// for(i = 1; i <= a; i++) {
//     if(i%3 === 0){

//     }else{
//         result += (i + " ");
//     }
// }
// console.log(result);

// 1089
// let a = prompt("a d n").split(" ");
// let sum = Number(a[0]);
// for(i = 1; i<a[2]; i++){
//     sum += Number(a[1]);
// }
// console.log(sum);

// 1090
// let a = prompt("a d n").split(" ");
// let multiple = Number(a[0]);
// for(i = 1; i<a[2]; i++){
//     multiple = multiple * Number(a[1]);
// }
// console.log(multiple);

// 1091
// let a = prompt("a m d n").split(" ");
// let multiple = Number(a[0]);
// for(i = 1; i<a[3]; i++){
//     multiple = multiple * Number(a[1]) + Number(a[2]);
// }
// console.log(multiple);

// 1092
// let day = prompt("a b c").split(" ");
// nDay = 1;
// while(nDay % day[0] != 0 || nDay%day[1] != 0 || nDay%day[2]) {
//     nDay++;
// }
// console.log(nDay);

// 1093
// let checkNumber = Number(prompt("출석부른 횟수"));
// let check = "";
// for(let i = 1; i <= checkNumber; i++){
//     let val = Math.floor((Math.random()*23) + 1);
//     check += val + " ";
// }
// console.log(check);

// let n = 23;
// let arr = [];
// arr.length = n;
// for(let l = 1; l <= n; l++){
//     arr[(l-1)] = l;
// }
// console.log(arr);

// let arr2 = [];
// arr2.length = n;
// for(let j = 0; j < n; j++){
//     arr2[j] = 0;
// }
// // console.log[arr2];
// let k = 0;
// while(k <= (checkNumber-1)) {
//     for(let l =0; l < n; l++) {
//         if(Number(check.split(" ")[k]) == arr[l]) {
//             arr2[l] += 1;
//             break;
//         }
//     }
//     k++
// }

// console.log(arr2);

// 1094
// let checkNumber = Number(prompt("출석부른 횟수"));
// let check = "";
// for(let i = 1; i <= checkNumber; i++){
//     let val = Math.floor((Math.random()*23) + 1);
//     check += val + " ";
// }
// console.log(check);
// let checkarr = [];
// checkarr = (check.split(" ")).map(Number).filter((value)=>value != 0)
// console.log(checkarr)
// let reverse = [];
// reverse = checkarr.reverse();
// console.log(reverse);

// 코드 단순화
// let checkNumber = Number(prompt("출석부른 횟수"));
// let checkarr = [];

// for (let i = 0; i < checkNumber; i++) {
//     let val = Math.floor(Math.random() * 23) + 1;
//     checkarr.push(val);
// }

// console.log(checkarr);
// console.log(checkarr.reverse());

// 1095
// let checkNumber = Number(prompt("출석부른 횟수"));
// let checkarr = [];

// for (let i = 0; i < checkNumber; i++) {
//     let val = Math.floor(Math.random() * 23) + 1;
//     checkarr.push(val);
// }
// console.log(checkarr)
// let minValue = Math.min(...checkarr)
// console.log(minValue);


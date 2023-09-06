// 문제 풀이
// 1) 입력된 단어를 입력된 횟수만큼 반복해 출력하시오.
// 입력1 : love
// 입력2 : 3
// 출력 : love love love

// let str = prompt("단어를 입력하시오");
// let num = Number(prompt("반복할 횟수를 입력하시오"));
// let str1 = "";
// for (i = 1; i <= num; i++) {
//     str1 += str;    
// }
// console.log(str1);

// 문제 2)
// 입력: 없음
// 출력: "!@#$%^&*()"

// console.log('"!@#$%^&*()"')

// 문제 3)
// 입력: 없음
// 출력: "C:\Download\hello.cpp"
// 힌트 특수문자 출력방법 : \\

// console.log('"C:\\Download\\hello.cpp"');

// 문제 4)
// 입력 1.414213
// 출력 1.414213
// let num = Number(prompt("숫자를 입력하시오"));
// console.log(num);

// 문제 5)
// 입력 : 1.59254
// 출력 : 1.59
// 힌트 : 소수점 자르기 함수 : 숫자.toFixed(자를 자리수)

// let num1 = Number(prompt("숫자를 입력하시오"));
// console.log(num1.toFixed(2));

// 문제 6)
// 입력 125
// 출력 125 125 125

// let num = Number(prompt());
// console.log(num + " " + num + " " + num);

// 자료형 - 배열
// 자료형 : 문자열(String) , 숫자(Number) , 참/거짓(boolean/bool)
// 변수 : 변하는 값을 저장하는 장소(한가지 값만 저장) , let 변수명
// 배열 : 여러가지 값을 저장하는 장소, 변수 명 동일하게 사용 - 인덱스 번호
// 사용법 : 변수명[인덱스번호]
// 보충 설명 : a[0] == 0번방에 값, a[1] == 1번방에 값이 들어가 있음
// 예) a[0] = 1, a[1] = 2, .....

// 문제 7)
// 입력 = 1 2
// 출력 = 1 2
// 자바스크립트에서 문자열 자르기 함수 : 문자열.split("자를문자");
// 예) let arr = prompt("두 정수를 입력해 주세요").split(" ");
// arr(배열), arr[0] = 1, arr[1] = 2
// let arr = prompt("두 정수를 입력하시오.").split(" ");
// console.log(arr);
// alert(arr[1] + " " + arr[0]); // 2 1

// 문제 7)
// 입력 : A b
// 출력 : b A

// let arr = prompt("두 단어를 입력하시오").split(" ");
// alert(arr[1] + " " + arr[0]);

// 문제 8)
// 입력 : 3:16
// 출력 : 3:16

// let arr = prompt("시간을 입력하시오")
// alert(arr[0] + arr[1] + arr[2] + arr[3]);

// 문제 9)
// 입력 : 2013.8.5
// 출력 : 2013.08.05
// let arr = prompt("날짜를 입력하시오.").split(".");
// for(i = 0; i <= arr.length; i++) {
//     alert(arr[i]);
// }

// alert(arr[0] + ".0"+ arr[1] + ".0" + arr[2]);

// 문제 10)
// 입력 : 000907-1121112
// 출력 : 0009071121112

// let arr = prompt("주민등록번호를 입력하시오.").split("-");
// alert(arr[0] + arr[1]);

// 문제 11)
// 입력 Programing is very fun!!
// 출력 Programing is very fun!!

// let string = prompt("Programing is very fun!!")
// console.log(string);

// 문제 12)
// 입력 : 1.414213
// 출력 : 1

// let num1 = prompt(1.414213).split(".");
// console.log(num1[0]);

// 문제 13)
// 입력 : Boy
// 출력 : 'B' / 'o' / 'y'
// 힌트 : BOy(문자열) = 1문자의 합 == 문자들의 배열

// let arr = prompt("Boy");
// alert("'" + arr[0] + "'" + "\n" + "'" + arr[1] + "'" + "\n" + "'" +arr[2] + "'")

// 문제 14)
// 입력1 : 2147483648
// 입력2 : 2147483648
// 출력 : 4294967296

// let num1 = Number(prompt("2147483648"));
// let num2 = Number(prompt("2147483648"));
// alert((num1 + num2));

// 문제 15)
// 입력 : 75254
// 출력 : [70000] [5000] [200] [50] [4]
let num1 = prompt("75254");

console.log(num1[0]+"0000" + "\n" + num1[1]+"000"+"\n" + num1[2] + "00" + "\n" + num1[3]+"0" + "\n" + num1[4])

// let str = "0";
// for(i = 0; i <= num1.length; i++) {
//     for(a = num1.length; a >=0; a--){
//         let str2 = str*num1.length - i;    }
//     console.log(num1[i] + str2 + "\n");
// }
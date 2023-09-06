// 배열의 자바스크립트 내장함수들 소개
// ex) .toFixed(자리수) : 소수점자르기 함수 등(js 내장 함수)

// TODO : 배열 내장함수
//! 1) 두 배열 합치기 함수(***)
// 사용법 : 배열변수.contact(배열변수2)
// let nums = [1,2,3]; //숫자 배열
// let chars = ["a", "b", "c", "d"]; // 문자 배열

// 2개 합치기
// let numsChars = nums.concat(chars);
// console.log("numChars", numsChars);

// 2) 배열 내에 구분자를 이용해서 붙이기 함수
// 사용법 : 배열변수.join(구분문자열)
// let chars = ["a", "b", "c", "d"];
// let string1 = chars.join("/");
// console.log("string1", string1);

// 3) push() : 새로운 값을 원본배열의 뒤에 추가하는 함수
// 사용법 : 배열변수.push(값1, 값2, 값3 ......n);
// let nums = [1, 2, 3];
// let result = nums.push(4,5);
// console.log("nums", nums);

// 4) pop() : 마지막 값을 꺼내서 원본배열에서 제거하는 함수
// let chars = ["a", "b", "c", "d"];
// chars.pop();
// console.log("chars", chars);


// 5) 기타 : .push(값) (배열의 마지막에 추가)
//           .unshift(값) (배열의 앞에 추가)
//           .pop() (배열의 마지막값 제거)   
//           .shift() (배열의 처음값을 제거)

// 6) 배열의 수정
// let nums = [1,2,3,4,5];
// 배열의 1st 값 수정
// nums[0] = 10;
// nums[1] = 20;
// console.log("nums", nums)

// 7) 배열의 복사 :
// 사용법 : 배열 변수.slice(복사할_시작인덱스번호, 복사할 끝 인덱스번호);
//          [복사할 시작 인덱스 번호 ~ 복사할_끝인덱스번호-1까지 복사됨]
// let colors = ["red", "green", "blue", "white", "black"];
// let colors2 = colors.slice(2,4);
// console.log(colors2);

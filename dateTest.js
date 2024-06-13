// function testing () {

  
//   today.setDate(1);
//   today.getDate();
//   }
  
//   console.log(testing());
  
// // const please = {
  
//   const today = Date(day);

//   console.log(today);


// const try1 = Date.now(day);
// const try1 = new Date(day[]);

// console.log(try1);


// * 왜이렇게 꼬아놨지; 
// function lalala () {
// const now =  Date.now();

// // console.log(now); // * 이상한 숫자들 나옴
// new Date(now);
// return new Date; // *  리턴 까먹었었네 ㅠ

// }
// console.log(lalala()); // * 2024-06-12 + 시간 나옴


function lalala () {
const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  return [year, month+1, date];
  //let hmm = 
  // return new Date(year,month[date]); 
  // return new Date(getFullYear()); 
  //return new Date(hmm); 
  
  }

  console.log("lalala()의 값은 : ", lalala());
  // let num = Number(obj); 주어온 힌트 
  // console.log(lalala()); // * 2024-06-12 + 시간 나옴

  // ! obj 타입에서 number 타입으로 바꾸기 작업 필요!

let test = lalala();

let value = Number("123");

let num = Number(test);
console.log("num 의 타입은 : ", typeof num, "num의 값은: ", num);
console.log(typeof(test));  // * object 로 나온다.
console.dir(test);
console.log(test);  // * 2024-06-12 + 시간 나옴
console.log("lalala 의 타입은 : " , typeof lalala);
console.log("lalala()의 타입은 : ", typeof lalala());
console.log("이것은:", lalala());

let innerFunc = () => {
  // if(new Date(test) === 12 ) {
  // if(test === new Date("2024-06-12")) {
  // if(test === "2024-06-12") {
if(test[0] === 2024) {
  if(test[1] === 6) {
    if(test[2] === 13) {
      return "오우 13일이구나"    
    } else {
      "잉 오늘 3일 아닌뎀"
    }
  }
}
}

console.log("inner펑션의 값은", innerFunc());
// ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
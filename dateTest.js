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

  return new Date; 
  
  }
  
  // console.log(lalala()); // * 2024-06-12 + 시간 나옴
let test = lalala();
console.log(typeof(test));
console.dir(test);
console.log(test);  // * 2024-06-12 + 시간 나옴

let innerFunc = () => {
  // if(new Date(test) === 12 ) {
  // if(test === new Date("2024-06-12")) {
  // if(test === "2024-06-12") {
if(test.getFullYear === 2024) {
  if(test.getMonth === 6) {
    if(test.getDate === 13) {
      return "오우 13일이구나"    
    } else {
      "잉 오늘 3일 아닌뎀"
    }
  }
}
}

console.log(innerFunc());
// 기본
// const basicData = {
//   name : "",
//   age: 0,
//   job : ""
// }

// const component = () => {
//  let obj = {}; 


// const decision = () => {};

// return `<html></html>`;
// }



// 추가 시작
// const basicData = {
//   name : "",
//   age: 0,
//   job : ""
// }


// const component = () => {
//   const basicData = {
//     name : "",
//     age: 0,
//     job : "" 이렇게 넣을 수도 있는데 이것은 정적이라 다시 빼기
  
//   }


const basicData = () => {

return {
  name : "백지원",
  age: 100,
  job : "학생"
  }
}
  


const component = () => {
  let obj = basicData();
  }


// return 이 객체니까 let obj 의 obj 가 객체겠거니
// * 정적인 함수를 깨기 위해서 바깥에 다른 함수 호출출


const decision = () => {};

return `<html></html>`;

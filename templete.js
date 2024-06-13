// * 미션을 위해 주어진 예제 코드

// const tagComponent = (tagName, textNode) => {
//   return `<${tagName}>${textNode}</${tagName}>`;
// }

// const container = () => {
//   return `
//     ${tagComponent('header', '헤더부분')}
//     ${tagComponent('main', '메인부분')}
//     ${tagComponent('footer', '푸터부분')}
//   `;
// }

// console.log(container());

// 여기 까지의 결과는 :
// <header>헤더부분</header>
// <main>메인부분</main>
// <footer>푸터부분</footer>


// * 미션 : 위의 코드를 사용해서
// * 1. 날짜를 구해서
// * 2. 함수에 적용

// * "12일(오늘)이라면 A 방식"
// * "12일(오늘)이 아니라면 B방식"

// * "(오전)이라면 A방식"
// * "(오후)라면 B방식"

// 여기서부터 미션 시작~

const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
}

const container = () => {
  return `
    ${tagComponent('header', '헤더부분')}
    ${tagComponent('main', '메인부분')}
    ${tagComponent('footer', '푸터부분')}
  `;
}

// * 날짜 구하는 함수


// ! obj 타입에서 number 타입으로 바꾸기 작업 필요!
function lalala () {
  const today = new Date();
  
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  
  // return [year, month+1, date];
  return {year, month, date};
  
  
  //let hmm = 
  // return new Date(year,month[date]); 
  // return new Date(getFullYear()); 
  //return new Date(hmm); 
  
  }
  
  let what = lalala();
    // console.log("lalala()의 값은 : ", lalala());
    // console.log("lalala의 타입은 : ", typeof lalala, "lalala의 값은 : ", lalala); // lalala의 타입은 :  function . lalala의 값은 :  [Function: lalala]
    console.log("what의 type은 : ", typeof what, "what의 값은 : ", what);
    console.log("lalala의 타입은 : ", typeof lalala(), "lalala의 값은 : ", lalala()); // lalala의 타입은 :  number . lalala의 값은 :  13
    

  
  
  let test = lalala();
  
  console.log("test의 타입은 : ", typeof test, "test 의 값은 : ", test); // test의 타입은 :  number . test 의 값은 :  13
  // let value = Number("123");
  

  let num = Number(test); // *  test가 year,month,date 날짜(숫자)를 담고 있는 객체라서 넘버화 가능?
  // console.log("num 의 타입은 : ", typeof num, "num의 값은: ", num); // num 의 타입은 :  number num의 값은:  13
  // console.log("test 의 넘버화 타입은 : ", typeof(test), "test 넘버화의 값은 : ", test);  // number
  // console.dir(test);
  // console.log(test); 

  // console.log("lalala 의 타입은 : " , typeof lalala);
  // console.log("lalala()의 타입은 : ", typeof lalala());
  // console.log("이것은:", lalala());
  
  let innerFunc = () => {
    // if(new Date(test) === 12 ) {
    // if(test === new Date("2024-06-12")) {
    // if(test === "2024-06-12") {

    // * 1 요것도 해보고
  if(num.getFullYear === 2024) {
    if(num.getMonth === 6) {
      if(num.getDate === 13) {

  // * 2 요것도 해보고
  // if(num.year === 2024) {
  //   if(num.month === 6) {
  //     if(num.date === 13) {

// * 3 요것도 해보고
        // if(lalala.year === 2024) {
        //   if(lalala.month === 6) {
        //     if(lalala.date === 13) {

// * 4 요것도 해보고
        // if(lalala.getFullYear === 2024) {
        //   if(lalala.getMonth === 6) {
        //     if(lalala.getDate === 13) {


// ! 모두 undefined 가 뜬다

        return "오우 13일이구나"    
      } else {
        "잉 오늘 13일 아닌뎀"
      }
    }
  }
  }
  
  console.log("innerFunc()의 값은 : ", innerFunc()); // undefined
  console.log("innerFunc의 값은 : ", innerFunc); // [Function: innerFunc]
  
  let finalTest = innerFunc(); // * innerFunc이 undefined 로 나오니까 finalTest는 걍 문자열로 나오는거겠지?,,
  console.log("finalTest의 타입은 : ", typeof finalTest, "finalTest의 값은 : ", finalTest); // finalTest의 타입은 :  undefined . finalTest의 값은 :  undefined
// * 데이터 타입 변환 test 창입니다.


// * number -> string 바꾸기
var x = 10;

var str = x.toString();
console.log(typeof str,str);  // string , 10 나온다
// * 아 헐 log()에 한가지 이상 주문 넣을 수 있구나?!! 쉽표 써서!
console.log(str); // 10 나온다

console.log(typeof x, x); // number, 10 나온다
// * 결론 -> x 변수의 값이 변경된 것은 아니다. 
// * x = ver.1  str = ver.2 정도로 생각하면 될 듯?


// * number -> 강제 string화(JS 엔진에 의해)
var x = 10;
var str = x + '';
console.log(typeof str, str); // string , 10 나온다
// * 굳이 tostring 안쓰고 + '' 쓰는게 더욱 간결하고 이해하기 쉬울 수도 있다!

console.log(typeof x, x); // number 10 나온다

// ! 원시 값은 변경 불가능한 값이다. 
// ! 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것이다.
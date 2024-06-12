const component = () => {
let obj = {
  name : "백지원",
  age : 31,
  job : "학생"
};
// * 우선은 생성자 함수 제외 하고 실습



// * 성인 인증 만들기
let innerFunc = () => {
if(obj.age > 20) {
  return "여름엔 역시 맥주랑 담배지"
} else {
  return "여름엔 역시 과자랑 요쿠르트가 최고지"
}
}
// * 인스타 좋아요 개념 -> 좋아요 누르면 하트 나오게
// * inner func은 helper 함수이다.



let anotherFunc = () => {
  if(obj.job === "미남") {
    return "이 양반 문제있네";
  } else {
    return "진실을 알고 있다";
    }
  }




return `
<h1>${obj.name}</h1>
<h2>${innerFunc()}}</h2>
<h3>${anotherFunc()}}</h3>
`;
}
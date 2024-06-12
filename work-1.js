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


// const basicData = () => {

// return {
//   name : "백지원",
//   age: 100,
//   job : "학생"
//   }
// }
  


// const component = () => {
//   let obj = basicData(); 
//   }
// return 이 객체니까 let obj 의 obj 가 객체겠거니
// * 정적인 함수를 깨기 위해서 바깥에 다른 함수 호출출






// const component = () => {
//   let obj = new basicData("백지원","100","학생"); //  todo ? 어떻게 처리?
// * 과제 :   
// * 1. 생성자 함수 setter로 규격 만들기
// * 2. 생성자 함수로 객체 생성하기
// * 3. 생성자함수 출저를 검사하기 -> instanceof
// * 4. true -> "문자열 HTML" 리턴
// * 5. false -> throw new Error()


  class BasicData {
    constructor() {
      this.name = "";
      this.age = 0;
      this.job = "";
    }

    set name(value) {
      this._name = value;
    }

get name() {
  return this._name;
}

    set age(value) {
      this._age = value;
    }

get age() {
  return this._age;
}


    set job(value) {
      this._job = value;
    }

get job() {
  return this._job;
  }
}

const basicData = new BasicData();
basicData.name = "백지원";
basicData.age = 100;
basicData.job = "학생";

console.log("name:", basicData.name);
console.log("age:", basicData.age);
console.log("job:", basicData.job);

// * 까지 내가 만든거

// * 여기서 부터는 강사 코드


class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  set name(value) {
    if(typeof(value) ==="string") {
      this._name = value;
    } else {
      throw new Error("이름은 문자열이어야 합니다.");
    }
  }

  get name() {
    return this._name;
  }

  set age(value) {
    if(typeof(value) ==="number") {
      this._age = value;
    }
  }

  get age() {
    return this._age;
  }

  set job(value) {
    if(typeof(value) ==="string") {
      this._job = value;
    }
  }

  get job() {
    return this._job;
  }
}

const component = () => {
  let obj = new BasicData("공욱재", 26, "미남");

  const decision = () => {
    if (obj instanceof BasicData) {
      
      return `
      <html>
      <body>
      <h1>이름: ${obj.name}</h1>
      <h2>나이: ${obj.age}</h2>
      <h3>직업: ${obj.job}</h3>
      </body>
      </html>
      
      `;
    } else {
      console.error('규격 미달');
    }

  };

  return decision();
}

console.log(component());
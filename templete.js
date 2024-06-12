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

// * 미션 : 위의 코드를 사용해서
// * 1. 날짜를 구해서
// * 2. 함수에 적용

// * "12일(오늘)이 아니라면 A 방식"
// * "12일(오늘)이라면 B방식"

/*
  값 전체가 숫자인 것을 체크하는 정규표현식 작성
  1. 함수의 파라미터로 값을 전달
  2. 값이 모두 숫자이면 true, 하나라도 숫자가 아니면 false
  3. 값의 자릿수는 유동적
*/

// \d+만 하면 숫자가 발견될 경우 뒤에 문자가 있더라도 true를 반환하기 때문에
// 대상 문자열의 처음부터 끝까지 대상으로 지정하기 위해 ^, $를 사용해야 한다.
function check(input){
  return /^\d+$/.test(input);
}

js.log(check('1234'));
js.log(check('1234AA'));
js.log(check('AA1234'));
js.log(check(' '));

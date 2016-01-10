// 콤마 삽입
// 세 자리 마다 콤마를 삽입
/*
  /(^[+-]?\d+)(\d{3})/

  (^[+-]?\d+)는 욕심 많은 매치이므로 전체를 매치시키게 된다. 이 때문에 뒤의 (\d{3})가 수행되지 않을 수 있는데
  정규표현식의 최적화를 통해 뒤의 패턴도 수행이 된다. (뒤에서부터 패턴 매칭 - 패턴도 뒤에서부터, 매칭 대상 값도 뒤에서부터)
  그러므로 123456789의 경우 첫번째 괄호에 123456이 캡처되고 두번째 괄호에 789가 캡처된다.
*/

var pattern = /(^[+-]?\d+)(\d{3})/;
function insertComma(value){
  var str = value.toString();
  while(pattern.test(str)){
    str = str.replace(pattern, '$1' + ',' + '$2');
  }
  return str;
}

var result = insertComma(123456789);
js.log(result);

result = insertComma(-123456789);
js.log(result);

result = insertComma(-1234567);
js.log(result);

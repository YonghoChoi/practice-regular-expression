/*
  1. 파라미터 값으로 63개 문자(\w)가 들어온다.
  2. 10~50자까지 사용할 수 있다.
  3. 뒤에서 부터 문자를 4개씩 "##"으로 구분하여 출력한다.
*/

function convertString(value){
  var str = value.toString();
  var pattern = /(\w+)(\w{4})/;
  while(pattern.test(str)){
    str = str.replace(pattern, '$1' + '##' + '$2');
  }
  js.log(str);
}

convertString('23kj4hkj34b3kjtbk2j3rbk2j4');

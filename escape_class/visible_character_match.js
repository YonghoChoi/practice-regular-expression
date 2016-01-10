// 보이는 문자 매치

var result = '\u0009\u0061'.match(/\S/);
js.log(result);

result = '한글'.match(/\S/);
js.log(result);

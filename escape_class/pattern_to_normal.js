// 패턴 문자의 문자화

var result = '^ABC'.match(/^A/);
js.log(result);

result = 'B^AC'.match(/\^A/);
js.log(result);

result = '\\AB'.match(/\\A/);
js.log(result);

result = new RegExp('\\^B').exec('A^BC');
js.log(result);

result = new RegExp('\^A').exec('ABC');
js.log(result);

// 숫자 이외 매치

var result = '1ABC23'.match(/\D/);
js.log(result);

// 각각 매치 되므로 [ABC]로 묶여서 반환되지 않고 [A,B,C]로 반환
result = '1ABC23'.match(/\D/g);
js.log(result);

result = 'ABC3'.match(/^\D+$/);
js.log(result);

result = 'ABC'.match(/^\D+$/);
js.log(result);

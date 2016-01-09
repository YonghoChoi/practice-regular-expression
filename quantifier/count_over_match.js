// 수 이상에 매치
var result = 'AAAA'.match(/A{2,}/);
js.log(result);

result = 'AAAA'.match(/A{5,}/);
js.log(result);

result = 'AAAABB'.match(/A{2,}B/);
js.log(result);

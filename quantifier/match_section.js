// 매치 구간 지정
var result = 'AAAAA'.match(/A{2,4}/);
js.log(result);

result = 'AAA'.match(/A{2,4}/);
js.log(result);

// 범위에 0을 지정하는 경우 매치 실패가 되더라도 성공으로 해달라는 의미 (빈 문자열을 반환)
result = 'CCC'.match(/A{0,4}/);
js.log(result);

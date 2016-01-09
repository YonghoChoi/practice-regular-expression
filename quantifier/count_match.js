// {} 앞의 문자가 {}안의 수만큼 매치되면 매치 성공
var result = 'AAA'.match(/A{2}/);
js.log(result);

var result = 'AAA'.match(/A{4}/);
js.log(result);

// 앞에서부터 매치 할 경우 AA 다음에 A이므로 매치 실패가 된다.
// 정규표현식 최적화에 의해 뒤에서 앞으로 매치가 되므로 K를 먼저 매치한 후 그 앞의 AA를 매치하게되어 매치에 성공하게 된다.
var result = 'AAAKK'.match(/A{2}K/);
js.log(result);

// ^ (Caret)을 사용하면 패턴에 해당하는 문자열이 대상 값의 맨 앞부터 매치가 되어야 결과가 반환
var result = '12_34_12'.match(/^12/);
js.log(result);

// 대상 값의 시작이 패턴 값인 34로 시작하지 않으므로 매치되지 않음
result = '12_34_12'.match(/^34/);
js.log(result);

// 줄바꿈이 있는 경우 줄이 바뀐 위치가 시작위치가 됨
// 그러므로 m 플래그를 주면 각 라인 별로 매치를 함.
var value = 'first\u000aStart\u000aStart';
result = value.match(/^Start/m);
js.log(result);

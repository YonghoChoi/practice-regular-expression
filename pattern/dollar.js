// $ 는 대상 값의 맨 뒤에서부터 매치를 시작
var result = '12_34_56'.match(/56$/);
js.log(result);

// 대상 값의 맨 뒤 값이 34가 아니므로 매치되지 않음
var result = '12_34_56'.match(/34$/);
js.log(result);

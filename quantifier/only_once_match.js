// +?는 한번만 매치
var result = 'AAAAAC'.match(/AA+?/);
js.log(result);

// + 를 사용하면 모든 AA를 매치
result = 'AAAAAC'.match(/AA+/);
js.log(result);

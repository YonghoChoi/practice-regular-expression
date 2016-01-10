// 제외

// A를 제외한 첫번째 문자 반환
var result = 'ABCD'.match(/[^A]/);
js.log(result);

// A,B,D를 제외한 첫번째 문자를 반환
result = 'ABCDE'.match(/[^ABD]/);
js.log(result);

// 1-4 구간의 문자를 제외한 첫번째 문자를 반환
result = '15257'.match(/[^1-4]/g);
js.log(result);

// 정,표를 제외한 첫번째 문자를 반환
result = '정규표현식'.match(/[^정표]/g);
js.log(result);

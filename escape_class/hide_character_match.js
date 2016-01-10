// 보이지 않는 문자 매치

// \u0009는 탭 문자
var result = /\s/.test('\u0009');
js.log(result);

result = 'az'.match(/\s/);
js.log(result);

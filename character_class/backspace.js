// 백스페이스

var result = '\u0008'.match(/[\b]/);
js.log(result);
js.log(result.length);

result = /b/.test('\u0008');
js.log(result);

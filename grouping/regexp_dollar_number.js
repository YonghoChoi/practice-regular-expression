// RegExp.$숫자

var result = 'ABCDEF'.match(/AB(C|M)(D|P)EF/);
js.log(result);

js.log(RegExp.$1);
js.log(RegExp.$2);
js.log(RegExp.$3);
js.log(RegExp.$0);
js.log(RegExp.$12);

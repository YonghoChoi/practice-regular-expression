// 캡처하지 않는 그룹

var result = 'ABCDEF'.match(/AB(?:CD)EF/);
js.log(result);
js.log(RegExp.$1);

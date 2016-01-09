// 매치된 엘리먼트들은 묶어서 반환 ([A,A,A]가 아닌 AAA로 반환됨)
var result = 'AAAC AAC'.match(/A+/);
js.log(result);

result = 'AAAC AAC'.match(/A+/g);
js.log(result);

// 모든 문자 매치
result = 'abcde가나다'.match(/.+/);
js.log(result);

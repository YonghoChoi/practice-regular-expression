// search를 사용하면 매치된 문자열의 인덱스를 반환
var result = 'CD_AB_EF'.search(/AB/);
js.log(result);

// g플래그를 사용해도 매치된 첫 번째 인덱스 하나를 반환
result = 'CD_AB_AB'.search(/AB/g);
js.log(result);

// 매치 대상의 끝에서부터 매치
// 매치된 결과 단어의 첫 단어의 인덱스 반환
result = 'AB_CD_CD'.search(/CD$/);
js.log(result);

// 매치되지 않는 경우 -1 반환
result = 'AB_CD'.search(/EF/g);
js.log(result);

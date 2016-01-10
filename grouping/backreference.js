// Back Reference

var result = 'ABCDEF_CD'.match(/AB(C|K)(D|X)EF_/);
js.log(result);

// \숫자로 캡처한 값 참조
// \1은 첫번째 캡처한 값인 결과 Array의 두번쨰 엘리먼트 (첫번째 엘리먼트는 매치 결과값)
result = 'ABCDEF_CD'.match(/AB(C|K)(D|X)EF_\1\2/);
js.log(result);

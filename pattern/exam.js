/*
  반환 값을 받기 위한 정규표현식 작성
  매치 대상 : ABCDE ABCXE
  match() 메소드를 사용
*/

// 반환 값 : [BC, DE, BC]
// 조건 : 대체(|) 패턴 문자 사용
var target = "ABCDE ABCXE";
var result = target.match(/BC|DE/g);
js.log(result);


// 반환 값 : [ABCD, BCXE]
// 조건 : dot(.) 패턴 문자 사용
result = target.match(/.BC.|..XE/g);
js.log(result);

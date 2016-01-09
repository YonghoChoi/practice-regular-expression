// 문자 집합

var result = 'ABCDE'.match(/[ABK]/);
js.log(result);

result = 'ABCDE'.match(/[]/);
js.log(result);

// 패턴에 작성한 순서로 매치하면 B,A,C가 매치되지만
// 반환은 매치된 것 중에서 매치 대상에 작성한 순서를 적용한다. (매치 대상의 index 기준)
// A를 처음에 작성했으므로 A가 반환
result = 'ABCDE'.match(/[BAC]/);
js.log(result);

// global이어도 반환은 매치 대상 문자열의 index가 기준이다.
result = '정규표현식'.match(/[표정]/g);
js.log(result);

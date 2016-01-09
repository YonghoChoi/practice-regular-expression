var result = '12_34_56'.match(/23|56|34/);
js.log(result);

// 대체의 순서가 바뀌더라도 매치 대상의 값이 기준이기 때문에
// 인덱스가 작은 34가 반환된다.
result = '12_34_56'.match(/23|34|56/);
js.log(result);

// a와 abc의 검색 결과 인덱스가 같으므로 패턴의 순서에 따라 a의 결과가 반환된다.
result = /c|bc|a|abc/.exec("abc");
js.log(result);

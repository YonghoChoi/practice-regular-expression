var result = /12/.exec('12_34_12');
js.log(result);
js.log(result.index); // 매치된 인덱스를 반환
js.log(result.input); // 매치 대상 문자열을 반환
// 매치된 인덱스와 문자열을 반환할 수 있는 것은 String 오브젝트에서 exec()를 호출하기 때문이다.

// g플래그를 사용하더라도 처음 매치된 문자열 하나를 배열로 반환
result = /12/g.exec('12_34_12');
js.log(result);

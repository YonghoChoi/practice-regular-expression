var result = '12_34_56'.split('_'); // 문자열로 패턴을 지정
js.log(result);

result = '12_34_56'.split(/_/); // 위와 결과가 같음
js.log(result);

result = '12_34_78'.split('S'); // 구분자가 매치 되지 않으면 하나의 배열 엘리먼트로 반환
js.log(result);

result = '12_34_78'.split();  // 위와 동일
js.log(result);

// 빈문자열도 구분자가 될 수 있음 (문자열이 문자 단위로 쪼개짐)
result = '12_34_78'.split('');
js.log(result);

// 구분자의 앞,뒤에 문자가 없으면 빈문자열을 반환
result = '_12_34'.split('_');
js.log(result);

result = '12_34_78'.split('78');
js.log(result);

// 구분자까지 포함해서 반환
result = '12A34A56'.split(/(A)/);
js.log(result);

// 결과에서 두번째 파라미터에 숫자값 만큼만 반환
result = '12_34_56'.split('_', 2);
js.log(result);

js.log('안녕하세요'.match(/안녕/));

// 변수에 패턴 할당
var pattern = /sp/;
js.log('sports'.match(pattern));

// match의 결과는 Array
js.log(Array.isArray('sports'.match(pattern)));

// match되지 않으면 null 반환
var result = 'sports'.match(/spt/);
js.log(result);

// 매치 될 것이 여러개 있더라도 처음 매치되는 것만 반환
result = 'sports'.match(/s/);
js.log(result);

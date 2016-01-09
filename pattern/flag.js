// i 플래그를 작성하면 대소문자를 무시하고 매치
// 매치가 되면 매치된 문자열을 변환하지 않고 반환 (매치 대상 값을 기준으로 반환)
var result = 'SPORTS'.match(/s/i);
js.log(result);

// RegExp의 두번째 파라미터에 플래그 전달
var regexp = new RegExp('s', 'i');
result = regexp.exec('SPORTS');
js.log(result);

// g 플래그를 작성하면 매치 대상을 반복하여 패턴을 매치
// 매치된 모든 문자열을 배열로 반환
result = 'SPORTS'.match(/s/ig);
js.log(result);

// exec의 경우 g를 사용하더라도 결과값은 하나만 반환한다.
// 이는 exec의 그럴 수 밖에 없는 이유가 있다. 뒤에서 설명
regexp = new RegExp('s', 'ig');
result = regexp.exec('SPORTS');
js.log(result);


//^(Caret)은 매치 대상 첫 문자부터 패턴을 매치 (문자열 중간에 패턴이 매치 될 수 있어도 매치되지 않음)
//m 플래그를 사용하지 않으면 개행될 경우 패턴 매치를 종료한다.
var value = 'sports\nMultiLine\nMultiLine';
result = value.match(/^Multi/);
js.log(result);

// m 플래그를 사용하여 개행된 문자들도 매치
// 기본 매치의 경우 매치되면 수행을 종료하기 때문에 Multi가 하나만 출력됨
result = value.match(/^Multi/m);
js.log(result);

// g 플래그를 사용하여 global로 매치를 수행
result = value.match(/^Multi/gm);
js.log(result);

// 문자열로 매치하면 m플래그를 사용한 것과 같다.
result = value.match(/Multi/);
js.log(result);

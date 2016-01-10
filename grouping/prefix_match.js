// 전방 매치

// ?= 위치를 기준으로 앞의 문자열을 매치한다.
// C의 위치를 찾고 그 앞의 문자열을 매치한다.
// 이 때 매치 문자열은 기준 값인 C를 포함하여 매치를 시도하는데 결과에는 기준이 되었던 C는 제외한다.
var result = 'ABCC'.match(/AB(?=C)/);
js.log(result);

// 기준값인 C의 앞 문자열인 ABD와 패턴에 의한 값인 ABC를 비교했으므로 매치 실패
result = 'ABDCC'.match(/AB(?=C)/);
js.log(result);

result = 'ABCH'.match(/AB(?=C)CH/);
js.log(result);

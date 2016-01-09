// 123S는 매치되지 않지만 123으로 매치하면 매치 성공
// ? 앞에 문자가 매치되지 않아도 매치로 처리하므로 최종적으로 매치 성공
// ? 앞의 문자가 매치되면 매치된 문자도 같이 반환
var result = '123AAA'.match(/123S?/);
js.log(result);

// 매치 대상에 A가 3개 있지만 하나만 매치
var result = '123AAA'.match(/123A?/);
js.log(result);

// *앞의 A를 모두 매치 (?와 *의 차이)
var result = '123AAA'.match(/123A*/);
js.log(result);

// 123S가 매치되고 다음에 ?가 있으므로 문자 하나가 매치되지 않아도 매치로 처리
// 하지만 이어서 S가 있으며 K와 매치되지 않으므로 최종적으로 매치가 실패
var result = '123SSSK'.match(/123S?K/);
js.log(result);

// *는 하나만 매치하지 않고 모두 매치하므로 매치된 K까지의 모든 문자를 반환 (?와 *의 차이)
var result = '123SSSK'.match(/123S*K/);
js.log(result);

// 최대로 매치


var result = 'AABKKCD'.match(/(AA|BA|B|C)/);
js.log(result);

/*
  1. AA가 매치되지만 * 때문에 AA는 클로저에 저장되고 계속 매치를 수행한다.
  2. 다음 BA로 클로저에 저장된 AA를 붙여서 매치되는지 찾지만 매치되는게 없으므로 패쓰
  3. B를 클로저에 저장된 AA와 붙여서 매치되는지 찾으면 AAB와 매치됨
  4. 이런 식으로 끝까지 클로저와 남은 패턴을 붙여서 매치 대상과 비교해본다.
  5. 결과적으로 AAB가 매치되었고 마지막으로 매치에 성공한 패턴을 캡처한다.
*/
var result = 'AABKKCD'.match(/(AA|BA|B|C)*/);
js.log(result);

/*
  매치대상 : AABAAC
  패턴 : (AA|BA|B|C)*
    1. AA       -> match : AA, 클로저 : AA, capture 대상 : AA
    2. AABA     -> match : AABA, 클로저 : AABA, capture 대상 : BA
    3. AABAB    -> match : 매치 실패, 클로저 : AABA(변화없음), capture : BA(변화없음)
    4. AABAC    -> match : 매치 실패, 클로저 : AABA(변화없음), capture : BA(변화없음)

    => 결과 : match된 값은 AABA, capture된 값은 BA
    => 결과 값 : [AABA, BA]
*/
result = 'AABAAC'.match(/(AA|BA|B|C)*/);
js.log(result);


// 이미 매치되었던 AA까지 다시 붙여서 매치함
// 최대한 매치시키려는 성향때문
result = 'AABAAC'.match(/(AA|B|BA|C)*/);
js.log(result);

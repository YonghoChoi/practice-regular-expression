// Backtracking

/*
  1. 패턴이 순차적으로 대상 값과 매칭을 하게 되는데 비교 대상값 인덱스 0번 부터 비교를 시작한다.
  2. 0번 인덱스를 비교해서 매치가 될 경우 lastIndex값이 증가하여 1번 인덱스를 셋팅하게 된다.
  3. swiA?에 의해서 매치 대상인 swim을 끝까지 매치 성공하게 되는데 이때 lastIndex는 4가 된다.
  4. 하지만 패턴에서 swiA? 뒤에 m이 남은채로 매치가 끝났으므로 전체 패턴에 대한 매치 수행에는 실패하게 된다.
    그래서 수행할 패턴이 남은 경우 lastIndex를 -1 해가며 남은 패턴을 수행하게 된다.
  5. lastIndex - 1을 하게 되면 3이 되어 매치 대상 문자열의 m을 가리키게 되고 이 m과 남은 패턴 m이 매치를 수행하게된다.

*/
var result = 'swim'.match(/swiA?m/);
js.log(result);

// 욕심 없는 패턴 문자는 되도록 적게 매치하려는 특성으로 인해 s만 매치하게 된다.
result = 'swim'.match(/s.*?/);
js.log(result);

// 욕심 없는 패턴이라도 최대한 성공시키려는 정규표현식의 최적화 때문에 모든 패턴이 성공할 수 있도록
// 매치를 수행한다. (절차는 이해 못함.)
result = 'swim'.match(/s.*?m/);
js.log(result);


result = 'AABAAC'.match(/(AA|AABAAC|B)/);
js.log(result);

// 최대로 매치하려고 노력함. (최종적으로 매치되지 않아도 매치 된것 만이라도 반환)
result = 'AABAAC'.match(/(AA|AABAAC|B)*/);
js.log(result);

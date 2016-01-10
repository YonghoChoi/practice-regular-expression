// undefined 메커니즘

/*
  1. 밖에서 안으로, 왼쪽에서 오른쪽으로 undefined를 설정
    - '('(ball)|(base)')' 바깥의 괄호에 해당하는 것이 배열의 두번째 엘리먼트에 undefined로 할당
    - (base) 가 세번째 엘리먼트에 undefined로 할당
    - (ball) 이 네번쨰 엘리먼트에 undefined로 할당
    -> ['', undefined, undefined, undefined]
  2. 처음에 매치하면 base가 매치
    - baseball에서 base가 앞에 있으므로 ball이 아닌 base가 매치
    - ((ball)|base) 형태가 됨
      - 소괄호()의 우선순위가 더 높지기 때문에 ball이 캡쳐가 되야 하지만 캡처하기 전 대체도 함께 생각을 해서 해당 ball이 실행되지 않을 경우 Array의 엘리먼트에 포함되지 않는다.
    -> ['', undefined, undefined, base]
    -> 그룹화 캡처 과정은 아래에서 다시 정리
  3. 다시 매치하면 base가 매치
    -> ['', base, undefined, base]
  4. 마지막으로 base로 baseball을 매치하게 되며 첫번째 인덱스에 값이 설정된다.
    -> [base, base, undefined, base]
*/
var result = /((ball)|(base))/.exec("baseball");
js.log(result);


/*
  그룹화가 캡처되는 과정
  1. ((ball)|(base))
  2. (ball|(base))    -> 괄호와 같은 레벨에 있는 연산이 남아있기 때문에 아직 최종 값이 결정되지 않은 상태이므로 캡처되지 않는다.
  3. (ball|base)      -> 같은 레벨에 대체(|)가 남아있기 때문에 캡처되지 않는다.
  4. (base)           -> 같은 레벨의 모든 연산이 수행됐으므로 최종값이 base에 대해 캡처가 수행된다. => ['', undefined, undefined, base]
  5. base             -> 가장 바깥의 소괄호가 수행됐고 같은 레벨에 연산할 것이 더이상 없으므로 캡처가 수행된다. => ['', base, undefined, base]
*/

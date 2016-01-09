// 최소 매치

var result = 'ABCABC'.match(/ABC*?/);
js.log(result);

result = 'ABCABC'.match(/ABZ*?/);
js.log(result);

result = 'AAAAA'.match(/A*?/);
js.log(result);
js.log(result.index);

/* 매치 절차
  1. /A*?/에 의해 'AAAKK'의 첫번쨰 인덱스인 A에 매치된다.
  2. 이후 /A*?K/ 의 K를 매치하려고 보니 AK에 해당하는 문자열이 매치되지 않는다.
  3. 그럼 이미 매치된 A는 특정 공간에 저장되고 다음 문자로 이동하여 AA와 K를 결합하여 매치를 시도한다.
  4. AAK 또한 해당되는 문자열이 없으므로 'AA'를 또 저장 후 다음 문자로 이동한다.
  5. AAAK는 해당되는 문자열이 존재하므로 매치에 성공하게 된다.
    ==> 패턴의 전체 부분에 대해 매치를 시도한다. A*?에 성공했다고 해서 매치가 끝나는 것이 아니고 K까지 성공을 해야한다.
    전체가 매치될 수 있는 경우에서 최소로 매치하도록 하는 것이 최소 매치.
*/
result = 'AAAKK'.match(/A*?K/);
js.log(result);

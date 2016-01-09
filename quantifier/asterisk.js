// 욕심 많은 매치 *

var result = '12A'.match(/12C*/); // *앞의 C가 매치되지 않아도 12가 매치되므로 매치 성공
js.log(result);

var result = 'AAAC'.match(/A*/);
js.log(result);

result = '12AB_12EFG'.match(/12C*/g);
js.log(result);

result = '123AB_12EFG'.match(/123C*/);
js.log(result);

result = 'ABC_123'.match(/123C*/);
js.log(result);

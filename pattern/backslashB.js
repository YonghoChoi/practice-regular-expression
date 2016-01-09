// \B의 위치에 63개 문자들(영문 대/소문자, 숫자, 언더바)이 오게되면 매치 성공
var result = 'A12A 12B 12A'.match(/12\B/g);
js.log(result);

result = 'A12 B12 12'.match(/12\B/g);
js.log(result);

result = 'A12 12 C12'.match(/\B12/g);
js.log(result);

result = 'A12B 12D E12F'.match(/\B12\B/g);
js.log(result);

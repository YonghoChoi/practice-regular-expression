var result = '34_12_56'.match(/12/);
js.log(result);
js.log(result.index);
js.log(result.input);

for(var name in result){
  js.log(name, ':', result[name]);
}

// g플래그는 index와 input을 제공하지 않는다.
var result = '34_12_56'.match(/12/g);
js.log(result);
js.log(result.index); // undefined
js.log(result.input); // undefined

// 함수 호출과 함수의 반환 값을 사용할 수 있다.
function returnValue(){
  return 'Sports';
}

function returnPattern(){
  return /sp/i;
}

result = returnValue().match(/sp/i);
js.log(result);

result = 'Sports'.match(returnPattern());
js.log(result);

var result = '12_34_12'.replace('12', 77);  // 12를 찾아 77로 치환
js.log(result);

result = '12_34_12'.replace(/12/g, 77);
js.log(result);

function returnValue(){
  return 'AA';
}

result = '12_34_12'.replace(/12/g, returnValue());  // 12를 찾아서 함수 실행 결과 값으로 치환
js.log(result);

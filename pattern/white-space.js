function printResult(result){
  js.log(result);
  js.log('result length :' + result.length);
}

// 패턴 /\t/ 는 수평탭에 매치된다.
var result = '\u0009'.match(/\t/);
printResult(result);

result = '\u000A'.match(/\n/);
printResult(result);

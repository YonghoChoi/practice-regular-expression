function charCheck(input){
  return /^[a-zA-Z]+$/.test(input);
}

function charAndNumberCheck(input){
  return /^[a-zA-Z0-9]+$/.test(input);
}

function idIncludeGolbangECheck(input){
  return /^[a-zA-Z0-9@_%]+$/.test(input);
}

function bankingNumber(input){
  var excludeDash = input.replace(/-/g, '');
  return /^[0-9]+$/.test(excludeDash);
}

js.log("== 영문 대소문자만 ==")
js.log(charCheck('ABCD'));
js.log(charCheck('abcd'));
js.log(charCheck('ABcd'));
js.log(charCheck('123'));
js.log(charCheck('12AB'));
js.log(charCheck('AB12'));

js.log("== 숫자 포함 ==")
js.log(charAndNumberCheck('ABCD'));
js.log(charAndNumberCheck('abcd'));
js.log(charAndNumberCheck('ABcd'));
js.log(charAndNumberCheck('123'));
js.log(charAndNumberCheck('12AB'));
js.log(charAndNumberCheck('AB12'));

js.log("== 골뱅이 포함 ==")
js.log(idIncludeGolbangECheck('AB@12'));
js.log(idIncludeGolbangECheck('AB12_'));
js.log(idIncludeGolbangECheck('AB12_@'));
js.log(idIncludeGolbangECheck('AB12_%'));

js.log("== 계좌번호 파싱 ==")
js.log(bankingNumber('123-456-789'));

//텍스트 추출

function getText(param){
  return param.replace(/<\/?[^>]+>/g), '');
}

var result = getText('<div id="sports">축구</div>');
js.log(result);

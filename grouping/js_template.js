window.onload = function(){
  point.data.forEach(function(obj){
    this.result.push(this.templateObj.match(obj));
  }, point);
  point.result.push("</table>");
  document.getElementById('movie').innerHTML = point.result.join('');
}

var point = {};
// Key-value 일 경우
point.data = [
  {place: '강남점', title: '스타워즈', point: 500},
  {place: '홍대점', title: '히말라야', point: 400}
];

// 배열일 경우
/*
point.data = [
  ['강남점', '스타워즈', 500],
  ['홍대점', '히말라야', 400]
];
*/

point.Template = function(format){
  this.template = format;
  this.templateExp = /\{(\w+)?\}/g;
};

point.Template.prototype.match = function(data){
  return this.template.replace(point.templateObj.templateExp, function(src, key){
    return data[key];
  });
};

point.result = ["<table><thead><tr><th>상영관<th>이름<th>포인트<tbody>"];
point.templateObj = new point.Template("<tr><td>{place}<td>{title}<td>{point}");

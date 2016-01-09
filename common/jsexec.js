function jsExec(){
  var filePath = document.getElementById("filePath").value;
  var selectDirectory = document.getElementById("selectDirectory");
  var dir = selectDirectory.options[selectDirectory.selectedIndex].value;

  js.log('=== ' + filePath + '.js ===');
  var head = document.getElementsByTagName('head')[0];
  var el = document.createElement("script");
  el.type = "text/javascript";
  el.src = './'+ dir + '/' + filePath + '.js';
  head.appendChild(el);
}

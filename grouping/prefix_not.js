// 전방 부정 매치

/*
  매치가 되면 null 반환
  매치가 되지 않으면 AB로 매치
*/
var result = 'ABCDEF'.match(/AB(?!EF)/);
js.log(result);

// ABCD로 매치가 되었으므로 null 반환
var result = 'ABCDEF'.match(/AB(?!CD)/);
js.log(result);

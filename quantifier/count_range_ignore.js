// 숫자 범위 무시

// 하나 이상에 매치
var result = 'AAAAA'.match(/A{1,}/)
js.log(result);

// 하나 이상을 무시하고 최소로 매치
result = 'AAAAA'.match(/A{1,}?/)
js.log(result);

// 최소로 매치하며, 최소의 기준은 왼쪽에 작성한 1
// 따라서 A를 하나만 매치
result = 'AAAAA'.match(/A{1,5}?/)
js.log(result);

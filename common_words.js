function commonWords(str1, str2) {
	var result = [];
	var arr_str1 = str1.split(',');
	var arr_str2 = str2.split(',');
	for (var i = 0; i < arr_str1.length; i++) {
	 	(arr_str2.indexOf(arr_str1[i]) > -1) ? result.push(arr_str1[i]) : true;
	}
	return result.sort(function(el1, el2) {
		return el1.localeCompare(el2);
	}).join(','); 
}

console.log(commonWords("hello,world", "hello,earth"));
console.log(commonWords("one,two,three", "four,five,six"));
console.log(commonWords("one,two,three", "four,five,one,two,six,three"));
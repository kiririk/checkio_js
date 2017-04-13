function threeWords(text) {
	var text_arr = text.split(" ");
	var result = false;
	for (var i = 2; i < text_arr.length; i++) {
	 	if (isNaN(+text_arr[i-2]) && isNaN(+text_arr[i-1]) && isNaN(+text_arr[i])) {
	 			result = true;
	 			break;
	 	}
	} 
	return result;
}

console.log(threeWords("Hello World hello"));
console.log(threeWords("He is 123 man"));
console.log(threeWords("1 2 3 4"));
console.log(threeWords("bla bla bla bla"));
console.log(threeWords("Hi"));


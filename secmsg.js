function findMessage(text) {
	var result_str = "";
	var alphabet = ('abcdefghijklmnopqrstuvwxyz'.toUpperCase()).split('');
	for (var i = 0; i < text.length; i++) {
		result_str += (alphabet.indexOf(text[i]) > -1) ? text[i] : "";
	}
	return result_str;
}

console.log(findMessage("Trello Your. Pixel End Tree Unity Charter Hello"));
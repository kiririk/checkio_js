function mostWanted(raw_text) {
	var text = raw_text.toLowerCase();
	var letter_amount = {};
	var letters = [];
	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

	for (var letter = 0; letter < text.length; letter++) {
		if (alphabet.indexOf(text[letter]) > -1) {
			if (!(text[letter] in letter_amount)) {
				letter_amount[text[letter]] = 1;
			} else {
				letter_amount[text[letter]] += 1;
			}
		}
	}

	for (letter = 0; letter < alphabet.length; letter++) {
		if (alphabet[letter] in letter_amount) {
			letters.push([alphabet[letter],letter_amount[alphabet[letter]]]);
		}
	}

	var max = ['',0];
	for (var i = (letters.length-1); i > -1; i--) {
		if (max[1] <= letters[i][1]) {
			max[0] = letters[i][0];
			max[1] = letters[i][1];
		}
	}

	return max[0];
}

console.log(mostWanted("Lorem ipsum dolor sit amet"));
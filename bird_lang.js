function translate(text) {
	var result = '';
	var vowel = 'aeiouy'.split('');
	for (var i = 0; i < text.length; i++) {
		if (!(vowel.indexOf(text[i]) > -1)) {
			result += text[i]
		}
		if ((vowel.indexOf(text[i]) > -1) && (text[i] == text[i+1]) && (text[i+1] == text[i+2])) {
			result += text[i]
			i+=2;
		}
	}
	return result;
}

console.log(translate("hieeelalaooo"));
console.log(translate("hoooowe yyyooouuu duoooiiine"));
console.log(translate("aaa bo cy da eee fe"));
console.log(translate("sooooso aaaaaaaaa"));

/*
function translate(phrase){
    return phrase
        .replace(/([^aeiouy ])\w/g,'$1')
        .replace(/([aeiouy]){3}/g,'$1');
}
*/

//return phrase.replace(/([^ aeiouy])./gi, '$1').replace(/([aeiouy])\1\1/gi, '$1');
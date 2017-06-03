//https://js.checkio.org/mission/verify-anagrams/
function verifyAnagrams(str1, str2) {
	let arr1 = str1.toLowerCase().replace(/ /g,'').split('').sort(),
		arr2 = str2.toLowerCase().replace(/ /g,'').split('').sort();
	
	var result = true,
		max_len = arr1.length >= arr2.length ? arr1.length : arr2.length;
	for (let j = 0; j < max_len; j++)
		if (arr1[j] !== arr2[j]) {
			result = false;
			break;
		}
	return result;
}

//function verifyAnagrams(first_word, second_word){
//   const f = x => x.toLowerCase().replace(/\s/g, '').split('').sort().join();
//    return f(first_word) == f(second_word);
//}

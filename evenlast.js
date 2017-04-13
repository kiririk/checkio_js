function evenLast(arr) {
	var summ = 0;
	for (var i = 0; i < arr.length; i+=2) {
	 	summ += arr[i];
	}
	return summ == 0 ? summ : summ*arr[arr.length-1];
}

console.log(evenLast([0, 1, 2, 3, 4, 5]));
console.log(evenLast([1, 3, 5]));
console.log(evenLast([6]));
console.log(evenLast([]));
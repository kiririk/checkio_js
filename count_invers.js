function countInversion(arr) {
	var counter = 0; var left_el = 0; var right_el = 0
	for (var i = 0; i < arr.length-1;) {
		left_el = arr[i]; right_el = arr[i+1];
		if (left_el - right_el > 0) {
			arr[i+1] = left_el; arr[i] = right_el;
			counter++; i = 0;
		} else i++;			
	}
	return counter;	 
}

console.log(countInversion([1, 2, 5, 3, 4, 7, 6]));
console.log(countInversion([0, 1, 2, 3]));
console.log(countInversion([5,3,2,1,0]));
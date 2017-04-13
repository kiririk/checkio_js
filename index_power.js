function indexPower(arr, power) {
	return ((power > -1) && (power < arr.length)) ? Math.pow(arr[power], power) : -1;
}

console.log(indexPower([1, 2, 3, 4], 2) == 9);
console.log(indexPower([1, 3, 10, 100], 3) == 1000000);
console.log(indexPower([0, 1], 0) == 1);
console.log(indexPower([1, 2], 3) == -1);


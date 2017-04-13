function digitsMultip(number) {
	var str = number.toString(); var digits = []; var multi = 1;
	for (var i = 0; i < str.length; i++) {
		if (Number(str[i])!=0) multi*=Number(str[i]);
	}
	return multi;
}

console.log(digitsMultip(123405));
console.log(digitsMultip(999));
console.log(digitsMultip(1000));
console.log(digitsMultip(1111));
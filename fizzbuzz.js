function fizzBuzz(number) {
	var output = '';
	if (number%3 == 0) output+='Fizz';
	if (number%5 == 0) { 
		if (output != '') output+=' ';
		output+='Buzz';
	}
	if (output == '') output = number.toString();
	return output;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(6));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));

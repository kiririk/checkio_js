function mostNumbers() {
	var args = [];
	for (var i = 0; i < arguments.length; i++) {
		args.push(arguments[i]);
	}
	return (arguments.length > 0) 
	? Number((Math.max.apply(null, args) - Math.min.apply(null, args)).toFixed(3)) : 0;
}

console.log(mostNumbers(1, 2, 3));
console.log(mostNumbers(5, -5));
console.log(mostNumbers(10.2, -2.2, 0, 1.1, 0.5));
console.log(mostNumbers());
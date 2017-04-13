console.log(binaryCount(4));
console.log(binaryCount(15));
console.log(binaryCount(1));
console.log(binaryCount(1022));

function binaryCount(num) {
	return num.toString(2).split('').filter(el => el=='1').length;
}

//var binaryCount = x => x.toString(2).replace(/0/g, "").length
var nonUniqueElements = function (data) {
	var element_amount = {};
	var arr_out = [];
	for (var i = 0; i < data.length; i++) {
		if (!(data[i] in element_amount)) {
			element_amount[data[i]] = 1;
		} else {
			element_amount[data[i]] += 1;
		}
	}
	for (var i = 0; i < data.length; i++) {
		if ((data[i] in element_amount) && (element_amount[data[i]]>1)) {
			arr_out.push(data[i]);
		}
	}
	return arr_out;
}

console.log(nonUniqueElements([0,1,1,2,3,5,3,0]));
alert('petu4');

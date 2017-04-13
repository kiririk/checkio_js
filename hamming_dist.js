function humming(num1, num2) {
	function addZeros(arr1, arr2) {
		for (var i = 0; i < arr1.length - arr2.length; i++) {
			adding.push(0);
		}
		return adding.concat(arr2);
	}

	var num1_bin_arr = num1.toString(2).split('').map(el => +el);
	var num2_bin_arr = num2.toString(2).split('').map(el => +el);
	var adding = [], result = [];

	if (num1_bin_arr.length > num2_bin_arr.length) {
		num2_bin_arr = addZeros(num1_bin_arr, num2_bin_arr);
	} else if (num2_bin_arr.length > num1_bin_arr.length) {
		num1_bin_arr = addZeros(num2_bin_arr, num1_bin_arr);
	}

	for (var i = 0; i < num2_bin_arr.length; i++) {
		result.push(num1_bin_arr[i] + num2_bin_arr[i]);
	}

	return result.map(el => el==2 ? 0 : el)
                      .filter(el => el==1 ? true : false)
                      .length;

//return ((n ^ m).toString(2).replace(/0/g,'').length);
//return ((n^m).toString(2).match(/1/g)||[]).length;
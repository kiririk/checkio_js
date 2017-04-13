var func = function (data,row,col) {
	function check(data,row,col) {
		if (((row < data.length) && (row >= 0)) && ((col < data[0].length) && (col >= 0))) {
			return data[row][col];
		} else {
			return 0;
		}
	}

	var sum = 0;
	sum += check(data,row-1,col);
	sum += check(data,row+1,col);
	sum += check(data,row,col-1);
	sum += check(data,row,col+1);
	sum += check(data,row-1,col-1);
	sum += check(data,row-1,col+1);
	sum += check(data,row+1,col+1);
	sum += check(data,row+1,col-1);
	return sum;
}

console.log(func([[1, 0, 0, 1, 0],
                  [0, 1, 0, 0, 0],
                  [0, 0, 1, 0, 1],
                  [1, 0, 0, 0, 0],
                  [0, 0, 1, 0, 0]],1,2));
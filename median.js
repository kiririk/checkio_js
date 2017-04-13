var median = function (data) {
	data.sort(function(a, b) {
  		return a - b;
	});
	if ((data.length) % 2 == 0) {
		return (data[(((data.length)/2)-1)]+data[(((data.length)/2))])/2;
	} else {
		return data[(((data.length)/2)-0.5)];		
	};
}
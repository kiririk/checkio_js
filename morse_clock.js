function morseClock(time_str) {
	var time_arr = time_str.split(':').map(el => ('0' + el).slice(-2))
								      .map(el => el.split('')
								      			   .map(el => Number((+el).toString(2))));
    for (var i = 0; i < time_arr.length; i++)
    	for (var j = 0; j < time_arr[0].length; j++) {
    		if ((i == 0) && (j == 0)) time_arr[i][j] = ('0' + time_arr[i][j]).slice(-2);
    		else if (j == 0) time_arr[i][j] = ('000' + time_arr[i][j]).slice(-3);
    		else time_arr[i][j] = ('0000' + time_arr[i][j]).slice(-4)

    	}
	var morse_arr = time_arr.map(el => el.map(el => el.replace(/0/g,'.').replace(/1/g,'-')));
	return morse_arr.join(' : ').replace(/,/g,' ');
}

console.log(morseClock("10:37:49"));

// function morseClock(a) {
//     var b = ".......-..-...--.-...-.-.--..----...-..-", c = "24-34-34";
//     return a                             // 00:1:02
//         .split(":")                      // ['00', '1', '02']
//         .map(a => ("0" + a).substr(-2))  // ['00', '01', '02']
//         .join(":").split("")             // ['0', '0', ':', '0', '1', ':', '0', '2']
//         .map((a, d) => b.substr(4 * (+a + 1) - c[d], c[d]) || ":")
//                                          // ['..', '....', ':', ...
//         .join(" ");
// }
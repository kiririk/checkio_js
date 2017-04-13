var DegToRad = angle => (angle * Math.PI)/180;

function ice(radius) {
	var temp = [];
	for (var angle = 0; angle <= 90; angle++) {
		temp.push(Math.ceil(Math.sin(DegToRad(angle)) * radius) + ' ' + 
				   Math.ceil(Math.cos(DegToRad(angle)) * radius));
	}
	var second_temp = temp.filter((item, pos) => temp.indexOf(item) == pos)
						  .map((el) => el.split(' ').map(el => ~~el));
	var coords = second_temp.filter((el) => ((el[0] == 0) || (el[1] == 0)) ? false : true);
 	var result = Array(Math.ceil(radius)).fill(0)
 										 .map(el => Array(Math.ceil(radius)).fill('.'));
 	for (var i = 0; i < coords.length; i++)
 		result[coords[i][0] - 1][coords[i][1] - 1] = 'p';
 	for (var j in result)
 		for (var k in result[j]) {
 	 		if ((result[j][k] == '.') && (result[j][k-1] == 'p')) result[j][k] = 'o';
 	 		if ((result[j][k] == '.') && (result[j][k-1] == 'o')) result[j][k] = 'o';
 		}
 	 var result_pair = [0, 0];
 	 for (j in result)
 	 	for (k in result[j]) {
 	 		if (result[j][k] == '.') result_pair[0] += 1;
 	 		if (result[j][k] == 'p') result_pair[1] += 1;
 	 	}
 	result_pair[0] *= 4; result_pair[1] *= 4;
 	console.log(result_pair);
}

ice(2);
ice(3);
ice(2.1);
ice(2.5);

//const grid = (new Array(m + 1)).fill(null).map(() => []);

// function countingTiles(radius){
    // var hypotenuse = (x, y) => Math.sqrt(x * x + y * y); 
    // var solid = 0;
    // var partial = 0;
    // for (var i = 0; i < 4; i++) {
        // for (var j = 0; j < 4; j++) {
            // if (radius > hypotenuse(i + 1, j + 1))
                // solid++;
            // else if (radius > hypotenuse(i, j))
                // partial++;
        // }
    // }
    // return [4 * solid, 4 * partial];
// }

// function countingTiles(radius){
    // n = Math.floor(radius)
    // r = radius * radius
    // solid = 0
    // total = 0
    // for(y = 0; y <= n; y++){
        // for(x = 0; x <= n; x++){
            // if((x + 1) * (x + 1) + (y + 1) * (y + 1) <= r) solid++
            // if(x * x + y * y < r) total++
        // }
    // }
    // return [4 * solid, 4 * (total - solid)]
// }


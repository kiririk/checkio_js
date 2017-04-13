function triangleAngles(a, b, c) {
	var result = [0,0,0];
	if ((a < b + c) && (b < a + c) && (c < a + b)) {
		result[0] = Math.round(Math.acos((Math.pow(b,2)+Math.pow(c,2)-Math.pow(a,2))/(2*b*c)) * (180/Math.PI));
		result[1] = Math.round(Math.acos((Math.pow(a,2)+Math.pow(c,2)-Math.pow(b,2))/(2*a*c)) * (180/Math.PI));
		result[2] = 180 - (result[1] + result[0]);
	}
	return result;
}

console.log(triangleAngles(3, 4, 5));

/* изяшное решение
function triangleAngles(a, b, c){
    var r = (a,b,c) => Math.round(Math.acos((b*b+c*c-a*a)/(2*b*c)) * 180 / Math.PI);
    var result = [r(a,b,c) || 0, r(b,c,a) || 0, r(c,a,b) || 0].map(c=>c==180?0:c).sort((a,b)=>a-b);
    return result
}
*/
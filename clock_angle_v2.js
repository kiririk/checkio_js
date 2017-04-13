function clock(time_str) {
	var time = time_str.split(':').map(function(el) {return +el});
	time[0] = time[0] >= 12 ? time[0] - 12 : time[0];
	var angles = [];
	angles[0] = (time[0] * 30) + (time[1] * 0.5);
	angles[1] = time[1] * 6;
	angle = Math.abs(angles[1] - angles[0]);
	return (angle > 180) ? 360 - angle : angle;
}

console.log(clock('01:30'));

/*
function clockAngle(time){
    var minutes = Number(time.split(":")[1]) * 6;
    var hours = (Number(time.split(":")[0]) % 12) * 30 + minutes / 12;
    var angle = Math.max(minutes, hours) - Math.min(minutes, hours);
    var result = Math.min(angle, 360 - angle);
    return result;
}
*/
function clockAngle(time_str) {
  var angle = [], result = 0;
  var time = time_str.split(':').map(function(el) {return +el});
  time[0] = time[0] >= 12 ? time[0]-12 : time[0];
  angle[0] = ((360/12)*time[0]) + ((360/12)*(time[1]/60));
  angle[1] = ((360/60)*time[1]);
  if (angle[1] > angle[0]) {
  	result = (angle[1] - angle[0]) > 180 
  			? Math.abs(360 - (angle[1] - angle[0])) 
  			: Math.abs(angle[1] - angle[0]);
  } else if (angle[0] > angle[1]) {
  	result = (angle[0] - angle[1]) > 180 
  			? Math.abs(360 - (angle[0] - angle[1])) 
  			: Math.abs(angle[0] - angle[1]);
  }
  return result;
}

console.log(clockAngle("01:43"));

/*
    t = time.split(":") // t[0]:hour, t[1]:minutes
    angle = Math.abs(30 * (t[0] % 12) - 5.5 * t[1])
    return Math.min(angle, 360 - angle)
*/

/*
  var [h, m] = time.split(':').map((a) => Number(a)),
      a = Math.abs((6 * m) - (30 * h + m / 2)),
      b = Math.abs(360 - a);
  return Math.min(a, b);

*/

/*
function clockAngle(time){
    var time = time.split(':').map((item)=>+item);
    var minutesAngle = 6 * time[1];
    var hoursAngle = 30 * (time[0] % 12) + minutesAngle / 12;
    var angle = Math.abs(minutesAngle - hoursAngle);
    return (angle > 180)?360 - angle:angle;
}
*/
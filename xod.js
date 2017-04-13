function xoReferee(field) {
	var win = false;
	for (var i = 0; i < field.length; i++) {
		if ((field[i][0] == field[i][1]) && (field[i][1] == field[i][2])) {
			if (!(field[i][0] == ".")) {
			return field[i][0];
			win = true;
			break;
		}
		} else if ((field[0][i] == field[1][i]) && (field[1][i] == field[2][i])) {
			if (!(field[0][i] == ".")) {
			return field[0][i];
			win = true;
			break;
		}
		}
	}
	if ((field[0][0] == field[1][1]) && (field[1][1] == field[2][2])) {
		if (!(field[1][1] == ".")) {
		return field[1][1];
		win = true;
	}
	}
	if ((field[0][2] == field[1][1]) && (field[1][1] == field[2][0])) {
		if (!(field[1][1] == ".")) {
		return field[1][1];
		win = true;
	}
	}
	if (win == false) return "D";
}

console.log(xoReferee(["...",
        "XX.",
        "XOO"]));
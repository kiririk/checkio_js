function recallPassword(chiper_grille, chipered_pass) {
	var result_str = '',
		size = chiper_grille.length;
	
	for (var i = 0; i < 4; i++) {
		var changed = [];
		for (var j = 0; j < 4; j++) {
			changed.push([0,0,0,0]);
			for (var k = 0; k < 4; k++) 
				result_str+= chiper_grille[j][k] == 'X' ? chipered_pass[j][k] : '';
			}
		//поворот
		for (var j = 0; j < 4; j++)
			for (var k = 0; k < 4; k++)
				changed[k][size - 1 - j] = chiper_grille[j][k];
		chiper_grille = changed;
	}
	return result_str;
}

recallPassword(['X...',
				'..X.',
				'X..X',
				'....'],
				['itdf',
				'gdce',
				'aton',
				'qrdi']);



// function recallPassword(grille, password){
//   var n = grille.length;
//   var result = '';
// ​
//   for (var i = 0; i < n; i++) {
// ​
//     var nextTurn = new Array(n).fill().map(
//       () => new Array(n) );
// ​
//     for (var c = 0; c < n; c++)
//       for (var r = 0; r < n; r++) 
//         if (grille[c][r] == 'X'){
//           result += password[c][r];
//           nextTurn[r][n - 1 - c] = 'X';
//         }
// ​
//     grille = nextTurn;
//   }
// ​
//   return result;
// }
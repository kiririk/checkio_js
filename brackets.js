function brackets(str) {
    var only_brackets = str.replace(/[0-9]|\*|\-|\+|\//g,'');
	var result;
	while (true) {
		var prev_step = only_brackets;
		only_brackets = only_brackets.replace(/\(\)/g,'')
					     .replace(/\[\]/g,'')
					     .replace(/\{\}/g,'');
		if (only_brackets == '') {
			result = true;
			break;
		}
		if (only_brackets.length == prev_step.length) {
			result = false;
			break;
		}
	}
	return result;
}

brackets("((5+3)*2+1)");
brackets("{[(3+1)+2]+}");
brackets("(3+{1-1)}");
brackets("[1+1]+(2*2)-{3/3}");
brackets("(({[(((1)-2)+3)-3]/3}-3)");
brackets("2+3");


//function brackets(expression){

//let exp = expression.replace(/\d|[+\-*/]/g, ''),

   /*     prev = '';

        

    while ( exp.length !== prev.length ) {

           prev = exp;

           exp = exp.replace('()', '')

                    .replace('{}', '')

                    .replace('[]', '');

    }

    

    return exp.length === 0;

}*/



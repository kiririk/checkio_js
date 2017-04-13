function digitStack(arr) {
	var stack = [], summ = 0, action, number;
	for (var el in arr) {
		[action, number] = arr[el].split(' ');
		if (number === undefined) {
			summ += (action == 'POP') ? ~~stack.pop() : ~~stack[stack.length - 1];
		} else stack.push(number);
	}
	return summ;
}

digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK", "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]);

// function Stack() {
//     this.sum = 0;
//     this.stack = [];
// }
// ​
// Stack.prototype.push = function(elem) {
//     this.stack.push(elem);
//     return this;
// };

// Stack.prototype.pop = function() {
//     this.stack.length ? this.sum += this.stack.pop() : this.sum;
//     return this;
// }

// Stack.prototype.peek = function() {
//     this.stack.length ?  this.sum += this.stack[this.stack.length - 1] : this.sum;
//     return this;
// }

// function digitStack(commands){
//     let stack = new Stack();
//     commands.forEach(command => {
//         let separated = command.split(' ');
//         separated[1] ? stack[separated[0].toLowerCase()](Number(separated[1])) : stack[separated[0].toLowerCase()]()
//     })
//     return stack.sum;
// }
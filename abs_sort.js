function absoluteSorting(numbers){
    return numbers.sort((a,b) => Math.abs(a) - Math.abs(b));
}

//var absoluteSorting = numbers => (numbers.sort((a,b) => Math.abs(a) - Math.abs(b)));

console.log(absoluteSorting([-20, -5, 10, 15]));
console.log(absoluteSorting([1, 2, 3, 0]));
console.log(absoluteSorting([-1, -2, -3, 0]));
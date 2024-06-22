function sum_array(array){
	let sum = 0;
	numberArray = array.map(Number);
	numberArray.forEach((number) => sum += number);
	return sum;
}

let arguments = process.argv;
console.log(sum_array(arguments.slice(2, arguments.length)));

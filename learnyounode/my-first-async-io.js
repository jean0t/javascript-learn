let fs = require("fs");
let path = process.argv[2];

function reading_file(cb) {
	fs.readFile(path, "utf8", function doneReading(err, data) {
		if (err){
			return console.error(err);
		}

		cb(data);
	});
}

function cb(data) {
	const numberLines = data.split("\n").length - 1;
	return console.log(numberLines);
}

reading_file(cb);

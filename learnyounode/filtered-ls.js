const fs = require("fs");
const path = require("path");

if (process.argv.length < 4) {
	console.log("saindo...");
	process.exit(1);
}

const dir = process.argv[2];
const extension = process.argv[3];

function files_from_dir() {
	fs.readdir(dir, function cb(err, info) {
		if (err) {
			return console.error(err);
		}

		const filtered = info.filter((name) => path.extname(name) === `.${extension}`);
		filtered.forEach((name) => console.log(name));
	});
}

files_from_dir();

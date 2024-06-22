"use strict"

const readDir = require("./mymodule.js");
const path = process.argv[2];
const extension = process.argv[3];



function cb(error, data) {
	if (error) {
		return console.error(error);
	}

	data.forEach((name) => console.log(name));
}


readDir(path, extension, cb);

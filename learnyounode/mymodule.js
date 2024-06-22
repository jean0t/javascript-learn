"use strict"

const fs = require("fs");
const pathf = require("path");

module.exports = function (path, extension, callback){
	fs.readdir(path, function (err, data) {
		if (err) return callback(err, null);

		const filtered = data.filter((name) => pathf.extname(name) === `.${extension}`);
		callback(null, filtered);
	});
}

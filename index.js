"use strict";
var es = require("event-stream");
var gutil = require("gulp-util");
var css2json = require("css-to-json");

module.exports = function() {
	return es.map(function(file, cb) {
		file.contents = new Buffer(css2json.fromString(file.contents.toString()));
		file.path = gutil.replaceExtension(file.path, ".json");
		cb(null, file);
	});
};

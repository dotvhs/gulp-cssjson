"use strict";
var es = require("event-stream");
var gutil = require("gulp-util");
var css2json = require("css-to-json");

module.exports = function() {
	function cssjson(file, callback) {
		file.contents = new Buffer(
			JSON.stringify(css2json.fromString(file.contents.toString()))
		);
		file.path = gutil.replaceExtension(file.path, ".json");
		callback(null, file);
	}

	return es.map(cssjson);
};

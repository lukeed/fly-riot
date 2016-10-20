'use strict';

const extn = require('path').extname;
const riot = require('riot');

module.exports = function () {
	this.plugin('riot', {}, function * (file, opts) {
		opts = opts || {};

		// modify extension
		const ext = extn(file.base);
		file.base = file.base.replace(new RegExp(ext, 'i'), '.js');

		// pre-compile Riot content
		const out = riot.compile(file.data.toString(), opts);
		file.data = new Buffer(out);
	});
};

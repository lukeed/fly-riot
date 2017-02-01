'use strict';

const {extname} = require('path');
const {compile} = require('riot');

module.exports = {
  name: 'riot',
  * func(file, opts) {
		opts = opts || {};

		// modify extension
		const ext = extname(file.base);
		file.base = file.base.replace(new RegExp(ext, 'i'), '.js');

		// pre-compile Riot content
		const out = compile(file.data.toString(), opts);
		file.data = new Buffer(out);
  }
};

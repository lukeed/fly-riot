var riot = require('riot');

module.exports = function () {
	this.filter('riot', function (data) {
		return {code: riot.compile(data.toString()), ext: '.js'};
	});
};

'use strict';

const join = require('path').join;
const test = require('tape').test;
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('fly-riot', t => {
	t.plan(3);

	const fly = new Fly({
		plugins: [{
			func: require('../')
		}],
		tasks: {
			a: function * () {
				t.ok('riot' in fly, 'attach the `riot()` plugin to fly');

				yield this.source(`${dir}/foo.tag`).riot().target(tmp);

				const str = yield this.$.read(`${tmp}/foo.js`, 'utf8');
				const want = yield this.$.read(`${dir}/bar.js`, 'utf8');

				t.ok(str, 'create a `.js` file');
				t.equal(str, want, 'compile the `.tag` file correctly');

				yield this.clear(tmp);
			}
		}
	});

	fly.start('a');
});

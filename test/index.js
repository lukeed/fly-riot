'use strict';

const {join} = require('path');
const test = require('tape');
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const tmp = join(__dirname, 'tmp');

test('fly-riot', t => {
	t.plan(3);

	const fly = new Fly({
		plugins: [
			require('../'),
			require('fly-clear')
		],
		tasks: {
			* foo(f) {
				t.ok('riot' in fly.plugins, 'attach the `riot()` plugin to fly');

				yield f.source(`${dir}/foo.tag`).riot().target(tmp);

				const str = yield f.$.read(`${tmp}/foo.js`, 'utf8');
				const want = yield f.$.read(`${dir}/bar.js`, 'utf8');

				t.ok(str, 'create a `.js` file');
				t.equal(str, want, 'compile the `.tag` file correctly');

				yield f.clear(tmp);
			}
		}
	});

	fly.start('foo');
});

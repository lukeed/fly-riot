var riot = require('../');
var test = require('tape').test;
var read = require('fs').readFileSync;

test('fly-riot', function (t) {
  t.plan(3);

  var file1 = read('test/a.tag');
  var code1 = read('test/a.js', 'utf8');

  riot.call({
    filter: function(name, fn) {
      var results = fn(file1);

      t.equal(name, 'riot', 'add riot filter to fly');
      t.equal(results.ext, '.js', 'compiled to ".js" file');
      t.equal(results.code, code1, 'compiled to javascript');
    }
  });
});

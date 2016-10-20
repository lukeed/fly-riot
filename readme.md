<div align="center">
	<a href="http://github.com/flyjs/fly">
		<img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
	</a>
</div>

> Riot compiler plugin for Fly.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

## Install

```a
npm install -D fly-riot
```

## Usage

```js
exports.riot = function * () {
	yield this.source('tags/**/*.html')
		.riot().concat('templates.js')
		.target('dist/js');
}
```

## License

MIT © [Luke Edwards](https://lukeed.com)

[contributors]: https://github.com/lukeed/fly-riot/graphs/contributors
[releases]:     https://github.com/lukeed/fly-riot/releases
[fly]:          https://www.github.com/flyjs/fly 
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-riot
[npm-ver-link]: https://img.shields.io/npm/v/fly-riot.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-riot.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-riot
[travis-badge]: http://img.shields.io/travis/lukeed/fly-riot.svg?style=flat-square
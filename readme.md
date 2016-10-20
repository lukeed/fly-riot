# fly-riot [![][travis-badge]][travis-link] [![npm package][npm-ver-link]][npm-pkg-link]

> Riot compiler plugin for Fly.

## Install

```
npm install --save-dev fly-riot
```

## Usage

```js
exports.riot = function * () {
	yield this.source('src/**/*.tag')
		.riot()
		.concat('templates.js') // requires fly-concat!
		.target('dist/js');
}
```

## API

### .riot()

All matching files will be compiled to JavaScript & be converted to a `.js` file type.

> **Recommended:** You should concatenate all your compiled tags, as seen in the [example](#usage) above. To achieve this, you must install the [`fly-concat`](https://github.com/lukeed/fly-concat) plugin.

There are no options for this plugin.

## License

MIT © [Luke Edwards](https://lukeed.com)

[npm-pkg-link]: https://www.npmjs.org/package/fly-riot
[npm-ver-link]: https://img.shields.io/npm/v/fly-riot.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/fly-riot
[travis-badge]: http://img.shields.io/travis/lukeed/fly-riot.svg?style=flat-square

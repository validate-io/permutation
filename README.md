Permutation
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a permutation.


## Installation

``` bash
$ npm install validate.io-permutation
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isPermutation = require( 'validate.io-permutation' );
```

#### isPermutation( arr, value )

Validates if a `value` is an `array` permutation. The first argument defines the list of values which can be permuted. The list `array` need __not__ be unique and may contain repeated references to the same `object`.

``` javascript
var arr = [1,2,3],
	value = [2,3,1];

var bool = isPermutation( arr, value );
// returns true
```


## Examples

``` javascript
var isPermutation = require( 'validate.io-permutation' );

console.log( isPermutation( [1,2,3], [2,3,1] ) );
// returns true

console.log( isPermutation( [1,2,3], [1,4,3] ) );
// returns false

console.log( isPermutation( ['a','c','b'], ['a','b'] ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-permutation.svg
[npm-url]: https://npmjs.org/package/validate.io-permutation

[travis-image]: http://img.shields.io/travis/validate-io/permutation/master.svg
[travis-url]: https://travis-ci.org/validate-io/permutation

[coveralls-image]: https://img.shields.io/coveralls/validate-io/permutation/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/permutation?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/permutation.svg
[dependencies-url]: https://david-dm.org/validate-io/permutation

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/permutation.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/permutation

[github-issues-image]: http://img.shields.io/github/issues/validate-io/permutation.svg
[github-issues-url]: https://github.com/validate-io/permutation/issues

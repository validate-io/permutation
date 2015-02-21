'use strict';

var isPermutation = require( './../lib' );

console.log( isPermutation( [1,2,3], [2,3,1] ) );
// returns true

console.log( isPermutation( [1,2,3], [1,4,3] ) );
// returns false

console.log( isPermutation( ['a','c','b'], ['a','b'] ) );
// returns false

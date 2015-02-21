'use strict';

var isPermutation = require( './../lib' );

console.log( isPermutation( [2,3,1], [1,2,3] ) );
// returns true

console.log( isPermutation( [1,4,3], [1,2,3] ) );
// returns false

console.log( isPermutation( ['a','b'], ['a','c','b'] ) );
// returns false

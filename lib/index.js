/**
*
*	VALIDATE: permutation
*
*
*	DESCRIPTION:
*		- Validates if a value is a permutation.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// ISPERMUTATION //

/**
* FUNCTION: isPermutation( arr, value )
*	Validates if a value is a permutation.
*
* @param {Array} arr - array containing elements which can be permuted
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a permutation
*/
function isPermutation( arr, value ) {
	var len, N, x, i, j;
	if ( !isArray( arr ) ) {
		throw new TypeError( 'isPermutation()::invalid input argument. Second argument must be an array. Value: `' + arr + '`.' );
	}
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	if ( len !== arr.length ) {
		return false;
	}
	arr = arr.slice();
	for ( i = 0; i < len; i++ ) {
		x = value[ i ];
		N = arr.length;

		// Search for a match. If found, remove it...
		for ( j = 0; j < N; j++ ) {
			if ( arr[ j ] === x ) {
				arr.splice( j, 1 );
				break;
			}
		}
		// If no match was found, then an element in the `value` array does not exist in the comparison array. Therefore, not a permutation.
		if ( arr.length === N ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isPermutation()


// EXPORTS //

module.exports = isPermutation;

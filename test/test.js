/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isPermutation = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-permutation', function tests() {

	it( 'should export a function', function test() {
		expect( isPermutation ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array for the set defining possible permutations', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			NaN,
			true,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				isPermutation( [], value );
			};
		}
	});

	it( 'should positively validate', function test() {
		var bool = isPermutation( [2,3,1], [1,2,3] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			[1,2],
			[1,2,2],
			[1,'2',3]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isPermutation( value, [1,2,3] );
		}
	});

	it( 'should positively validate in the event of duplicated references', function test() {
		var obj = {},
			arr = [],
			list,
			value;

		list = [ obj, arr, obj, arr ];
		value = [ arr, arr, obj, obj ];

		assert.ok( isPermutation( value, list ) );
	});

});

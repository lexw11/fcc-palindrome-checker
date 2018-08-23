// Query HTML objects
var input = document.querySelector( 'input' ),
	button = document.querySelector( 'button' ),
	feedback = document.querySelector( '#feedback' );

// Add event listeners
button.addEventListener( 'click', function(){
	checkInput( input.value );
});
input.addEventListener()

// Functions
function checkInput( str ) {
	var check = palindrome( str );
	if( check ) {
		feedback.textContent = "You bet! That's a palindrome!"
	} else {
		feedback.textContent = "Nope, not a palindrome."
	}
}

function palindrome(str) {
    var regex = /[^_\W]/;

    // Turn all letters to lower case
    var arr = str.toLowerCase()
    		// Split string into array of single characters
    		.split('')
    		// Remove all non-alphanumeric characters
    		.filter(char => regex.test(char));
	
    var half = getHalfWay( arr );

	var arr1 = arr.slice( 0, half );
	// Flip second half
	var arr2 = arr.slice( -1 * half ).reverse();

	return areEqual( arr1, arr2 );

	// Get the halfway point of an array
	function getHalfWay( arr ) {
		let len = arr.length;
		if( len % 2 === 0 ) {
			// If string length is even, get half length
			return len / 2;
		} else {
			// If string length is odd, define halfway as length - 1
			return (len - 1) / 2;
		}
	}

	// Check if two arrays are equal
	function areEqual( arr1, arr2 ) {
		for( var i = 0; i < arr1.length; i++ ) {
			if( arr1[i] !== arr2[i] ) {
				// If any characters aren't equal, it's not a palindrome
				return false;
			}
		}
		// If all characters match, it's a palindrome
		return true;
	}
}

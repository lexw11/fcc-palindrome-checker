function palindrome(str) {
    var regex = /[^_\W]/;

    // Turn all letters to lower case
    var arr = str.toLowerCase()
    		// Split string into array of single characters
    		.split('')
    		// Remove all non-alphanumeric characters
    		.filter(char => regex.test(char));
    		
	if( arr.length % 2 === 0 ) {
		// If string length is even, get half length
		var half = arr.length / 2;
	} else {
		// If string length is odd, define halfway as length - 1
		var half = (arr.length - 1) / 2;
	}
	var arr1 = arr.slice( 0, half );
	// Flip second half
	var arr2 = arr.slice( -1 * half ).reverse();
	
	return [arr1, arr2];

	
	// If half 2 === half 1, it's a palindrome
	// return true;
	// return arr.join("");
}



var output = palindrome("eye");
var output2 = palindrome("A man, a plan, a canal. Panama");
var output3 = palindrome("My age is 0, 0 si ega ym.");
var output4 = palindrome("0_0 (: /-\ :) 0-0");
console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);

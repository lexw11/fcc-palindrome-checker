function palindrome(str) {
    var regex = /[^_\W]/;
    
    // Turn all letters to lower case
    return str.toLowerCase()
    		.split('')
    		// Remove all non-alphanumeric characters
    		.filter(char => regex.test(char))
    		.join("");
	
	// Find length  of string and divide in 2
	// Flip second half
	// If half 2 === half 1, it's a palindrome
	// return true;
}



var output = palindrome("eye");
var output2 = palindrome("A man, a plan, a canal. Panama");
var output3 = palindrome("My age is 0, 0 si ega ym.");
var output4 = palindrome("0_0 (: /-\ :) 0-0");
console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);

/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function duplicateCharMinCount(string, minCount) {
  let chars = string.split("");
  let charSelected = [];

  chars.filter( char => {

	  if (!charSelected.includes(char)) {
	     let charOccurance = chars.filter(currentChar => currentChar.toLowerCase() === char.toLowerCase());

         if (charOccurance.length >= minCount) {
            charSelected.push(char);
	    }

	}
  })

  return charSelected;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;

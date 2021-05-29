/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

/* old sol
function isArrayLengthOdd(numbers) {
  if(numbers.length%2 !== 0) return true;
  return false;
}
*/


// *new sol.

const isArrayLengthOdd = (numbers) => (numbers.length%2 !== 0)

 isArrayLengthOdd([3, 2, 1]);



/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */


/* old sol.
function isArrayLengthEven(numbers) {
  if(numbers.length%2 === 0) return true;
  return false;
}
*/
// *new sol.
const isArrayLengthEven = (numbers) => (!isArrayLengthOdd(numbers))


isArrayLengthEven([1, 2, 3, 4]);

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */

/* old sol.

function addLailaToArray(instructors) {
instructors.push("Laila");
return instructors;
}
*/

// *new sol.
const addLailaToArray = (instructors) =>  {instructors.push("Laila")
return instructors}


addLailaToArray(["Mshary", "Hasan"]);


/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */

/* old sol.

function eliminateTeam(teams) {
  let elm = teams.pop();
  return elm;
}
*/


// *new sol.

const eliminateTeam = (teams) => {
  let eliminated = teams.pop()
  return eliminated
}

eliminateTeam(["team1", "team2", "team3"]);

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */

/* old sol

function secondHalfOfArrayIfItIsEven(fruits) {

if (fruits.length%2 === 0){
return fruits.slice(((fruits.length)/2), fruits.length);}
else {return fruits.slice(0, -fruits.length);}
}
*/

// *new sol.
const secondHalfOfArrayIfItIsEven = (fruits) => {
  if (fruits.length%2 === 0) return fruits.slice(fruits.length/2 , fruits.length)
  return []
}

secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"])

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */

// old sol.

 function youGottaCalmDown(shout) {

  while (shout.endsWith('!')){
    while (shout.slice(0,-1).endsWith('!')){
      shout=shout.slice(0,-1);
    }
      
  
      return shout ;
    }
 return shout ;
  }

// *very nice try
/*
  const youGottaCalmDown = (shout) => {
   shout = shout.split("")
   shout.find(element => element === "!")
   return shout
    }
    */

youGottaCalmDown("coded!!!");



module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};

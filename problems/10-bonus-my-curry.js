/* Bonus: Currying

    Write a `myCurry(func, numArgs)` method that returns a function that
    collects arguments until the number of arguments collected is equal
    to the original `numArgs` value and then invokes the curried function.

    The returned function collects arguments and returns the same function,
    until the number of arguments is equal to the original numArgs value.
    
    See examples below:
    const sumFunc = (...nums) => nums.reduce((acc, el) => acc + el);
    const curriedFunc = myCurry(sumFunc, 4);

    curriedFunc(1); // returns a function
    curriedFunc(2); // returns a function
    curriedFunc(3); // returns a function
    curriedFunc(4); // doesn't return a sum until the nth function call ==> 10

*/

let  myCurry = (func, numArgs) => {
    let arryArgs = [];

    let _myCurry = (number) => {

        if (arryArgs.length < numArgs) {
            arryArgs.push(number);
            return _myCurry();
        }

        if (arryArgs.length === numArgs) {
           return func(...arryArgs);
        }
   }

 
    return _myCurry;
}


const sumFunc = (...nums) => nums.reduce((acc, el) => acc + el);
const curriedFunc = myCurry(sumFunc, 4);

curriedFunc(1); // returns a function
curriedFunc(2); // returns a function
curriedFunc(3); // returns a function
console.log(curriedFunc(4)); // doesn't return a sum until the nth function call ==> 10


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = myCurry;
} catch (e) {
    module.exports = null;
}

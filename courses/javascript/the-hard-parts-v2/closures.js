//Section 2:
// ######################################################
// ######################################################

//Section 1:
function createFunction() {
    //This variable is locally scoped, yet the funciton definition whose identifier within this scope is multiplyBy2 will have access to it and will be able to manipulate it and retrieve it via its identifier. 
    let count = 0;
    
    function multiplyBy2(num) {
        console.log(`Call count: ${count}`);

        let test = 'This is a test'
        
        count++;

        //A grandbaby function definition
        function testFunction() {
            return `This is my grampa's variable: ${count} and this is my momma's: ${test}!`
        }

        //This means that the actual functionality of this function will only run once. However the count will be updated as many times as the function definition is called. 
        if (count === 1) {
            return `This is the first return; this value only returns once: ${num * 2}`;
        } else {
            console.log(`Return count: ${count}`)

            //Creating a new closure within a closure. the grandbaby closure. 
            return testFunction;
        }
    }

    return multiplyBy2;
}

//This constant is now the identifier for the function definition of what was multiplyBy2. 
const generatedFunction = createFunction();

//Doing the above is similar if not the same thing as doing this:
// const generatedFunction = function(num) {
//         return num * 2;
// }

//This constant's identifier is now assigned the value returned by generatedFunction.
const result = generatedFunction(4);

console.log(`Result 1: ${result}`);

//This constant's identifier is tied to a different value due to the variable 'count'. It is tied to a new function definition that was defined within the multiplyBy2 function that was defined within the createFunction call. It is a grandbaby function definition, yet it still has access to its parent's and it's grandparent's stored values. 
const result2 = generatedFunction(6);
console.log(`Result 2: ${result2()}`);

//Every time this function is called it will update the count variable. 
generatedFunction(2);
console.log(`Result 3: ${result2()}`);

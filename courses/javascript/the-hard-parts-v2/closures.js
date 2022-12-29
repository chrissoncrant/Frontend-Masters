//Section 2:
// ######################################################
// ######################################################

//Section 1:
function createFunction() {
    //This variable is locally scoped, yet the funciton definition whose identifier within this scope is multiplyBy2 will have access to it and will be able to manipulate it and retrieve it via its identifier. 
    let count = 0;
    
    function multiplyBy2(num) {
        console.log(count);
        
        count++;

        //This means that the actual functionality of this function will only run once. However the count will be updated as many times as the function definition is called. 
        if (count === 1) {
            return num * 2;
        } else {
            console.log('Can only so it once!')
        }
    }

    return multiplyBy2;
}

const generatedFunction = createFunction();

//Doing the above is similar if not the same thing as doing this:
// const generatedFunction = function(num) {
//         return num * 2;
// }

const result = generatedFunction(4);

console.log(result);

//This will not run the above function due to the value of the variable 'count'.
console.log(generatedFunction(5));

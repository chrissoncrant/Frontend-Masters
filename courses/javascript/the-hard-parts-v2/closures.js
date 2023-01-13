//Section 3: Closure Challenges
// http://csbin.io/closures
// solutions: https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/closures.js

//Challenge 3

//Creating a closure "factory". 
function addBy(amount) {
    function amountToBeAddedTo(input) {        
        return input + amount;
    }

    return amountToBeAddedTo;
}


//Creating a specific instance of the above closure; it has an input parameter and it will add 5 to the argument passed into it. 
const addBy5 = addBy(5);

addBy5(10); //15

//Creating another instance of the above closure
const addBy10 = addBy(10);

addBy10(25) //35

// #################################################################

//Challenge 4

//Creating a closure "factory" that takes in a callback and conditions it, returning a closure that is similar to the argument callback in terms of the returned value and the number of parameters.

function moreSpecificOnce(func) {
    let count = 0;

    let value;

    //Notice that the defined parameter 'arg' is setting up and limiting the returned closure to be able to only accept one argument when an instace is called.
    return (arg) => {
        if (count === 0) {
            
            value = func(arg);

            count++; 

            return value;

        } else {
            return value;
        }
    };
}

function generalizedOnce(func) {
    let count = 0;

    let value;

    //spreading the array of arguments
    return (...params) => {
        if (count === 0) {

            value = func(...params);

            count++;
            
            return value;
        } else {
            return value;
        }
    };
}

function add3Numbers(x, y, z) {
    return x + y + z;
}

function add5Numbers(a, b, c, d, e) {
    return a + b + c + d + e;
}

const addOnce = generalizedOnce(add3Numbers);

addOnce(5, 16, 8); //29
addOnce(5, 6, 9); //29

const anotherAddOnce = generalizedOnce(add5Numbers);

anotherAddOnce(2, 4, 5, 6, 1); //18
anotherAddOnce(2, 4, 5, 6, 1); //18

//This is conditioning the addBy5 function to only be run once.
const onceByFive = moreSpecificOnce(addBy5);

onceByFive(5); //10
onceByFive(25); //10

// #################################################################
// #################################################################

//Section 2: 
function outer() {
    let counter = 0;

    function incrementCounter() {
        counter++;
    }

    incrementCounter();

    // console.log(counter);
}

outer(); //1
outer(); //1
outer(); //1

//No matter how many times outer is called, the counter variable will only ever reach 1. This is because with each call the counter variable is created and set to 0. 

//In order to have this counter's data to persist we can use closures:

function outerWithClosure() {
    let counter = 0;

    // function incrementCounter() {
    //     counter++;

    //     // console.log(counter);
    // }

    //Note that we can also simply return the anonymous function and it works the same as returning 'incrementCounter'
    return () => {
        counter++;

        // console.log(counter);
    };
}

const incrementCounter = outerWithClosure();

incrementCounter(); //1
incrementCounter(); //2
incrementCounter(); //3
//Now, with the above, we have a counter that will increment and persist the counter variable's data as it changes. Note that the counter variable is not globally accessible.


//Below is a new instance of the same closure above. This does not interfere with the first instance. It starts fresh, it gets a new backpack.
const incrementCounter2 = outerWithClosure();

incrementCounter2(); //1
incrementCounter2(); //2
incrementCounter2(); //3

//Below is connecting the identifier incrementCounter3 with the value (which is a closure) that is connected to incrementCounter. In this case calling incrementCounter3 will update the counter variable that was already updated by calling incrementCounter previousely.
const incrementCounter3 = incrementCounter;

incrementCounter3(); //4
incrementCounter3(); //5


//What we are doing below is showing that the running/calling of a function doesn't determine the access to variables, but rather it is the environment within which the funciton is defined that matters.
function incrementCounter4() {
    counter++;
    console.log(counter);
}

function outer3() {
    let counter = 0;

    incrementCounter4();
}

// outer3();


// ######################################################
// ######################################################

//Section 1: Intro to Closures
function createFunction() {
    //This variable is locally scoped, yet the funciton definition whose identifier within this scope is multiplyBy2 will have access to it and will be able to manipulate it and retrieve it via its identifier. 
    let count = 0;
    
    function multiplyBy2(num) {
        console.log(`Call count: ${count}`);

        let test = 'This is a test';
        
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
// const generatedFunction = createFunction();

//Doing the above is similar if not the same thing as doing this:
// const generatedFunction = function(num) {
//         return num * 2;
// }

//This constant's identifier is now assigned the value returned by generatedFunction.
// const result = generatedFunction(4);

// console.log(`Result 1: ${result}`);

//This constant's identifier is tied to a different value due to the variable 'count'. It is tied to a new function definition that was defined within the multiplyBy2 function that was defined within the createFunction call. It is a grandbaby function definition, yet it still has access to its parent's and it's grandparent's stored values. 
// const result2 = generatedFunction(6);
// console.log(`Result 2: ${result2()}`);

//Every time this function is called it will update the count variable. 
// generatedFunction(2);
// console.log(`Result 3: ${result2()}`);

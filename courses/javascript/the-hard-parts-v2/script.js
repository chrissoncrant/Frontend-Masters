//Section 2: Functions and Callbacks

//Why we use functions; notice below the repetitiveness
function tenSquared() {
    return 10 * 10;
}

function nineSquared() {
    return 9 * 9;
}

//All the above is much tidier by writing a better function. We create a more generalized function. We keep what is the same and use a parameter as a placeholder for that which changes:
function squareNum(inputNumber) {
    return inputNumber * inputNumber;
}

//Higher Order functions are even more generalized. Instead of leaving the data to be determined, we leave the functionality itself, the code itself, to be determined. 

//This is not the higher-order function:
function copyArrayAndMultiplyBy2(array) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2);
    }

    return output
}

const array1 = [1, 2, 3];

const array2 = copyArrayAndMultiplyBy2(array1);


//This isn't the higher order function either, but writing it out allows us to see what is the same and therefore what can be generalized:
function copyArrayAndDivideBy2(array) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2);
    }

    return output
}

const array3 = copyArrayAndDivideBy2(array1);

//This one isn't a higher order function either (are we feeling annoyed yet?):
function copyArrayAndAdd3(array) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        output.push(array[i] + 3);
    }

    return output
}

const array4 = copyArrayAndAdd3(array1);

console.log(array4);
//The Higher-Order Function:
function copyAndProcess(array, fn) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        output.push(fn(array[i]));
    }

    return output
}


//**************************************
//**************************************

//Section 1: JS Principles

// const num = 3;

// function multiplyBy2(inputNumber) {
//     const result = inputNumber * 2;

//     return result;
// }

// const output = multiplyBy2(num);

// const newOutput = multiplyBy2(10);

// console.log(output, newOutput);

//Section 2:
function printHello() {
    console.log('Hello!');
}

//This utilizes the Timer feature of the Web Browser. It requires the duration and the thing to do after that duration has run its course. This facade function only sets the Timer, so technically right after calling it, this line of code is finished and we can move on to the next.
setTimeout(printHello, 1000);

console.log('Do me first!');

// Section 1:
const num = 3;

function multiplyBy2(inputNumber) {
    const result = inputNumber * 2;

    return result;
}

const output = multiplyBy2(num);

//Before we get to this line of code, the value of output had to be assigned first, which means the multiplyBy2 function had to be called and it's code had to run line by line.
const newOutput = multiplyBy2(10);
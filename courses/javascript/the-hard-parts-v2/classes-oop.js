// Section 1:
// The purpose of classes is to organize code.

//Three main qualities one should aim for in coding: 1) Easy to reason about (read and understand) 2) Easy to add features to 3) Efficient and Performant

//OOP paradigm helps with the above 3 goals

// The Goal: Create user objects.
// Needed functionality for each user: increment user score by one. 

//Notice that at this point we can decide: define this functionality on each user object as it is created, or define it once as a User object, then create specific instances of that object for each user as needed. 


//The inefficient way. Note however that it is the act of being inefficient that the inefficiency is revealed and therefore accounted for.

// ########################################
// Different ways of creating the user object:

//Super Basic. Defining a new object value, then using the dot operator to define properties and methods:
const user1 = {};

user1.name = 'Greg';
user1.score = 7;
user1.incrementScore = function() {
    user1.score++;
}

// ########################################
//Defining the user's properties and methods upon creation of the object value:
const user2 = {
    name: 'Tim',
    score: 3,
    incrementScore() {
        this.score++;
    }
};

// ########################################
//Using Object.create()
const user3 = Object.create(null);

user3.name = 'Phillip';
user3.score = 2;
user3.incrementScore = function() {
    this.score++;
}

// user3.incrementScore();
// console.log(user3);

// ########################################
//Object Factory Functions:
// The below approach is fundamentally wrong because each user will store its own version of the function itself; if you wanted to add a new feature to the user, each user would have to be updated individually. Best to have each user, no matter what, have a single source of truth for those fundamental things common across all users. 

function userCreator(name, score) {
    const newUser = {};

    newUser.name = name;
    newUser.score = score;
    newUser.incrementScore = function() {
        newUser.score++;
    };

    return newUser;
}

const user4 = userCreator('Trisha', 2);

const user5 = userCreator('Marie', 15);

// console.log(user5);
// user5.incrementScore();
// console.log(user5);


//Demonstrating Single Source of Truth based on how object (and function) assignment works:
function singleSourceOfTruth() {
    console.log('Yo yoda yo');
}

//Both of the functions below are pointing to the same function object value. Changing the single source of truth updates the change for all. 
const branch1 = singleSourceOfTruth;

const branch2 = singleSourceOfTruth;

// branch1();
// branch2();

// Notice how this object of common methods (there could be more here if need be) will serve as a source of truth for user6. What's going on below is similar to what is happening with prototype chain.
let prototypeObj = {
    increment() {
        console.log('Hey hey now')
        this.score++;
    },
    login() {
        console.log(`Hi there ${this.name}! You're all logged in!`);
    }
}

const user6 = {
    name: 'Kyle',
    score: 2,
    increment: prototypeObj.increment
}

// console.log(user6);
// user6.increment();
// console.log(user6);

// This is another way of doing the above. The difference is that here 'prototypeObj' becomes the prototype for the object value assigned to user7.
const user7 = Object.create(prototypeObj);

user7.name = 'Emily';
user7.score = 5;

// console.log(user7);
// user7.increment();

//Using this concept we can create a more effective userCreator2 Factory by also using an as the prototype for all the objects created within the factory.

function userCreator2(name, score) {
    //This ties the storedUserFunctions object as a prototype to the newly created object
    const newUser = Object.create(storedUserFunctions);

    newUser.name = name;

    newUser.score = score;

    return newUser;
}

const storedUserFunctions = {
    increment() {
        this.score++;
        console.log(`Your score is now ${this.score}.`)
    },
    login() {
        console.log(`Hello there ${this.name}! You're all logged in!`);
    }
}

const user8 = userCreator2('Will', 20);

const user9 = userCreator2('Lily', 12);

// user8.increment();

// user9.increment();

// user8.login();

// console.log(user8.hasOwnProperty('increment'));
// console.log(user8.valueOf());

// console.log(user8.__proto__) //storedUserFunctions
// console.log(user8.__proto__.__proto__) //Object
// console.log(user8.__proto__.__proto__.__proto__) //null


// Example of 'this' keyword for functions
storedUserFunctions.increment2 = function() {    
    function incrementer() {
        //In this situation 'this' will refer to Window due to where the function will be defined when the parent function is called.
        this.score++;
        console.log(this);
        console.log(this.score);
    }

    //.call calls the incrementer function and attaches the parent object to the 'this' keyword in incrementer function's execution context.
    incrementer.call(this);
}

// user9.increment2();

storedUserFunctions.increment3 = function() {    
    const add1 = () => {
        //In this situation 'this' will refer to the parent object. Special bonus feature of arrow functions.
        this.score++;
        console.log(this);
        console.log(this.score);
    }

    //No need for .call is in above.
    add1();
}

// user9.increment3();

// ###############################
// ###############################
// Functions are Objects:

function multiplyBy2(num) {
    return num * 2;
}

//Adding a property and method value to the object of the function.
multiplyBy2.stored = 5;

multiplyBy2.printHello = function() {
    console.log(this, 'Hello')
};

multiplyBy2.prototype.sayHi = function() {console.log('Hi hi hiiii!')};

// This shows all the properties and methods of the object connected to the function, both those in the object itself, and the method stored in the object assigned to the 'prototype' property of the object connected to the function value:
// console.log(multiplyBy2.prototype)

// ###############################
// ###############################
// 'New' Keyword:

function userCreator3(name, score) {
    //The commented things are what the 'new' keyword replaces:

    // const newUser = Object.create(storedUserFunctions);
    // newUser.name = name;
    // newUser.score = score;
    // return newUser;

    //All the above replaced by this:
    this.name = name;
    this.score = score;
};

//Adding functions to the object assigned to the 'prototype' property of the automatically generated object, which will become the prototype (like the storedUserFunctions object above) of the object returned by using 'new' keyword:

userCreator3.prototype = {
    increment () {
        this.score++;
    },
    sayHi() {
        console.log('Hi there' + this.name);
    }
}

//This is a method assigned on the automatically generated object, not on the 'prototype' object. The 'prototype' object is a property of the automatically generated object. 
userCreator3.goAway = function() {
    console.log('Go away!');
}

// console.log(userCreator3.prototype);

const user10 = new userCreator3('Tom', 10);

user10.increment();

// console.log(userCreator3.prototype);


// ###############################
// ###############################
// Classes

class UserCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    };

    //Now able to add metheds to the prototype object
    increment() {
        this.score++;
        console.log('New Score', score);
    };

    sayHi() { console.log('Hi there.') };
}

const user11 = new UserCreator('Linda', 7);

// console.log(user11.sayHi());
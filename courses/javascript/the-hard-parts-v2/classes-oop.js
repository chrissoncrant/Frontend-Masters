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
console.log(user7);

//Using this concept we can create a more effective userCreator2 Factory by also using an as the prototype for all the objects created within the factory.
function userCreator2(name, score) {
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

user8.increment();
console.log(user8);

user9.increment();
console.log(user9);
// Section 1:

function display(data) {
    console.log(data);
}

//This 'facade' function below is doing 2 things: It is making a network request, which is something JS cannot do in and of itself, and it is returning, into JS territory, an object that we can interact with.

//The object, the Promise Object, that is wired up to the identifier 'futureData' will have 2 properties: value and onFulfilled. The 'value' property will be undefined upon the immediate creation of this object. The 'onFulfilled' property is a hidden property tied to what is currently an empty array.

//The 'value' property is where the Response Data is added to once the Reponse Object is received in reponse to the Request.

// const futureData = fetch('https://twitter.com/will/tweets/1');

//The futureData identifier has data connected to it. This data is in the form of a Promise object. This object has a method associated with it called '.then()'. It is this method that we pass our callback, which we defined at the start, into.
// futureData.then(display)
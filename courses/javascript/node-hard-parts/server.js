console.log('howdy');

const http = require('http');

const PORT = 5020;

const array = ['Hello', 36, 'Meow', 42];

//The arguments that will be passed into the function below will be set by Node. They will be the result of the HTTP request being parsed and set up as a JS object by Node. Two objects will be auto created by Node. These will be passed in as the arguments to the doOnIncoming callback. 
function doOnIncoming(inputObject, functionsToSetOutgoingData) {
    // console.log(functionsToSetOutgoingData);
    functionsToSetOutgoingData.end('Welcome!');
}

//http.createServer()is a Node command. It engages with the Net feature of Node, which, through C++ and libuv, engages with the computer's network card to open up a socket.

const server = http.createServer(doOnIncoming);

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
# Notes

####################################
####################################
## Node with HTTP Section
When calling http.createServer(doSomething), 3 things happen - one in JS, and two in Node.
- object is returned and assigned to the constant (JavaScript)
- Engaging the background feature. Feature varies based on the facade JS function. In this case we are using the Network feature. (Node)
- store and set the callback to autorun when a request is received. (Node)

## Components of HTTP Request
- request line (method, path): GET '/collection/item'
- headers
- body (used with POST)

## Flow of the HTTP Request
- HTTP request received in the port, then, by way of libuv, the http request is sent into Node, which uses C++ to creates request and response objects, then translates access and functionality into JavaScript terms, the objects are passed into the callback as the arguments and Node autoruns the callback, stuff happens, response object is filled, Node translates it back and fills its response object and engages the Network feature by way of libuv to send the response back

// Create web server application
// 1. Create a web server application that can listen to client requests
// 2. Create a router for the application
// 3. Create a handler for the router
// 4. Return a JSON response to the client
// 5. Test the application

// 1. Create a web server application that can listen to client requests
// Import http module
const http = require("http");
// Import url module
const url = require("url");

// Create server
const server = http.createServer((req, res) => {
  // Get the request url
  const urlObj = url.parse(req.url, true);

  // Get the path
  const path = urlObj.pathname;

  // Get the query string as an object
  const queryStringObj = urlObj.query;

  // Get the http method
  const method = req.method.toLowerCase();

  // Send response to client
  res.end("Hello world!");
});

// Listen to port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

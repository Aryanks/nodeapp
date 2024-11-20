// Import the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status
  res.setHeader('Content-Type', 'text/plain'); // Content type
  res.end('Hello, World! ARYAN\n'); // Response
});

// Define the port and start the server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

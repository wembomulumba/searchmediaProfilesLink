const express = require('express');
const mongodb = require('mongoose');
const app = express();
const port = 4001

// An example middleware function
let a_middleware_function = function(req, res, next) {
  
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(port);

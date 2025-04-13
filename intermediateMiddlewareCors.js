// INTERMEDIATE LEVEL (Custom Middleware Logic)

// 4. Create a middleware 'checkToken'.
// If req.headers.token === 'abc123', allow the user to access '/dashboard'. Else, respond with 403.

// Middleware to check token

const checkToken = (req, res, next) => {
  if (req.headers.token === 'abc123') {
    next();
  } else {
    res.status(403).send("Invalid Token");
  }
};

app.get('/dashboard', checkToken, (req, res) => {
  res.send("Welcome to Dashboard");
});

// 5. Make a route '/admin' that uses two middlewares:  
//    - 'isLoggedIn' (checks if user is logged in)  
//    - 'isAdmin' (checks if user is an admin)

// isLoggedIn and isAdmin middlewares

const isLoggedIn = (req, res, next) => {
  if (req.headers.user) next();
  else res.status(401).send("Not logged in");
};

const isAdmin = (req, res, next) => {
  if (req.headers.role === 'admin') next();
  else res.status(403).send("Admins only");
};

app.get('/admin', isLoggedIn, isAdmin, (req, res) => {
  res.send("Welcome Admin");
});


// 6. Create a middleware that adds a timestamp to the 'req' object and send it in the response.
// Add timestamp

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});

app.get('/time', (req, res) => {
  res.send(`Requested at: ${req.requestTime}`);
});

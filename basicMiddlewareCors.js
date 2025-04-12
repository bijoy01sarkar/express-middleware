// BASIC LEVEL (Understanding Middleware)

// 1. Create a simple Express server.
// Add a custom middleware that logs `method` and `URL` of each incoming request.

// Log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


// 2. Create a middleware to block requests at night.
// (Only allow requests from 6 AM to 10 PM)

//Block requests at night
app.use((req, res, next) => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour <= 22) {
    next();
  } else {
    res.status(403).send("We are sleeping");
  }
});


// 3. Use built-in middleware.
// Use 'express.json()' to parse POST data and send back the same data in response.

// Use express.json()
app.use(express.json());

app.post('/echo', (req, res) => {
  res.json(req.body);
});


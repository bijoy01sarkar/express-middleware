// ADVANCED LEVEL (CORS and Multiple Middlewares)
// 7. Set up CORS only for specific origin (`http://localhost:3000`).

// Enable CORS for only one origin

const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000"
}));

// 8. Allow CORS for two domains only (`localhost:3000`, `myfrontend.com`) and only for `GET` and `POST` methods.
// Allow CORS for two domains and specific methods

app.use(cors({
  origin: function(origin, callback) {
    const allowedOrigins = ["http://localhost:3000", "https://myfrontend.com"];
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"]
}));

// 9. Create an error-handling middleware that logs the error to console and sends a nice error message to the client.
// Error-handling middleware

app.use((err, req, res, next) => {
  console.error("ERROR:", err.stack);
  res.status(500).send("Something broke!");
});

// 10. Chain 3 middlewares on a single route that:
//     - logs request
//     - adds user info to request
//     - checks access level before continuing

// Chain 3 middlewares

const logger = (req, res, next) => {
  console.log("Log:", req.method, req.url);
  next();
};

const addUser = (req, res, next) => {
  req.user = { name: "John", role: "admin" };
  next();
};

const checkAccess = (req, res, next) => {
  if (req.user.role === "admin") next();
  else res.status(403).send("Access denied");
};

app.get('/secure', logger, addUser, checkAccess, (req, res) => {
  res.send(`Hello ${req.user.name}, you have access!`);
});

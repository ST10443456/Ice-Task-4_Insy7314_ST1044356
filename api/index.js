const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(express.json());

// Apply Helmet security headers
app.use(helmet());

// Configure Content Security Policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
    },
  })
);

// Test endpoint
app.get("/", (req, res) => {
  res.json({
    message: "API is running securely",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
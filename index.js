const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoute");

const app = express();
const PORT = 8081;
const apiVersion = "/api/v1";

// Middleware to parse JSON data from requests
app.use(express.json());
app.use(cors());

// Login endpoint
app.use(`${apiVersion}/user`,userRoutes );

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

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


const autoRunner = async() => {
  await fetch("https://zygalbackend.onrender.com/api/v1/user/login");
}
setInterval(() => {
  autoRunner()
}, 600000);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

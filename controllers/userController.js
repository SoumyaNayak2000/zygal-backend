const fs = require("fs");
// Read user data from the JSON file
const userData = JSON.parse(fs.readFileSync("./users.json", "utf8"));
console.log(userData);

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = userData.find(
      (u) => u.email_id === email && u.password === password
    );

    console.log(user);
    if (user) {
      // Successful login
      res.status(200).json({ message: "success" });
    } else {
      // Invalid credentials
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Bad request", invalid: error.keyValue });
  }
};

module.exports = { loginUser };

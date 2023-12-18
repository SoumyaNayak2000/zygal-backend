const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")



router.post("/login", async (req, res) => {
    // console.log(req.body);
    try {
        userController.loginUser(req, res);
    } catch (error) {
        res.status(500).send({
          message: "Error occurred",
          error,
        });
    }
});
module.exports = router;
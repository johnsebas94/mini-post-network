const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

// http://localhost:3003/api/user/register-user
router.post("/register-user", userController.registerUser);
// http://localhost:3003/api/user/list-user
router.get("/list-user/:name?", Auth, ValidateUser, userController.listUser);

module.exports = router;
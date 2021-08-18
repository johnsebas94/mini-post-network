const express = require("express");
const router = express.Router();
const AuthController = require ("../controllers/auth");

//http://localhost:3003/api/auth/login
router.post("/login", AuthController.login);

module.exports = router;
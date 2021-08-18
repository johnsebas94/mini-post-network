const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");

//http://localhost:3003/api/post/create-post
router.post("/create-post", Auth, ValidateUser, PostController.createPost);
//http://localhost:3003/api/post/list-post
router.get("/list-post", Auth, ValidateUser, PostController.listPost);

module.exports = router;

const Post = require("../models/post");
const User = require("../models/user");

const createPost = async (req, res) => {
  if (!req.body.text || !req.body.hashtag)
    return res
      .status(400)
      .send("Process Failed: Incomplete data, complete data and try again");

  const post = new Post({
    userId: req.user._id,
    text: req.body.text,
    hashtag: req.body.hashtag,
  });
  const result = await post.save();
  if (!result) return res.status(400).send("Process Failed: Failed to post");
  return res.status(200).send({ result });
};

const listPost = async (req, res) => {
  //const post = await Post.find().populate("userId").exec();
  //const post = await Post.findById(req.user._id).populate("userId").exec();
  const post = await Post.find({ userId: req.user._id }).exec();
  if (!post || post.length === 0) return res.status(401).send("No post");
  return res.status(200).send({ post });
};

module.exports = { createPost, listPost };

const express = require("express");
const cors = require("cors");
const {dbConnectionPostNet} = require("./db/db_post_network");
const User = require("./routes/user");
const Post = require("./routes/post");
const Auth = require("./routes/auth");

require("dotenv").config();

//Create aplication
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/user", User);
app.use("/api/post", Post);
app.use("/api/auth", Auth);

//Listen 3003 Port
app.listen(process.env.PORT, () => console.log("Backend server is running OK on port: ",process.env.PORT));

//Connect with DataBase
dbConnectionPostNet();
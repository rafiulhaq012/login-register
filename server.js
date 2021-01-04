const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

require("./mongo")
require("./model/Post")

app.use(cors());
app.use(bodyParser.json())

app.use("/posts", require("./route/posts"))

app.listen(1200, function(){
    console.log("server listening at 1200")
})    
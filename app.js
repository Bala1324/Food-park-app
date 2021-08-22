const express = require("express");
const app = express();
const os = require("os");
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", require("./controller/user.controller"))
app.use("/admin", require("./controller/admin.controller"))


let server = app.listen(3000, function(){
	console.log('Server listen on port: 3000');
})
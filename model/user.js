const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {type: String, required: true },
	mobile: {type: String, required: true },
	password: {type: String, required: true },
	new_password: {type: String, required: false},

},{
	timestamps: true
});

module.exports = mongoose.model('user', userSchema);
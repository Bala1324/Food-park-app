const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	uuid: {type: String, required: false, unique: true},
	email: {type: String, required: true },
	mobile: {type: String, required: true },
	password: {type: String, required: true },
	new_password: {type: String, required: false},

},{
	timestamps: true
});

userSchema.pre("save", function(next){
	this.uuid = "user"+ crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
	next();
})


module.exports = mongoose.model('user', userSchema);
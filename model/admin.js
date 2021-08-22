const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	uuid: {type: String, required: false, unique: true},
},{
	timestamps: true
});

adminSchema.pre("save", function(next){
	this.uuid = "admin"+ crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
	next();
})


module.exports = mongoose.model('admin', adminSchema);
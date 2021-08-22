const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
	uuid: {type: String, required: false, unique: true},
	category: {type: String, required: true},
    dish_name: {type: String, required: true },
	dish_price: {type: String, required: true },
	image_uri: {type: String, required: false },
    _id: {type: String, required: false }
},{
	timestamps: true
});

foodSchema.pre("save", function(next){
	this.uuid = "food"+ crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
	next();
})


module.exports = mongoose.model('food', foodSchema);
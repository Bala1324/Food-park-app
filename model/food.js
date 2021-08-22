const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
	category: {type: String, required: true},
    dish_name: {type: String, required: true },
	dish_price: {type: String, required: true },
	image_uri: {type: String, required: false },
    _id: {type: String, required: false }
},{
	timestamps: true
});

module.exports = mongoose.model('food', foodSchema);
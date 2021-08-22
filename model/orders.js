const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
            user_email: {type: String, required: true},
            dish_count: {type: String, required: true},
            dish_id: {type: String, required: false},
			Food_id: {type: String, required: true},
            dish_name: {type: String, required: true},
			dish_price: {type: String, required: true},
			image_uri: {type: String, required: false},
            approve_status: {type: String, required: false, default: "false"} 
},{
	timestamps: true
});

module.exports = mongoose.model('orders', ordersSchema);
const mongoose = require("mongoose");
const crypto = require("crypto");

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    uuid: {type: String, required: false, unique: true},
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

ordersSchema.pre("save", function(next){
	this.uuid = "order"+ crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
	next();
})


module.exports = mongoose.model('orders', ordersSchema);
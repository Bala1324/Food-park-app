const express = require("express");
const router = express.Router();
const adminService = require("./admin.service.js");


router.post('/addFoodDetails', addFoodDetails);
router.get("/getTheFoodDetails", getTheFoodDetails);
router.put("/updateTheFoodDetails", updateTheFoodDetails);
router.delete("/deleteTheUserDetails", deleteTheFoodDetails);
// router.get("/listOrdersByUserDetails", listOrdersByUserDetails);
router.get("/fetchOrdersDetails", fetchOrdersDetails);
router.put("/approveOrder", approveOrder);
router.delete("/cancelOrder", cancelOrder);

module.exports = router;

// add the food 
function addFoodDetails(req,res,next) {
	adminService.addFoodDetails(req.body, function(result){
		res.json({"status": "Success", "message": "Food details successfully stored", "data": result})
	})
};

// get the user detail
function getTheFoodDetails(req,res,next) {
	adminService.getTheFoodDetails(req.body, function(result){
		res.json({"status": "Success", "message": "Food details fetched successfully", "data": result});
	})
}


// update the food details
function updateTheFoodDetails(req,res, next) {
	adminService.updateTheFoodDetails(req.body, function(result){
		res.json({"status": "Success", "message": "Food details updated successfully", "data": result})
	})
}

//Delete the Food details
function deleteTheFoodDetails(req,res, next) {
	adminService.deleteTheFoodDetails(req.body, function(result){
		res.json({"status": "Success", "message": "food details deleted successfully"})
	})
}

// //list how many orders by User
// function listOrdersByUserDetails(req,res, next) {
// 	adminService.listOrdersByUserDetails(req.query, function(result){
// 		res.json({"status": "Success", "message": "fetched Orders by user successfully"})
// 	})
// }
//Fetch the order details
function fetchOrdersDetails(req,res, next) {
	userService.fetchOrdersDetails(req.query, function(result){
		res.json({"status": "Success", "message": "Orders Details fetched successfully"})
	})
}


//approve the order
function approveOrder(req,res, next) {
	adminService.approveOrder(req.query, function(result){
		res.json({"status": "Success", "message": "Order Approved"});
	})
}

//cancle the order
function cancelOrder(req,res, next) {
	adminService.cancelOrder(req.query, function(result){
		res.json({"status": "Success", "message": "Order Canceled"})
	})
}

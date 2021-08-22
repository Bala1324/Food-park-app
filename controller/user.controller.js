const express = require("express");
const router = express.Router();
const userService = require("./user.service.js"); 

// router.post('/RegisterUser', RegisterUser);
// router.get("/loginUser", loginUser);
// router.get("/forgetPassword", forgetPassword);
// router.post("/ResetPassword", ResetPassword);
//router.get("/verifyAccount", verifyAccount);

// router.get("/emailIDAvailability", userService.emailIDAvailability);
// router.get("/mobile_Availability", userService.mobile_Availability);
router.post("/register", userService.registerUser);
router.get("/login", userService.loginUser);
 router.put("/forgetPassword", userService.forgetPassword);
 router.put("/resetPassword", userService.resetPassword);
 router.put("/logout", userService.logout);
 router.get("/getFoodDetails",getTheFoodDetails);
 router.get("/createOrder",userService.createOrder);

module.exports = router;

// get the user detail
function getTheFoodDetails(req,res,next) {
	userService.getTheFoodDetails(req.body, function(result){
		res.json({"status": "Success", "message": "Food details fetched successfully", "data": result});
	})
}

// function createOrder(req,res,next) {
// 	userService.createOrder(req.body, function(result){
// 		res.json({"status": "Success", "message": "Food details fetched successfully", "data": result});
// 	})
// }

// // Register User
// function RegisterUser(req,res,next) {
// 	userService.RegisterUser(req.body, function(result){
// 		res.json({"status": "Success", "message": "User Signup Successfully", "data": result})
// 	})
// };

// // Login User
// function loginUser(req,res,next) {
// 	userService.loginUser(req.body, function(result){
// 		res.json({"status": "Success", "message": "User Login successfully", "data": result});
// 	})
// }

// // Forget password
// function forgetPassword(req,res,next) {
// 	userService.forgetPassword(req.query, function(result) {
// 		res.json({"status": "Success", "message": "Temporary password has been send your email", "data":result})
// 	})
// }

// // Reset password
// function ResetPassword(req,res, next) {
// 	userService.ResetPassword(req.body, function(result){
// 		res.json({"status": "Success", "message": "Password changed  successfully", "data": result})
// 	})
// }



// // //Verify account
// // function verifyAccount(req,res, next) {
// // 	userService.verifyAccount(req.query, function(result){
// // 		res.json({"status": "Success", "message": "Account verification success"})
// // 	})
// // }
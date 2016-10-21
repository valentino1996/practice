var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	
		name: {
			type:String
		},
		surname: {
			type:String
		},
		email: {
			type: String,
			unique: true
		},
		age:{
			type: Number
		},
		gender:{
			type: String
		}
	
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
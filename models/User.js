const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true, // Unique email for each user
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
	},
	role: {
		// User role (normal or admin)
		type: Number,
		default: 0,
	},
	history: {
		// Order history
		type: Array,
		default: [],
	},
});

module.exports = User = mongoose.model("User", UserSchema);

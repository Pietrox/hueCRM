import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: false,
		default: 'user'
	},
	created: {
		type: Date,
		required: false,
		default: Date.now
	}
});

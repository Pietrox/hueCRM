import * as mongoose from 'mongoose';

export const LeadsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: false
	},
	phone: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		required: true,
		default: Date.now,
	},
	owner: {
		type: String,
		required: true,
		default: 'Admin',
	}
});

import * as mongoose from 'mongoose';

export const LeadsSchema = new mongoose.Schema({
	name: {
		title: 'Name',
		type: String,
		required: true,
	},
	email: {
		title: 'Email',
		type: String,
		required: true,
	},
	address: {
		title: 'Address',
		type: String,
		required: true,
	},
	phone: {
		title: 'Address',
		type: String,
		required: true,
	},
	created: {
		title: 'Created Date',
		type: Date,
		required: false,
		default: Date.now,
	},
	owner: {
		title: 'Assigned To',
		type: String,
		required: false,
		default: 'Admin',
	}
});

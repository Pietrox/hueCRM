import * as mongoose from 'mongoose';

const autoIncrement = require('mongoose-auto-increment');


export const LeadsSchema = new mongoose.Schema({
  leadId: {
	type: Number,
	required: false
  },
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
	required: false,
	default: Date.now
  },
  owner: {
	type: String,
	required: true,
	default: 'Admin'
  }
});

autoIncrement.initialize(mongoose.createConnection(process.env.DATABASE));
LeadsSchema.plugin(autoIncrement.plugin, {
  model: 'Leads',
  field: 'leadId',
  startAt: 1
});

import * as bcrypt from 'bcryptjs';
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

UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {
	try {
		if (!this.isModified('password')) {
			return next();
		}
		const hashed = await bcrypt.hash(this['password'], 10);
		this['password'] = hashed;
		return next();
	} catch (err) {
		return next(err);
	}
});

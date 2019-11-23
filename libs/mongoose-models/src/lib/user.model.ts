import {Document} from 'mongoose';

export interface UserModel extends Document {
	username: string;
	email: string;
	readonly password: string;
	role: string
	created: string;
	
}

import {Document} from 'mongoose';

export interface LeadsModel extends Document {
	name: string;
	email: string;
	address: string;
	phone: string;
	created: Date;
	owner: string;
}

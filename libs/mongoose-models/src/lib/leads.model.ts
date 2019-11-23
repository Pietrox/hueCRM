import {Document} from 'mongoose';

export interface LeadsModel extends Document {
	name: string;
	email: string;
	address: string;
	phone: string;
	created: string;
	owner: string;
}

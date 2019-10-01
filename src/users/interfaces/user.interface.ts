import { Document } from 'mongoose';

export interface UserInterface extends Document{
    readonly userName: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
}

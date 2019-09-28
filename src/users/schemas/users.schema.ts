import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Text, required: true}
});
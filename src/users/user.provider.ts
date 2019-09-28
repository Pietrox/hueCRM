import { Connection } from 'mongoose';
import {userSchema} from "./schemas/users.schema";

export const userProvider = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('User', userSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
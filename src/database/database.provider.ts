import * as mongoose from 'mongoose';

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useFindAndModify: false }),
    },
];
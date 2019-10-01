import 'dotenv/config';

const host = process.env.HOST;
const port = process.env.PORT;
const mongo = process.env.MONGO_URI;
const devMode = process.env.DEV_MODE === 'true';

export class ConfigurationService {
    host = host;
    port = port;
    static mongo = mongo;
    devMode = devMode;

}
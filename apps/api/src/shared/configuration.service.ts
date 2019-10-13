import 'dotenv/config';

const host = process.env.HOST;
const port = process.env.PORT;
const database = process.env.MONGO_URI;
const devMode = process.env.DEVMODE.toLowerCase() === 'true';
const payloadSessionTime = process.env.PAYLOAD_SESSION_TIME;

export class ConfigurationService {
    host = host;
    port = port;
    database = database;
    devMode = devMode;
	payloadSessionTime = payloadSessionTime;

}

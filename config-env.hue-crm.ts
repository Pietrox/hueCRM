const fs = require('fs');
require('dotenv').config();

const HOSTNAME = process.env.HOSTNAME;
const PROTOCOL = process.env.PROTOCOL;
const PORT = process.env.PORT;
const BACKEND_URL = process.env.BACKEND_URL;
const DATABASE = process.env.DATABASE;
const DATABASE_TEST = process.env.DATABASE_TEST;
const DEVMODE = process.env.DEVMODE;
const PAYLOAD_SESSION_TIME = process.env.PAYLOAD_SESSION_TIME;
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const ALL_USERS = process.env.ALL_USERS;
const LOGIN = process.env.LOGIN;
const REGISTER = process.env.REGISTER;
const AUTH_DELETE = process.env.AUTH_DELETE;
const ALL_LEADS = process.env.ALL_LEADS;
const CREATE_LEAD = process.env.CREATE_LEAD;
const GET_LEAD_BY_ID = process.env.GET_LEAD_BY_ID;
const UPDATE_LEAD = process.env.UPDATE_LEAD;
const DELETE_LEAD = process.env.DELETE_LEAD;

const targetPath = `./apps/hue-crm/src/environments/environment.ts`;
const envConfigFile = `export const environment = {
    production: false,
    HOSTNAME:'${HOSTNAME}',
	PROTOCOL:'${PROTOCOL}',
	PORT:'${PORT}',
	BACKEND_URL:'${BACKEND_URL}',
	DATABASE:'${DATABASE}',
	DATABASE_TEST:'${DATABASE_TEST}',
	DEVMODE:'${DEVMODE}',
	PAYLOAD_SESSION_TIME:'${PAYLOAD_SESSION_TIME}',
	AUTH_TOKEN:'${AUTH_TOKEN}',
	ALL_USERS:'${ALL_USERS}',
	LOGIN:'${LOGIN}',
	REGISTER:'${REGISTER}',
	DELETE:'${AUTH_DELETE}',
	ALL_LEADS:'${ALL_LEADS}',
	CREATE_LEAD:'${CREATE_LEAD}',
	GET_LEAD_BY_ID:'${GET_LEAD_BY_ID}',
	UPDATE_LEAD:'${UPDATE_LEAD}',
	DELETE_LEAD:'${DELETE_LEAD}'
    };`
;
fs.writeFile(targetPath, envConfigFile, function (err) {
	if (err) {
		console.log(err);
	}
});

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

const HOME_URL = process.env.HOME_URL;
const SETTINGS_URL = process.env.SETTINGS_URL;
const LOGIN_URL = process.env.LOGIN_URL;
const AUTH_URL = process.env.AUTH_URL;
const LEADS_URL = process.env.LEADS_URL;

const ALL_USERS = process.env.ALL_USERS;
const LOGIN = process.env.LOGIN;
const REGISTER = process.env.REGISTER;
const AUTH_DELETE = process.env.AUTH_DELETE;

const API_LEAD_MODEL = process.env.API_LEAD_MODEL;
const API_ALL_LEADS = process.env.API_ALL_LEADS;
const API_CREATE_LEAD = process.env.API_CREATE_LEAD;
const API_GET_LEAD_BY_ID = process.env.GET_LEAD_BY_ID;
const API_UPDATE_LEAD = process.env.UPDATE_LEAD;
const API_DELETE_LEAD = process.env.DELETE_LEAD;

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
	HOME_URL:'${HOME_URL}',
	AUTH_URL:'${AUTH_URL}',
	LOGIN_URL:'${LOGIN_URL}',
	SETTINGS_URL:'${SETTINGS_URL}',
	ALL_USERS:'${ALL_USERS}',
	LOGIN:'${LOGIN}',
	REGISTER:'${REGISTER}',
	DELETE:'${AUTH_DELETE}',
	LEADS_URL: '${LEADS_URL}',
	API_LEAD_MODEL: '${API_LEAD_MODEL}',
	API_ALL_LEADS:'${API_ALL_LEADS}',
	API_CREATE_LEAD:'${API_CREATE_LEAD}',
	API_GET_LEAD_BY_ID:'${API_GET_LEAD_BY_ID}',
	API_UPDATE_LEAD:'${API_UPDATE_LEAD}',
	API_DELETE_LEAD:'${API_DELETE_LEAD}'
    };`
;
fs.writeFile(targetPath, envConfigFile, function (err) {
	if (err) {
		console.log(err);
	}
});

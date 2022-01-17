const fs = require('fs');

const DIALECT = 'postgres';

require('dotenv').config();

module.exports = {
	development: {
		username: process.env.DB_UNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: DIALECT,
		dialectOptions: {
			bigNumberStrings: true
		}
	}
};

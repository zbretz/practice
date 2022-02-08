const fs = require('fs');

const DIALECT = 'postgres';

require('dotenv').config();

module.exports = {
	development: {
		username: 'zach',//process.env.DB_UNAME,
		password: 'postgres',//process.env.DB_PASSWORD,
		database: 'test',//process.env.DB_NAME,
		host: 'localhost',//process.env.DB_HOST,
		port: 5432,//process.env.DB_PORT,
		dialect: DIALECT,
		dialectOptions: {
			bigNumberStrings: true
		}
	}
};

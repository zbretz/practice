const roleSchema = {
	id: {
		type: 'UUID',
		primaryKey: true,
		defaultValue: 'UUIDV4'
	},
	role: {
		type: 'STRING',
		allowNull: false
	}
};

module.exports = roleSchema;

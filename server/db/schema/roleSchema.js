const roleSchema = {
	id: {
		type: 'INTEGER',
		primaryKey: true,
		autoIncrement: true
	},
	role: {
		type: 'STRING',
		allowNull: false
	}
};

module.exports = { roleSchema };

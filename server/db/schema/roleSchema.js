const roleSchema = {
	id: {
		type: 'INTEGER',
		primaryKey: true,
		autoIncrement: true
	},
	role: {
		type: 'STRING',
		allowNull: false,
		unique: true
	}
};

module.exports = { roleSchema };

const userSchema = {
	id: {
		type: 'UUID',
		primaryKey: true
	},
	email: {
		type: 'STRING',
		allowNull: false,
		validate: {
			isEmail: true,
			notEmpty: true
		}
	},
	password: {
		type: 'STRING',
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	role_id: {
		type: 'INTEGER',
		allowNull: false,
		references: {
			model: 'roles',
			key: 'id',
			onDelete: 'CASCADE'
		}
	},
	name: {
		type: 'STRING',
		allowNull: false,
		validate: {
			notEmpty: true
		}
	}
};

module.exports = { userSchema };

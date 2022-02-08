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
		type: 'STRING',
		allowNull: false,
		references: {
			model: 'roles',
			key: 'role'
		}
	},
	name: {
		type: 'STRING',
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	active: {
		type: 'BOOLEAN',
		allowNull: false,
		defaultValue: true,
		validate: {
			isBoolean: (val) => typeof val === 'boolean'
		}
	}
};

module.exports = { userSchema };

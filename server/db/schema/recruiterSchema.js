const recruiterSchema = {
	id: {
		type: 'INTEGER',
		primaryKey: true,
		autoIncrement: true
	},
	user_id: {
		type: 'UUID',
		allowNull: false,
		unique: true,
		references: {
			model: 'users',
			key: 'id',
			onDelete: 'CASCADE'
		}
	},
	industry: {
		type: 'STRING',
		defaultValue: ''
	},
	region: {
		type: 'STRING',
		defaultValue: ''
	},
	company_stage: {
		type: 'STRING',
		defaultValue: ''
	},
	company_size: {
		type: 'STRING',
		defaultValue: ''
	},
	company_name: {
		type: 'STRING',
		defaultValue: ''
	}
};

module.exports = { recruiterSchema };

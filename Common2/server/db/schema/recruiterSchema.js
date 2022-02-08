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
			key: 'id'
		},
		onDelete: 'CASCADE'
	},
	firebase_id: {
		type:'STRING',
		defaultValue: 'gobbledygook'
	},
	industry: {
		type: 'STRING',
		defaultValue: 'Technology'
	},
	region: {
		type: 'STRING',
		defaultValue: ''
	},
	company_stage: {
		type: 'STRING',
		defaultValue: 'Start-up'
	},
	company_size: {
		type: 'STRING',
		defaultValue: 'Medium'
	},
	company_name: {
		type: 'STRING',
		defaultValue: ''
	}
};

module.exports = { recruiterSchema };

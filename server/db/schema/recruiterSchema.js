const recruiterSchema = {
	id: {
		type: 'INTEGER',
		primaryKey: true,
		autoIncrement: true
	},
	industry: {
		type: 'STRING'
	},
	region: {
		type: 'STRING'
	},
	company_stage: {
		type: 'STRING'
	},
	company_size: {
		type: 'STRING'
	},
	company_name: {
		type: 'STRING'
	},
	user_id: {
		type: 'UUID',
		allowNull: false,
		references: {
			model: 'users',
			key: 'id',
			onDelete: 'CASCADE'
		}
	}
};

module.exports = { recruiterSchema };

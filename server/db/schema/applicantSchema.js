const applicantSchema = {
	id: {
		type: 'INTEGER',
		primaryKey: true,
		autoIncrement: true
	},
	user_id: {
		type: 'UUID',
		allowNull: false,
		references: {
			model: 'users',
			key: 'id',
			onDelete: 'CASCADE'
		}
	},
	experience: {
		type: 'INTEGER',
		defaultValue: 0
	},
	linkedIn: {
		type: 'STRING',
		defaultValue: ''
	},
	school: {
		type: 'STRING',
		defaultValue: ''
	},
	desired_position: {
		type: 'STRING',
		defaultValue: ''
	},
	desired_industry: {
		type: 'STRING',
		defaultValue: ''
	},
	desired_company_size: {
		type: 'STRING',
		defaultValue: ''
	},
	desired_company_stage: {
		type: 'STRING',
		defaultValue: ''
	},
	desired_region: {
		type: 'STRING',
		defaultValue: ''
	},
	resume: {
		type: 'STRING',
		defaultValue: ''
	}
};

module.exports = { applicantSchema };

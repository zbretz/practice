const applicantSchema = {
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
	experience: {
		type: 'INTEGER',
		defaultValue: 0
	},
	linkedIn: {
		type: 'STRING',
		defaultValue: ''
	},
	background: {
		type: 'STRING',
		defaultValue: 'Bootcamp Graduate'
	},
	school: {
		type: 'STRING',
		defaultValue: 'Flatiron School'
	},
	review_blurb: {
		type: 'STRING',
		defaultValue: 'Strong Front End skills. Strong Implementation. Solid data structure aptitude.',
	},
	desired_position: {
		type: 'STRING',
		defaultValue: 'Full-stack Developer'
	},
	desired_industry: {
		type: 'STRING',
		defaultValue: 'Technology'
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

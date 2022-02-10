const interviewSchema = {
	id: {
		type: 'INTEGER',
		primaryKey: true,
		autoIncrement: true
	},
	interview: {
		type: 'INTEGER',
		allowNull: false,
		references: {
			model: 'interviews',
			key: 'id'
		},
		onDelete: 'CASCADE'
	},
	criterion: {
		type: 'STRING',
		defaultValue: 'system design'
	},
	rating: {
		type: 'INTEGER',
		defaultValue: 4
	},
};

module.exports = { interviewSchema };

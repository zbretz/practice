const evaluationSchema = {
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
		defaultValue: 'Candidate communicated clearly'
	},
	rating: {
		type: 'INTEGER',
		defaultValue: 4
	},
};

module.exports = { evaluationSchema };

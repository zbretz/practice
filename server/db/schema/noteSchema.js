const noteSchema = {
	id: {
		type: 'INTEGER',
		primaryKey: true,
		autoIncrement: true
	},
	notes_by: {
		type: 'UUID',
		allowNull: false,
		references: {
			model: 'users',
			key: 'id'
		},
		onDelete: 'CASCADE'
	},
	notes_for: {
		type: 'UUID',
		allowNull: false,
		references: {
			model: 'applicants',
			key: 'user_id'
		},
		onDelete: 'CASCADE'
	},
	notes: {
		type: 'STRING',
		defaultValue: ''
	}
};

module.exports = { noteSchema };

const interviewSchema = {
	id: {
		type: 'INTEGER',
		primaryKey: true,
		autoIncrement: true
	},
	interviewee: {
		type: 'UUID',
		allowNull: false,
		references: {
			model: 'applicants',
			key: 'user_id'
		},
		onDelete: 'CASCADE'
	},
	phase: {
		type: 'STRING',
		defaultValue: 'system design'
	},
	interviewer: {
		type: 'STRING',
		defaultValue: 'zach bretz'
	},
	performance_summary: {
		type: 'STRING',
		defaultValue: 'this is the applicants performance summary for this intrview phase.'
	},
	video: {
		type: 'STRING',
		defaultValue: 'fake_video_url.mp4'
	},
	// evaluation: {
	// 	type: 'INTEGER',
	// 	allowNull: false,
	// 	references: {
	// 		model: 'evaluations',
	// 		key: 'id'
	// 	},
	// 	onDelete: 'CASCADE'
	// }
};

module.exports = { interviewSchema };

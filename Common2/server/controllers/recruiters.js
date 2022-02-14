const { User, Recruiter } = require('../db/models/index');
const { joinConfig } = require('../utils/db-utils');
const { notFoundError, systemError, remapResponse, remapResponses } = require('../utils/utils');

const recruiterControllers = {};

recruiterControllers.update = async (req,res,next) => {
console.log('update')
// 	Book.update(
// 		{title: req.body.title},
// 		{returning: true, where: {id: req.params.bookId} }
// 	)
// 	.then(function([ rowsUpdate, [updatedBook] ]) {
// 		res.json(updatedBook)
// 	})
// 	.catch(next)
//  })



// const jane = await User.create({ name: "Jane" });
// 	res.send(jane)


	Recruiter.update(
			{firebase_id: "GgaRWJL6UAQ6I75YHxltByzmshh2"},
			{where: {"id":"1"}}
		).then(result => (

			Recruiter.update(
				{firebase_id: "gMekPSi4QSUl2BDCHqFRZzqQJBn2"},
				{where: {"id":"2"}}
			).then(result2 => console.log('success'))
			// .catch(e => console.log(e))

		))
			// .then(result => (
			// 	res.send('success1')
			// )
		.catch(e => next(systemError(e)))

}

recruiterControllers.getAllRecruiters = async (req, res, next) => {
	console.log('sdsdsd')
	try {
		const recruiters = await Recruiter.findAll(joinConfig(User));
		res.status(200).json(remapResponses(recruiters));
	} catch (e) {
		next(systemError(e));
	}
};

recruiterControllers.getRecruiterById = async (req, res, next) => {
	try {
		//this does not work
		let { id } = req.params.id;
		//this does work
		id = String(req.params.id)

		// const recruiter = {
		// 	id: "GgaRWJL6UAQ6I75YHxltByzmshh2",
		// 	user_id: "007",
		// 	experience: "1 year",
		// 	linkedIn: "fakeperson@linkedin.com",
		// 	school: "Hack Reactor",
		// 	desired_position: "Full-stack Developer",
		// 	desired_industry:"Tech",
		// 	desired_company_size: "Small",
		// 	desired_company_stage: "Start Up",
		// 	desired_region: "Remote",
		// 	resume: "/myresume/fakeperson",
		// 	role: "recruiter",
		// 	email: "test5@test.com",
		// 	password: "yeqpuUbjdsTMYEfD3OcjwEL7AAk1",
		// 	name: "Robert Saget"
		// }

		console.log(String(id))

		// const recruiters = {
		// 	GgaRWJL6UAQ6I75YHxltByzmshh2: {
		// 		user_id: "GgaRWJL6UAQ6I75YHxltByzmshh2",
		// 		firebase_id: "GgaRWJL6UAQ6I75YHxltByzmshh2",
		// 		name: "Robert Saget 1"
		// 	},

		// 	gMekPSi4QSUl2BDCHqFRZzqQJBn2: {
		// 		user_id: "007",
		// 		experience: "1 year",
		// 		linkedIn: "fakeperson@linkedin.com",
		// 		school: "Hack Reactor",
		// 		desired_position: "Full-stack Developer",
		// 		desired_industry:"Tech",
		// 		desired_company_size: "Small",
		// 		desired_company_stage: "Start Up",
		// 		desired_region: "Remote",
		// 		resume: "/myresume/fakeperson",
		// 		role: "recruiter",
		// 		email: "test5@test.com",
		// 		password: "yeqpuUbjdsTMYEfD3OcjwEL7AAk1",
		// 		name: "Robert Saget 2"
		// 	}
		// }

		// const recruiter = recruiters[id]
		// console.log(recruiters)


		// return recruiter ? res.status(200).json(recruiter) : next(notFoundError('Recruiter'));


		const recruiter = await Recruiter.findOne({
			...joinConfig(User),
			where: {
				firebase_id: id
			}
		});
		return recruiter
			? res.status(200).json(remapResponse(recruiter))
			: next(notFoundError('Recruiter'));
	} catch (e) {
		next(systemError(e));
	}
};

module.exports = recruiterControllers;

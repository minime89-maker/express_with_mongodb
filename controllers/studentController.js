const Student = require('../models/Student')

const create_student = async (req, res) => {
	const { name, first_name, email } = req.body

	try {
		const student = await Student.create({
			name,
			first_name,
			email
		})
		res.json(student)
	} catch (err) {
		res.status(500).send(err.message)
	}
}

const get_students = async (req, res) => {
	try {
		const students = await Student.find()
		res.json(students)
	} catch (err) {
		res.status(500).send(err.message)
	}
}

const update_student = async (req, res) => {
	try {
		const students = await Student.updateMany({
			$set: { name: 'Bob'}
		})
		if(!students) return res.status(404).send('No one with the name John')
		res.json(students)
	} catch (err) {
		res.status(500).send(err.message)
	}
}

module.exports = { create_student, get_students, update_student }
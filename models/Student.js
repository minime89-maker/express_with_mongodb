const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema ({
	name: { type: String, min: 3, max: 50, required: true},
	first_name: { type: String, min: 2, max: 50, required: true},
	email: { type: String, min: 3, max: 100, required: true },
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
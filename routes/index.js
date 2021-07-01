const express = require('express');
const router = express.Router();
const { create_student, get_students, update_student } = require('../controllers/studentController')

router.post('/', create_student)
router.get('/', get_students)
router.put('/', update_student)

module.exports = router;

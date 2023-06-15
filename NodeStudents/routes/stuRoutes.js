// importthe express and make one route
const express = require('express')
const controller = require('../controllers/students.js')
routes = express.Router()

//get and add a student
routes.route('/').get(controller.getAllStudents).post(controller.addStudent)
routes.route('/:id').get(controller.getSingleStudent).put(controller.updateStudent).delete(controller.deleteStudent)

module.exports = routes
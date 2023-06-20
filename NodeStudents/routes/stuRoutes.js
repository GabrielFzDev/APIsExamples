// importthe express and make one route
const express = require('express')
const controllerS = require('../controllers/students.js')
routes = express.Router()

//Students
routes.route('/').get(controllerS.getAllStudents).post(controllerS.addStudent)
routes.route('/:id').get(controllerS.getSingleStudent).put(controllerS.updateStudent).delete(controllerS.deleteStudent)


//Classes
module.exports = routes
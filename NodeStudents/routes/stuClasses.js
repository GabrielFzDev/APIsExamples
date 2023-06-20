// importthe express and make one route
const express = require('express')
const controllerC = require('../controllers/classes.js')
routes = express.Router()

//Classes
routes.route('/').get(controllerC.viewClass).post(controllerC.createClass)
routes.route('/students/:id').get(controllerC.studentClass)
module.exports = routes
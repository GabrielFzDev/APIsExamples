const express = require('express')
const router = express.Router()
const controllers =require('../controllers/tasks.js')


router.route('/').get(controllers.getAllTasks).post(controllers.createTask)
router.route('/:id').get(controllers.getTask).patch(controllers.updateTask).delete(controllers.deleteTask)

module.exports = router
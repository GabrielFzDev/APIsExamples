const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:String,
    completed: Boolean,

})

//setting up first collection
module.exports = mongoose.model('Task', TaskSchema)
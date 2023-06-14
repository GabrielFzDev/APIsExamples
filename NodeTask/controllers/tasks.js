const task = require('../models/task.js')

//Controllers
//Get all the data
const getAllTasks = async(req,res)=>{
        const document = await task.find()
        return res.send(JSON.stringify(document))
}

// Create new Data
const createTask = async (req,res)=>{
    const {name,completed}  = req.body
    
    // create or save can adding in database
    // if ay err ocurred
    try{
        await task.create({
            name: name,
            completed: completed,
        })
    }catch(err){
        console.log(err)
    }
    // if all good
    return res.send('Created a new task')
}

//get a single Task
const getTask = async (req,res)=>{
    const {id} = req.params
    const document = await task.find({_id: id}).exec()
    if(document.length == 0){
        return res.send('Não foi achado o Objeto')
    }
    res.send(JSON.stringify(document))
}

// Update a single task
const updateTask = async (req,res)=>{
    //get the document by id
    const {id} = req.params

    //get data to update
    const {name,completed}  = req.body

    //find the document
    const document = await task.findOne({_id: id})

    //replacing the data insinde the document
    document.name = name
    document.completed = completed

    //update
    document.save()

    res.send(`Update the task ${id}`)
}

//Delete a task
const deleteTask = async(req,res)=>{
    //getting id
    const {id} = req.params

    await task.deleteOne({_id:id})
    res.send(`Deleted item ${id}`)
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
db = require('../db/connection.js')


//get all students
getAllStudents = async(req,res)=>{
    await db.query('SELECT * FROM STUDENTS',(error,results) =>{
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

//add some student
addStudent = async (req,res)=>{
    //Se for um objeto Vazio
    if (Object.keys(req.body).length === 0) return res.send('Empty fields')
    
    const {name,email,dob} = req.body

    await db.query('INSERT INTO students (name,email,dob) values ($1,$2,$3)', values=[
        name,
        email,
        dob
    ])

    
    return res.send(`Inserted with sucess student ${name}`)
}

//get 1 single student
getSingleStudent = async(req,res)=>{
    const {id} = req.params
    await db.query(`SELECT * FROM STUDENTS WHERE id = ${id}`,(error,results) =>{
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

//Update a single student
updateStudent = async (req,res)=>{
    const {id} = req.params

    const {name,email,dob} = req.body
    await db.query(`UPDATE students SET name = ($1),email = ($2), dob = ($3) where id = ${id}`, values=[
        name,
        email,
        dob
    ],(err,result) =>{
        //Caso de erro ou de certo
        if(err) throw err
        console.log(result)
    })
    
    return res.send(`Updated with sucess student ${name}`)
}

//delete student 
deleteStudent = async (req,res)=>{
    const {id} = req.params
    await db.query(`delete from students where id = ${id}`,(err,result)=>{
        if(err) throw err
    })
    return res.send(`Student Deleted`)
}

module.exports = {
    getAllStudents,
    addStudent,
    updateStudent,
    getSingleStudent,
    deleteStudent
}
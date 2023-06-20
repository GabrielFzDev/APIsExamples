db = require('../db/connection.js')

const viewClass = async(req,res)=>{
    await db.query('SELECT * FROM CLASS',(error,results)=>{
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const createClass = async(req,res) =>{
    if (Object.keys(req.body).length === 0) return res.send('Empty fields')
    const {name,serie,quant_max} = req.body
    await db.query('INSERT INTO CLASS (NOME,SERIE,QUANT_MAX) VALUES ($1,$2,$3)', values=[
        name,
        serie,
        quant_max
    ],(error,results)=>{
        if (error) return res.status(400)
    })

    return res.status(200).send('Inserido com sucesso')
}

const studentClass = async(req,res) =>{
    const {id} = req.params
    await db.query(`SELECT * from students where class_id = ${id}`,
    (error,results) =>{
        return res.status(200).json(results.rows)
    })
}

//get 1 single student
getSingleClass = async(req,res)=>{
    const {id} = req.params
    await db.query(`SELECT * FROM CLASS WHERE id = ${id}`,(error,results) =>{
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

//Update a single student
updateClass = async (req,res)=>{
    const {id} = req.params

    const {name,serie,quant_max} = req.body
    await db.query(`UPDATE CLASS SET nome = ($1),serie = ($2), quant_max = ($3) where id = ${id}`, values=[
        name,
        serie,
        quant_max
    ],(err,result) =>{
        //Caso de erro ou de certo
        if(err) throw err
    })
    
    return res.send(`Updated with sucess class ${name}`)
}

//delete student 
deleteClass = async (req,res)=>{
    const {id} = req.params
    await db.query(`delete from class where id = ${id}`,(err,result)=>{
        if(err) throw err
    })
    return res.send(`Class Deleted`)
}

module.exports = {
    viewClass,
    createClass,
    studentClass
}
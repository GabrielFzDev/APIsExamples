const express = require('express')
const students = require('./routes/stuRoutes.js')
const classes = require('./routes/stuClasses.js')

const app = express()


const port = 3000

app.use(express.json())
app.use('/api/v1/students',students)
app.use('/api/v1/class',classes)

app.listen(port, console.log(`App is litening ${port}`))
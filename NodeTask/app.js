/**
 * Inilicializar o express, usando o require e inicilaizar usando app = express()
 * podemos utilzar um arquivo chamado de routes para fazer as rotas, mas ta tudo bem
 * sempre usando as variaveis request and response
 * nas rotas da API usar a versão para caso tivermos de fazer mudanças
 */
const express = require('express');
const app = express();
const tasks = require('./routes/task.js')
require('dotenv').config()

//Conexao db
const connectDB = require('./db/connect.js')

//middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks',tasks)
const port = 3000

// função para somente abrir o servidor quando o banco estiver ativo já
const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to DB')
        app.listen(port, console.log(`server is lintening on port ${port}`))
    }catch (err) {
        console.log(err)
    }
}

start()


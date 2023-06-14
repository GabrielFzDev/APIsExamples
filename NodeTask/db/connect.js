//library
const mongoose= require("mongoose") 
//connect

const connectDB = (url) =>{
    mongoose
    .connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true,
    })    
}

module.exports = connectDB



const mongoose = require("mongoose")
const connect = ()=>
{
    return mongoose.connect("mongodb+srv://haleema:zehera@cluster0.pp0jc.mongodb.net/haleemawebsite?retryWrites=true&w=majority")
}
module.exports=connect

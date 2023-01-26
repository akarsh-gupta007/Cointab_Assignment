const mongoose =require("mongoose");
mongoose.set('strictQuery', true);
const connection =mongoose.connect("mongodb://localhost:27017/assignment")

module.exports=connection;
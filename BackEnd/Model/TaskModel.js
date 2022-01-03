const  mongo  = require("mongoose");

const TaskSchema=mongo.Schema({
  title:String,
  date:String,
  time:String
});

const TaskModel=mongo.model("Task",TaskSchema);

module.exports=TaskModel;
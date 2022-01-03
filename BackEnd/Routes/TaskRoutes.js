const express=require("express");
const TaskRouter=express.Router();
TaskRouter.use(express.json());

const TaskController=require("../Controller/TaskController");

TaskRouter.get("/",TaskController.Default);
TaskRouter.post("/addTask",TaskController.addTask);
TaskRouter.get("/deleteTask/:id",TaskController.deleteTask);
TaskRouter.get("/fetchFromId/:id",TaskController.fetchFromId);
TaskRouter.post("/updateTask",TaskController.updateTask);
module.exports=TaskRouter;
const TaskModel = require("../Model/TaskModel");

exports.Default= async  (req,res)=>{
    const data=await TaskModel.find();
    if(data.length!==0){
        return res.json(data);
    }
}

exports.addTask=(req,res)=>{
    const {Task}=req.body;
    console.log(Task);
    TaskModel.create(Task).then(()=>{
        res.json("Insert SuccessFully!!");
        console.log("Insert Successfully!!");
    }).catch((err)=>{
        console.log(err);
    });
}

exports.updateTask=(req,res)=>{
    const {id,Task}=req.body;
    console.log(id+" "+Task);
    TaskModel.findOneAndUpdate({
        _id:id
    },
    {
        title:Task.title,
        time:Task.time,
        date:Task.date
    }
    ).then(()=>{
        res.json("Update SuccessFully!!!");
        console.log("Update SuccessFully!!!")
    }).catch((err)=>{
        console.log(err);
    });
}

exports.fetchFromId= async (req,res)=>{
    const data=await TaskModel.findById(req.params.id);
    if(data.length!==0){
        return res.json(data);
    }
}

exports.deleteTask=(req,res)=>{
    const id=req.params.id;
    TaskModel.findOneAndDelete(
        {_id:id}
    ).then(()=>{
        
    res.json("Delete SuccessFully!!!");
    }).catch((err)=>{
        console.log(err);
    });
}
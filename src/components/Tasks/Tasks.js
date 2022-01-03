import React from "react";
import "../bootstrap.css";
import "../style.css";
import Task from "../Task/Task";

const Tasks = (props) => {
    const classArray=['bg-dark','bg-warning','bg-teal','bg-pink','bg-indigo'];
    const DeleteTaskHandler = (id) =>{
        props.onDeleteTask(id);
    }
    const UpdateTaskHandler=(id)=>{
        props.onUpdateTask(id);
    }
    return(
        <div className="card m-md-5">
            <div className="card-body">
                {
                    props.tasks.map((item)=>{
                        return (<Task class={classArray[Math.floor(Math.random()*5)]} DeleteTask={DeleteTaskHandler} UpdateTask={UpdateTaskHandler} id={item._id} key={item._id} time={item.time} date={item.date} title={item.title}></Task> );
                    })
                }
                
            </div>
        </div>
    )
};

export default Tasks;

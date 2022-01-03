import React, { useState } from "react";
import "../bootstrap.css";
import "../style.css";
const UpdateForm = (props) => {
  const newDate = new Date(props.data.date);
  const date =
    newDate.getFullYear() +
    "-" +
    newDate.toLocaleString("en-US", { month: "2-digit" }) +
    "-" +
    newDate.toLocaleString("en-US", { day: "2-digit" });
  const [userInput, setuserInput] = useState({
    title: props.data.title,
    date: date,
    time: props.data.time,
  });
  const taskTitleHandler = (e) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };

  const taskDateHandler = (e) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value,
      };
    });
    console.log(userInput.date);
  };
  const taskTimeHandler = (e) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        time: e.target.value,
      };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newData={
        title:userInput.title,
        date:new Date(userInput.date),
        time:userInput.time
    };
    props.onUpdateTask({id:props.data._id,data:newData});
    setuserInput({
      title: "",
      date: "",
      time: "",
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="card ml-5 mr-5 mt-3">
        <div className="card-body text-dark">
          <div className="row">
            <div className="col-md-6 col-12 offset-md-3">
              <label>Task Name</label>
              <input
                type="text"
                placeholder="Enter Task Name"
                onChange={taskTitleHandler}
                value={userInput.title}
                className="form-control"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-12 offset-md-3">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                value={userInput.date}
                onChange={taskDateHandler}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-12 offset-md-3">
              <label>Time</label>
              <input
                type="time"
                value={userInput.time}
                className="form-control"
                onChange={taskTimeHandler}
              />
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6 col-12 offset-md-3 text-center">
              <button
                type="button"
                onClick={props.onCancel}
                className="btn btn-danger mr-1"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success ml-1">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default UpdateForm;

import React, { useState } from "react";

const GoalForm = (props) => {
  const [initialVal, setGoalVal] = useState("");
  const goalChangeHandler = (event) => {
    setGoalVal(event.target.value);
  };
  const saveGoalHandler = (event) => {
    event.preventDefault();
    props.OnsaveGoal(initialVal);
  };

  return (
    <div>
      <form onSubmit={saveGoalHandler}>
        <label>Course Goal</label>
        <input type="text" onChange={goalChangeHandler} />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default GoalForm;

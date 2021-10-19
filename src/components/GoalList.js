import React from "react";

const GoalList = (props) => {
  return (
    <div>
      <ul>
        <li onClick={props.onRemoveGoalHandler}>{props.goalData}</li>
      </ul>
    </div>
  );
};

export default GoalList;

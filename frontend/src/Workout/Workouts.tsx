import React from "react";
import { WorkoutContext } from "./WorkoutProvider";
import { Link } from "react-router-dom";

export class Workouts extends React.Component {

  public render() {
    return (
      <WorkoutContext.Consumer>
        {({ workouts, add, removeWorkout }) => (
          <div>
            <Link to="/workout/">Create workout</Link>
            <ul>
              {workouts.map((workout, index) => {
                return <li key={index}>{workout.id} - {workout.type} - <button onClick={() => removeWorkout(workout)}>X</button></li>
              })
              }
            </ul>
          </div>
        )}
      </WorkoutContext.Consumer>
    )
  }

}
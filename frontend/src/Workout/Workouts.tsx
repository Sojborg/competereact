import React, { useContext } from "react";
import { WorkoutContext } from "./WorkoutProvider";
import { Link } from "react-router-dom";
import { IWorkout } from "./IWorkout";

export function Workouts () {
  const workoutContext = useContext(WorkoutContext);
  const workouts = workoutContext.workouts; 

  const removeWorkout = function(workout: IWorkout) {
    workoutContext.removeWorkout(workout);
  }

  return (
      <div>
        <Link to="/workout/">Create workout</Link>
        <ul>
          {workouts.map((workout: IWorkout, index) => {
            const url = `/workout/${workout.id}`;
            return <li key={index}><Link to={url}> {workout.id} - {workout.type}</Link> - <button onClick={() => removeWorkout(workout)}>X</button></li>
          })
          }
        </ul>
      </div>
  )
}
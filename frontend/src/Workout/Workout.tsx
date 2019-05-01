import React, { useState, useEffect, useContext } from "react";
import { WorkoutContext } from "./WorkoutProvider";
import { IWorkout } from "./IWorkout";
import history from '../History';

interface IProps {
  id: string
}

export function Workout(props: IProps) {
  const [workout, setWorkout] = useState({} as IWorkout);
  const workoutContext = useContext(WorkoutContext);

  const add = async (workout: IWorkout) => {
    await workoutContext.add(workout);
    history.push('/workouts');
  }

  useEffect(() => {
    if (props.id) {
      const workoutId = parseInt(props.id, 10);
      const workout = workoutContext.getWorkout(workoutId);
      setWorkout(workout);
    }
  });
  
  return (        
        <div>
          <h1>Workout</h1>
          <h3>{workout.type}</h3>
          
          <button onClick={() => add({id: 0, type: 'swim', length: 1, durationHour: 0, durationMin: 33, durationSec: 1})}>Add workout</button>
        </div>
      )
}
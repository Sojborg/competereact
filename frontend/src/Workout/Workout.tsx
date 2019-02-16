import React from "react";
import { WorkoutContext } from "./WorkoutProvider";

export class Workout extends React.Component {

  public render() {
    return (
      <WorkoutContext.Consumer>
        {({ add, getWorkout }) => (          
          <div>
            <h3>Workout</h3>
            
            <button onClick={() => add({id: 0, type: 'swim', length: 1, durationHour: 0, durationMin: 33, durationSec: 1})}>Add workout</button>
          </div>
        )}
      </WorkoutContext.Consumer>
    )
  }
}
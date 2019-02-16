import React from "react";
import './Widget.css';
import { WorkoutContext } from "../../Workout/WorkoutProvider";

export class WorkoutsWidget extends React.Component {
  public render() {
    return (
      <WorkoutContext.Consumer>
        {({ workouts }) => (
          <div className="widget">
            <h3>Workouts</h3>
            <ul>
              {workouts ? workouts.map(w =>
                <li>
                  {w.type} - time: {w.durationHour}:{w.durationMin}:{w.durationSec}
                </li>
              ) : <></>}
            </ul>
          </div>
        )}
      </WorkoutContext.Consumer>
      );
  }
}

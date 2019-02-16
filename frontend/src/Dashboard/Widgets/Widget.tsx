import React from "react";
import { IWidget } from "../DashboardProvider";
import "./Widget.css"
import { WorkoutContext } from "../../Workout/WorkoutProvider";

interface IProps {
  widget: IWidget
}

export class Widget extends React.PureComponent<IProps> {
  public render() {
    return (
      <WorkoutContext.Consumer>
        {({ workouts }) => (
          <div className="widget">
            <h3>{this.props.widget.title}</h3>
            <ul>
              {workouts.map(w =>
                <li>
                  {w.type} - time: {w.durationHour}:{w.durationMin}:{w.durationSec}
                </li>)}
            </ul>
          </div>
        )}
      </WorkoutContext.Consumer>
    )
  }
}
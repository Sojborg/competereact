import React from "react";
import { DashboardContext } from "./DashboardProvider";
import { Widget } from "./Widgets/Widget";
import "./Dashboard.css";

export class Dashboard extends React.Component {

  public render() {
    return (
      <div>
      <DashboardContext.Consumer>
        {({widgets}) => (
        <div className='dashboard'>
          {
            widgets.map(widget => {
              return widget
            })
          }
        </div>
        )}
      </DashboardContext.Consumer>
      </div>
    )
  }
}
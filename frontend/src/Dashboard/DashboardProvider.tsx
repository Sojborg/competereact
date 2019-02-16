import React from "react";
import { WorkoutsWidget, LeaguesWidget } from "./Widgets";

export interface IWidget {
  title: string
}

export interface IDashboardContext {
  widgets: React.ReactChild[]
}

export const DashboardContext = React.createContext({ } as IDashboardContext);
export class DashbordProvider extends React.Component {

  state = {
    widgets: new Array<React.ReactChild>(
      <WorkoutsWidget />,
      <LeaguesWidget />      
    )
  }

  public render() {
    return (
      <DashboardContext.Provider value={{widgets: this.state.widgets}}>
        {this.props.children}
      </DashboardContext.Provider>
    )
  }
}


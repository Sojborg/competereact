import React from "react";
import { IWorkout } from "./IWorkout";

interface IWorkoutContext {
  workouts: IWorkout[],
  add: (workout: IWorkout) => void
  removeWorkout: (workout: IWorkout) => void,
  getWorkout: (id: number) => IWorkout
}

export const WorkoutContext = React.createContext({} as IWorkoutContext);
export class WorkoutProvider extends React.Component {
  state = { 
    currentWorkout: {
    } as IWorkout,
    workouts: new Array<IWorkout>()
  }

  async componentDidMount() {
    const res = await fetch('/fake-workouts.json');
    const workouts = await res.json();

    this.setState({workouts});
  }

  getWorkout = (id: number) : IWorkout => {
    return this.state.workouts.filter(w => w.id === id)[0];
  }

  addWorkout = (workout: IWorkout): Promise<boolean> => {
    const newWorkoutList = [...this.state.workouts, workout];
    this.setState({workouts: newWorkoutList});
    return Promise.resolve(true);
  }

  removeWorkout = (workout: IWorkout) => {
    const newWorkoutList = this.state.workouts.filter(w => w.id !== workout.id);
    this.setState({workouts: newWorkoutList});
  }

  render() {
    return (
      <WorkoutContext.Provider value={ 
        { 
          workouts: this.state.workouts,
          add: this.addWorkout,
          removeWorkout: this.removeWorkout,
          getWorkout: this.getWorkout
        }
      }>
        {this.props.children}
      </WorkoutContext.Provider>
    )
  }
}
import React, { Component } from 'react';
import './App.css';
import { WorkoutProvider } from './Workout/WorkoutProvider';
import { Workouts } from './Workout/Workouts';
import { DashbordProvider } from './Dashboard/DashboardProvider';
import { Dashboard } from './Dashboard/Dashboard';
import { Menu } from './Menu/Menu';
import { Router as Router, Route } from 'react-router-dom';
import { Workout } from './Workout/Workout';
import history from './History';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <WorkoutProvider>
            <DashbordProvider>
              <Menu />
              <Route path="/" exact component={Dashboard} />
              <Route exact={true} path="/workouts/" component={Workouts} />
              <Route path="/workout/:id" render={props => (
                  <Workout id={props.match.params.id} />
              )} />
              <Route exact path="/workout" component={Workout} />
            </DashbordProvider>
          </WorkoutProvider>
        </div>
      </Router>
    );
  }
}

export default App;

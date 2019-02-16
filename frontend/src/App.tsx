import React, { Component } from 'react';
import './App.css';
import { WorkoutProvider } from './Workout/WorkoutProvider';
import { Workouts } from './Workout/Workouts';
import { DashbordProvider } from './Dashboard/DashboardProvider';
import { Dashboard } from './Dashboard/Dashboard';
import { Menu } from './Menu/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Workout } from './Workout/Workout';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <WorkoutProvider>
            <DashbordProvider>
              <Menu />
              <Route path="/" exact component={Dashboard} />
              <Route path="/workouts/" component={Workouts} />
              <Route path="/workout/:id" component={Workout} />
              <Route path="/workout/" component={Workout} />
            </DashbordProvider>
          </WorkoutProvider>
        </div>
      </Router>
    );
  }
}

export default App;

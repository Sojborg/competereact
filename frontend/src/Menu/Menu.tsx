import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom';

export class Menu extends React.Component {

  public render() {
    return (
      <nav className="menu">
        <Link to="/">Dashboard</Link>
        <Link to="/workouts/">Workouts</Link>
      </nav>
    )
  }
}
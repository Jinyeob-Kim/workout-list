import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/subcomponents/Header/Header";
import Home from "./components/Home";
import List from "./components/WorkoutList/List";
import CreateWorkout from "./components/CreateWorkout/CreateWorkout";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/exercises" component={List} />
          <Route path="/create" component={CreateWorkout} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

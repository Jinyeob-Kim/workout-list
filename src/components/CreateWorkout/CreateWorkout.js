import React, { Component } from "react";
import axios from "axios";
import MWFList from "./DiffWorkouts/MWF/MWFList";
import MTTFList from "./DiffWorkouts/MTTF/MTTFList";

class CreateWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: [],
      days1: [],
      days2: [],
      workouts1: [],
      workouts2: [],
      numberOfDays: 0
    };

    this.threeDays = this.threeDays.bind(this);
    this.fourDays = this.fourDays.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/exercises")
      .then(response => {
        console.log(response);
        this.setState({
          exercises: response.data
        });
      })
      .catch(console.log);
  }

  threeDays() {
    let mwfWorkouts = this.state.exercises.filter(
      exercise =>
        exercise.category == "11" ||
        exercise.category == "12" ||
        exercise.category == "9" ||
        exercise.category == "10"
    );
    this.setState({
      workouts1: mwfWorkouts,
      numberOfDays: 3,
      days1: [
        "Monday (4 Sets x 8-12 Repetitions Per Exercise):",
        "Wednesday (4 Sets x 8-12 Repetitions Per Exercise):",
        "Friday (4 Sets x 8-12 Repetitions Per Exercise):"
      ]
    });
  }

  fourDays() {
    let mttfWorkouts = this.state.exercises.filter(
      exercise =>
        exercise.category == "11" ||
        exercise.category == "12" ||
        exercise.category == "13" ||
        exercise.category == "8" ||
        exercise.category == "10" ||
        exercise.category == "9" ||
        exercise.category == "14"
    );
    this.setState({
      workouts2: mttfWorkouts,
      numberOfDays: 4,
      days2: [
        "Monday (4 Sets x 8-12 Repetitions Per Exercise):",
        "Tuesday (4 Sets x 8-12 Repetitions Per Exercise):",
        "Thursday (3 Sets x 12-15 Repetitions Per Exercise):",
        "Friday (3 Sets x 12-15 Repetitions Per Exercise):"
      ]
    });
  }

  render() {
    return (
      <div>
        <div>How many days per week would you like to work out?:</div>
        <button onClick={this.threeDays}>
          Three Days (Full Body Workouts)
        </button>
        <button onClick={this.fourDays}>
          Four Days (Upper/Lower Split Workouts)
        </button>

        <div>
          {this.state.numberOfDays === 3 ? (
            <MWFList mwf={this.state.workouts1} days={this.state.days1} />
          ) : (
            <MTTFList mttf={this.state.workouts2} days={this.state.days2} />
          )}
        </div>

        {/* <div>
          <FiveDays exercises={this.state.exercises} />
        </div> */}
      </div>
    );
  }
}
export default CreateWorkout;
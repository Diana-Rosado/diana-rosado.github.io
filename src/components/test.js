import React from "react";
import firebase from "./firestore";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      grade: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    const userRef = db.collection("user").add({
      grade: this.state.grade,
      email: this.state.email,
    });
    this.setState({
      grade: "",
      email: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          onChange={this.updateInput}
          value={this.state.grade}
        />
        {/* <label>
          <input type="radio" name="options" id="option1" onClick={onClick} />{" "}
          <span>9th grade</span>
        </label> */}

        <input
          type="email"
          name="email"
          placeholder="EMAIL"
          onChange={this.updateInput}
          value={this.state.email}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default User;

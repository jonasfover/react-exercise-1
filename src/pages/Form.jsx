import React, { Component } from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      lastName: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;

    console.log(data);
  };

  HandleInputChangeName = (event) => {
    event.preventDefault();

    this.setState({
      fullName: event.target.value,
    });
  };

  HandleInputChangeLast = (event) => {
    event.preventDefault();

    this.setState({
      lastName: event.target.value,
    });
  };

  render() {
    const { fullName, lastName } = this.state;

    return (
      <div className="App">
        <h2>Excercise 1: Form submit </h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.HandleInputChangeName}
            name={fullName}
          />
          <input
            type="text"
            onChange={this.HandleInputChangeLast}
            last={lastName}
          />
          <br />

          <button onClick={this.handleLogin} type="submit">
            Submit here
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;

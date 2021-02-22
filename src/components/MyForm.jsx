import React, { Component } from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  onChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onSubmit = (event) => {
    const { name } = this.state;
    event.preventDefault();
    console.log(name);
  };
  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h2>My-Form</h2>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChangpr} name={name} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MyForm;

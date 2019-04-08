import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">Name :</label>
          <input id="name" type="text" value={this.state.value} onChange={this.handleChange} />
          <h1 className="h1state">{this.state.value}</h1>
        </form>

      </>
    );
  }
}

export default NameForm;
import React, { Component } from 'react';
import { loginUser } from './login';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const data = { username, password };
    try {
      const response = await loginUser(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

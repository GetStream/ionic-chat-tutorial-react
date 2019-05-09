import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      name: "",
      email: ""
    };

    this.initStream = this.initStream.bind(this);
  }

  async initStream() {
    await this.setState({
      loading: true
    });

    const auth = await axios(process.env.REACT_APP_TOKEN_ENDPOINT, {
      name: this.state.name,
      email: this.state.email
    });

    localStorage.setItem("user", auth.data.user);
    localStorage.setItem("token", auth.data.token);

    await this.setState({
      loading: false
    });

    this.props.history.push("/");
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login-root">
        <div className="login-card">
          <h4>Ionic Chat</h4>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={e => this.handleChange(e)}
          />
          <br />
          <button onClick={this.initStream}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;

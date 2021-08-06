import React from 'react'
import { withRouter } from 'next/router'

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  }

  render() {
    const loginUser = () => {
      
    }

  return ( 
    <div>
      <div>
          <input
          type="email"
          value={this.state.email}
          onChange= {e => this.setState({ email: e.target.value })}
          placeholder='Email'
          autoCapitalize='none'
          />
          <input
          type="password"
          value={this.state.password}
          onChange= {e => this.setState({ password: e.target.value })}
          placeholder='Password'
          secureTextEntry={true}
          />
          <button onClick={loginUser}>Login</button>
          <p>Dont have an account yet? <a href="/register">Sign Up</a></p>
      </div>
      </div>
   );
  }
}

export default withRouter(Login);

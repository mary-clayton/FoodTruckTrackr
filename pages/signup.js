import firebase from "firebase";
import React from "react";

class Signup extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: ''
    }
    signUpUser = () => {
        
        }
    render() {
    return ( 
    <div>
         <input
          type="text"
          value={this.state.displayName}
          onChange= {e => this.setState({ displayName: e.target.value })}
          placeholder='Display Name'
          autoCapitalize='none'
          />
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
          <button onClick={this.signUpUser}>Register</button>
    </div> );
}
}
export default Signup;
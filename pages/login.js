import React from 'react'
import Firebase from 'Firebase'

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    const loginUser = () => {
      Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.props.setIsLoggedIn(true))
      .then(this.props.router.push('/dashboard'))
      .catch(error => console.log(error))
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
          <p>Don't have an account yet? <a href="">Sign Up</a></p>
      </div>
      </div>
   );
  }
}

export default Login;

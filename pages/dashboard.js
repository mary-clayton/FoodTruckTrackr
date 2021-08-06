import db from '../styles/Dashboard.module.css'
import firebase from 'firebase'
import React from 'react';

class Dashboard extends React.Component {
  state = {
    user: firebase.auth().currentUser
} 
render() {

return (
  <div>
    <h2>Welcome {this.state.user.displayName} </h2>
      
    
  </div>
)
}
} 
export default Dashboard;
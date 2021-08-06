import db from '../styles/Dashboard.module.css'
import firebase from 'firebase'
import React from 'react';
class Dashboard extends React.Component {

render() {

return (
  <div>
    <h2>Welcome {this.props.user.displayName} </h2>
      
    
  </div>
)
}
} 
export default Dashboard;
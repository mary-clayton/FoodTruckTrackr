import db from '../styles/Dashboard.module.css'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'


const Dashboard = (props) => {
  const {user, logout} = useContext(AuthContext)
  console.log(user)
return (
  <div>
  {user ? <h2>Welcome {user.user_metadata.full_name}</h2>: logout}
  </div>
)
}

export default Dashboard;
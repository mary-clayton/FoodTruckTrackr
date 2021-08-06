import db from '../styles/Dashboard.module.css'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'

const Dashboard = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
return (
  <div>
  <h2> Welcome {user.user_metadata.full_name}</h2>
  </div>
)
}

export default Dashboard;
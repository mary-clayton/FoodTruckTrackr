// import withAuth from "./_app";
import { useUser } from "./api/useUser";
import db from '../styles/Dashboard.module.css'

const Dashboard = () => {

return (
  <div>
    <div>Private</div>
        
        <button className={db.logout}>Logout</button>
      
    
  </div>
)
}
 
export default Dashboard;
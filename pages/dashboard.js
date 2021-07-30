import withAuth from "./api/withAuth";
import { useUser } from "./api/useUser";
import db from '../styles/Dashboard.module.css'

const Dashboard = () => {
const { user, logout } = useUser();

return (
  <div>
    <div>Private</div>
    {
      user?.email &&
      <div>
        <div>Email: {user.email}</div>
        <button class={db.logout} onClick={() => logout()}>Logout</button>
      </div> 
    }
  </div>
)
}
 
export default withAuth(Dashboard);
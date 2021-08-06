import '../styles/globals.css'
import Navbar from '../comps/navbar'
import { useRouter } from 'next/router'

function App({user, Component}) {
 
    return (
    <div>
      <Navbar  />
      <Component />
    </div>
    )
  }

export default App

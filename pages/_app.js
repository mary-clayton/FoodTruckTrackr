import '../styles/globals.css'
import Navbar from '../comps/navbar'
import { useRouter } from 'next/router'
import firebase from 'Firebase'
import initFirebase from './api/config'

function MyApp({ Component, props }) {
  initFirebase()
  const router = useRouter()
    return (
    <div>
      <Navbar  />
    <Component {...props} 
    router={router} 
    />
    </div>
    )
  }

export default MyApp

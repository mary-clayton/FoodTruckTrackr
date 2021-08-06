import '../styles/globals.css'
import Navbar from '../comps/navbar'
import { useRouter } from 'next/router'
import firebase from 'Firebase'
import initFirebase from './api/config'
import { useState } from 'react'

function MyApp({ Component, props }) {
  initFirebase()
  const router = useRouter()
  const user = firebase.auth().currentUser
  const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
    <div>
      <Navbar  />
    <Component {...props} 
    router={router} 
    user={user} 
    isLoggedIn={isLoggedIn}
    setIsLoggedIn={setIsLoggedIn}/>
    </div>
    )
  }

export default MyApp

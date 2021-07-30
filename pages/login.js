// import styles from '../styles/Home.module.css'
// import Navbar from '../comps/navbar'
// import React, { useState } from 'react'
// import { Auth } from "aws-amplify"

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//       }
    
//       async function handleSubmit(event) {
//         event.preventDefault();
      
//         try {
//           await Auth.signIn(email, password);
//           alert("Logged in");
//         } catch (e) {
//           alert(e.message);
//         }
//       }

//     return ( 
//         <div className={styles.login}>
//             <Navbar/>
//             <div className={styles.card}>
    
//                 <form className={styles.form1} onSubmit={handleSubmit}>
//                 <h1>Log In</h1>
//                     <label htmlFor="email">Email:</label>
//                     <input className={styles.inputaccess} type="email"
//                      onChange={e => setEmail(e.target.value)}></input>
//                     <br/>
//                     <label htmlFor="password">password</label>
//                     <input className={styles.inputaccess} type="password"
//                     onChange={e => setPassword(e.target.value)}></input>
//                     <br/>
//                     <input 
//                     type="submit" 
//                     value="Submit" 
//                     className={styles.button}
//                     disabled={!validateForm()}
//                     />
//                 </form>
//             </div>
//         </div>
//      );
// }

// export default Login;


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from './api/config';
import { setUserCookie } from './api/userCookie';
import { mapUserData } from './api/useUser';

initFirebase();
const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl,
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
    }
  }
});

const FirebaseAuth = () => {
  const signInSuccessUrl = "/dashboard"
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
        firebaseAuth={firebase.auth()}
        signInSuccessUrl={signInSuccessUrl}
      />
    </div>
  );
};

export default FirebaseAuth;
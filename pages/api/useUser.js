import { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import initFirebase from './config';

initFirebase();

firebase.auth().onAuthStateChanged(function(user)
    {if (user !== null) {
      // User is signed in.
      var uid = user.uid
      var displayName = user.displayName;
      var email = user.email;
      var photoURL = user.photoURL;
      User.getToken().then(function(accessToken) {

          console.debug('user', user);
          document.getElementById('sign-in-status').textContent = 'Signed in';
          document.getElementById('uid').textContent = JSON.stringify(uid)
          document.getElementById('name').textContent = JSON.stringify(displayName)
          document.getElementById('email').textContent = JSON.stringify(email)
          document.getElementById('account-details').textContent = JSON.stringify({
              uid: uid,
              displayName: displayName,
              email: email,
              photoURL: photoURL

          });
      });

    } else {
        console.log('not logged in');
    }   
    })
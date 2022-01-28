import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../src/firebase.js'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import axios from 'axios'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [userInfo, setUserInfo] = useState()
  // const [currentUserInfo, setCurrentUserInfo] = useState()

  // Sign Up
  const signUp = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User is automatically signed in when they signup
        const user = userCredential.user;
        console.log(`${JSON.stringify(user.email)} is signed up successfully on firebase!`)

        // console.log( `Their info is: ${JSON.stringify(user)}`)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error with user creation: ${errorCode} ${errorMessage}`)
        // ..
      });

  }

  // Sign In
  const signIn = async (email, password) => {

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      console.log(`${JSON.stringify(user.email)} is signed in on firebase!`)
      const response = await axios.get('/applicants/:1');
			setUserInfo(response.data);
			return response.data;
    } catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`Error with user sign-in: ${errorCode} ${errorMessage}`);
		}

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(`${JSON.stringify(user.email)} is signed in on firebase!`)
    //     // console.log( `Their info is: ${JSON.stringify(user)}`)
    //     // ...
    //   })
    //   .then(() => {
    //     // API Call
    //     return axios({
    //       method: 'get',
    //       url: '/applicants/:1'
    //       // email:currentUser.email,
    //       // password: currentUser.uid,
    //     })
    //   })
    //   .then(function (response) {
    //     setUserInfo(response.data)
    //     return(response.data)
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(`Error with user sign-in: ${errorCode} ${errorMessage}`)
    //   });

  }

  // Sign Out
  const userSignOut = () => {

    signOut(auth).then(() => {
      console.log(`According to firebase, you are signed out!`)
      // Still need to account for when token expires
    }).catch((error) => {
      console.log(`Error with user sign-out: ${error}`)
    });

  }

    // Current User
    useEffect(() => {
      userStatusChange()

      return () => {
        setCurrentUser()
        setLoading(true)
      }

    }, [])

    const userStatusChange = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })

  // Make value object available to any child div of AuthProvider
  const value = {
    currentUser,
    userInfo,
    // currentUserInfo,
    signUp,
    userSignOut,
    signIn
  }

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  )
}

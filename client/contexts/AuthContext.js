import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../src/firebase.js'
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [role, setRole] = useState('unknown')
  const [isSignedIn, setIsSignedIn] = useState(false)

  // Sign Up
  const signUp = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User is automatically signed in when they signup
        const user = userCredential.user;
        console.log(`${JSON.stringify(user.email)} is signed up successfully on firebase!`)
        setIsSignedIn(true)
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

  // Current User
  useEffect(() => {

    const userStatusChange = onAuthStateChanged(auth, user => {
      setRole('applicant')
      // const userInfo = {
      //   role: 'applicant',
      //   email: user.email,
      //   uid: user.uid,
      //   createdAt: user.stsTokenManager.createdAt,
      //   lastLoginAt: user.stsTokenManager.lastLoginAt,
      //   expirationTime: user.stsTokenManager.expirationTime,
      //   apiKey: user.stsTokenManager.apiKey,
      //   refreshToken: user.stsTokenManager.refreshToken,
      //   accessToken: user.stsTokenManager.accessToken
      // }

      // setCurrentUser(userInfo)
      setCurrentUser({
        ...user,
        role: "applicant"
      })
      setLoading(false)
    })

    return userStatusChange

  }, [])


  // Sign In
  const signIn = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(`${JSON.stringify(user.email)} is signed in on firebase!`)
        setIsSignedIn(true)
        // console.log( `Their info is: ${JSON.stringify(user)}`)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error with user sign-in: ${errorCode} ${errorMessage}`)
      });

  }

  // Sign Out
  const userSignOut = () => {

    signOut(auth).then(() => {
      console.log(`According to firebase, you are signed out!`)
      setCurrentUser()
      setRole("unknown")
      // setLoading(true)
      // Still need to account for when token expires
      setIsSignedIn(false)
    }).catch((error) => {
      console.log(`Error with user sign-out: ${error}`)
    });

  }

  // Make value object available to any child div of AuthProvider
  const value = {
    currentUser,
    role,
    isSignedIn,
    signUp,
    userSignOut,
    signIn
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

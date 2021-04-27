import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDCWlILwvwmmog03OGESEJMRbVE1YG1WSA',
  authDomain: 'crwn-db-d9ab6.firebaseapp.com',
  projectId: 'crwn-db-d9ab6',
  storageBucket: 'crwn-db-d9ab6.appspot.com',
  messagingSenderId: '1063179004399',
  appId: '1:1063179004399:web:c2556f1950793bc0deae1a'
}

export const createUserProfileDoc = async (userAuth, data) => {
  if (!userAuth) {
    return
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data
      })
    } catch (error) {
      console.log('Error creating user', error)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

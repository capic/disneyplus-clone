import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCjcwvbTRvhNlSRmOXUKjJPWLEu0F2kXKA',
  authDomain: 'disneyplus-clone-a2202.firebaseapp.com',
  projectId: 'disneyplus-clone-a2202',
  storageBucket: 'disneyplus-clone-a2202.appspot.com',
  messagingSenderId: '943557352000',
  appId: '1:943557352000:web:4107fd408da389bc155da5',
  measurementId: 'G-PZT9SH1N71',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
const storage = getStorage()

export { auth, provider, storage }
export default db

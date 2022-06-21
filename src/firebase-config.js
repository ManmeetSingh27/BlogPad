import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJmB_ww79gR8riSHpkBmJRUkq0Y3dbgMw",
    authDomain: "blog-it-1e2e4.firebaseapp.com",
    projectId: "blog-it-1e2e4",
    storageBucket: "blog-it-1e2e4.appspot.com",
    messagingSenderId: "148787925042",
    appId: "1:148787925042:web:897743a7ed4d6898dc2c2b"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {db, auth, provider}
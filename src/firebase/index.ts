import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBGNWMQvd46Fw3hO1PR2xQ9H895D6w9yhQ',
  authDomain: 'feedback-ts.firebaseapp.com',
  projectId: 'feedback-ts',
  storageBucket: 'feedback-ts.appspot.com',
  messagingSenderId: '667805074666',
  appId: '1:667805074666:web:17dabd0a3b2c3be1dcc393'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

// import { initializeApp } from 'firebase/app'
// import { getFirestore, collection } from 'firebase/firestore'
// // ... other firebase imports

// export const firebaseApp = initializeApp({
//   // your application settings
//   apiKey: 'AIzaSyBGNWMQvd46Fw3hO1PR2xQ9H895D6w9yhQ',
//   authDomain: 'feedback-ts.firebaseapp.com',
//   projectId: 'feedback-ts',
//   storageBucket: 'feedback-ts.appspot.com',
//   messagingSenderId: '667805074666',
//   appId: '1:667805074666:web:17dabd0a3b2c3be1dcc393'
// })

// // used for the firestore refs
// const db = getFirestore(firebaseApp)

// export { db }

// // here we can export reusable database references
// export const feedsCollectionRef = collection(db, 'feeds')
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuRi5d3-7GiGTeoNmXQSZREwPVbx5Doro",
    authDomain: "burgerbuilder-fbf28.firebaseapp.com",
    databaseURL: "https://burgerbuilder-fbf28-default-rtdb.firebaseio.com",
    projectId: "burgerbuilder-fbf28",
    storageBucket: "burgerbuilder-fbf28.appspot.com",
    messagingSenderId: "964823125832",
    appId: "1:964823125832:web:679bc3767bb2122eda6d7d",
    measurementId: "G-CTKHM18PK6"
  };

  export const createProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      }
      catch(error){
        console.log(error.message)
      }
      

    }
    return userRef;
  };
  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signWithGoogle = ()=>auth.signInWithPopup(provider)

  export default firebase


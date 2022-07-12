import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBcDme_b42pMDssLgH4_93G2ig44Z2yZ6I",
    authDomain: "clothing-web-7cb45.firebaseapp.com",
    projectId: "clothing-web-7cb45",
    storageBucket: "clothing-web-7cb45.appspot.com",
    messagingSenderId: "270996105384",
    appId: "1:270996105384:web:f2ecfd51766fdd66b3fa9d"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserProfileDocument = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date()
    try{
      await setDoc(userDocRef,{
        displayName,email,createdAt
      });
    }
    catch(error){
      console.log('error creating the user',error.message)
    }
  }
  return userDocRef
};
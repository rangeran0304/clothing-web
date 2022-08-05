import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc ,collection,writeBatch,query,getDocs} from 'firebase/firestore';
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
export const createUserProfileDocument = async (userAuth,additionalinfo={}) => {
  if(!userAuth){
    return
  }
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,email,createdAt,additionalinfo
      });
    }
    catch(error){
      console.log('error creating the user',error.message);
    }
  }
  return userDocRef
};
export const createAuthUserWithEmailandPassword = async(email,password)=>{
  if(!email || !password){
    return;
  }
  return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password){
    return;
  }
  return await signInWithEmailAndPassword(auth,email,password);
}
export const signOutAuthUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) =>{
  onAuthStateChanged(auth,callback)
}
export const addCollectionandDocuments = async (Key, Objects)=>{
  const batch=writeBatch(db);
  const collectionRef = collection(db, Key)
  Objects.forEach((object) => {
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
  }
  )
  await batch.commit();
  console.log('done');
}
export const getCategoriesAndDocuments = async()=>{
  const collectionRef = collection(db, 'collections');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.map((doc) => doc.data());
  return categoryMap;
}
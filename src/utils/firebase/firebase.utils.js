import { initializeApp } from "firebase/app";
import { 
     getAuth, 
     signInWithRedirect, 
     signInWithPopup,
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged,
     } from "firebase/auth";
import {
     getFirestore,
     doc,
     getDoc,
     setDoc,
     collection,
     writeBatch,
     getDocs,
     query
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyDPFFpVSr8Mm4ulXE0j7qz34ZS92h0hCx0",
     authDomain: "ecom-clothing-ab577.firebaseapp.com",
     projectId: "ecom-clothing-ab577",
     storageBucket: "ecom-clothing-ab577.appspot.com",
     messagingSenderId: "379948957535",
     appId: "1:379948957535:web:2d1d3860c32ef5756140ea"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
     prompt:"select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
     const collectionRef = collection(db, collectionKey)
     const batch = writeBatch(db);

     objectsToAdd.forEach((object) =>{
          const docRef = doc(collectionRef, object.title.toLowerCase())
          batch.set(docRef, object)
     });

     await batch.commit();
}

export const getCategoriesAndDocuments = async ()=>{
     const collectionRef = collection(db, 'categories')
     const q = query(collectionRef);
     const querySnapShot = await getDocs(q) 
     return querySnapShot.docs.map(docSnapshot=> docSnapshot.data() )

}

export const createUserDocumentFromAuth = async (UserAuth,additionInfo) =>{
     if (!UserAuth.uid) return;
     const userDocRef = doc(db, 'users', UserAuth.uid);
     const userSnapshot = await getDoc(userDocRef)
     if (!userSnapshot.exists()){
          const { displayName, email } = UserAuth
          const createdAt = new Date();
          try{
               await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdAt,
                    ...additionInfo
               });
          }catch(error){
               console.log(error)
          }
     }
     return userDocRef;

}


export const createAuthUserWithEmailAndPassword = async(email, password)=>{
     if(!email|| !password) return;
     return await createUserWithEmailAndPassword(auth, email, password)
}

export const SignInUserWithEmailAndPassword = async (email, password) => {
     if (!email || !password) return;
     return await signInWithEmailAndPassword(auth, email, password)
}

export const SignOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)
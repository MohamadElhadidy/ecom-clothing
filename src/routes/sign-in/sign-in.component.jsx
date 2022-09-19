import { useEffect } from 'react';
import { auth,signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
const SignIn = () =>{

     const logGoogleUser = async () =>{
          const {user} = await signInWithGooglePopup();
          const UserRef = await createUserDocumentFromAuth(user)
     }

     return(
          <>
               <h1> SignIn</h1>
               <button onClick={logGoogleUser}>
                    signInWithGooglePopup
               </button>
               <SignUpForm/>
          </>
          
     )

}

export default SignIn
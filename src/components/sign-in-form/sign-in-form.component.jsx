import { useState } from "react";
import { auth, SignInUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component"
import './sign-in-form.styles.scss'
const defaultForm ={
     email:'',
     password:'',
}

const SignInForm = () =>{
     const [FormFields, setFormFields] = useState(defaultForm)
     const { email, password } = FormFields
     const resetForm = ()=>{
          setFormFields(defaultForm)
     }
     const logGoogleUser = async () => {
          const { user } = await signInWithGooglePopup();
          await createUserDocumentFromAuth(user)
     }
     const handleSubmit = async (event) => {
          event.preventDefault();
     try{
          const response = await SignInUserWithEmailAndPassword(email, password)
          console.log(response)
          // resetForm()
     }catch(error){
          switch (error.code){
               case 'auth/user-not-found':
                    alert('cannot sign in , user  not found')
                    break;
               case 'auth/wrong-password':
                    alert('incorrect credential')
                    break;
               default:
                    console.log(error.message)
          }   
     }
}
     const handleChange = (event) =>{
     const {name, value} = event.target;
          setFormFields({...FormFields,[name]: value })
     }
     
     return (
          <div className="sign-up-container">
               <h2>Already have an account?</h2>
               <span>Sign In With Email</span>
               <form onSubmit={handleSubmit}>
                    <FormInput label='Email'
                         type="email"
                         name="email"
                         required
                         onChange={handleChange}
                         value={email}  

                    />
                    <FormInput label='Password'
                         type="password"
                         name="password"
                         required
                         onChange={handleChange}
                         value={password}  
                    />
                    <div className="buttons-container">
                         <Button buttonType='inverted' type='submit'> Sign In</Button>
                         <Button type='button' buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
                   </div>
               </form>
          </div>
     )
}

export default SignInForm
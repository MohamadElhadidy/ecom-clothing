import { useState} from "react";
import {SignInUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
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
          await signInWithGooglePopup();
     }
     const handleSubmit = async (event) => {
          event.preventDefault();
     try{
          await SignInUserWithEmailAndPassword(email, password)
          resetForm()
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
                         <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit'> Sign In</Button>
                         <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Google Sign In</Button>
                   </div>
               </form>
          </div>
     )
}

export default SignInForm
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component"

import './sign-up-form.styles.scss'
const defaultForm ={
     displayName: '',
     email:'',
     password:'',
     confirmPassword:'',
}

const SignUpForm = () =>{
     const [FormFields, setFormFields] = useState(defaultForm)
     const { displayName, email, password, confirmPassword } = FormFields
     const resetForm = ()=>{
          setFormFields(defaultForm)
     }
     const handleSubmit = async (event) => {
          event.preventDefault();
          if (password !== confirmPassword){
               alert("password Don't match")
               return;
          }
     try{
          const { user } = await createAuthUserWithEmailAndPassword(email, password)
          await createUserDocumentFromAuth(user, { displayName })
          resetForm()
     }catch(error){
          if (error.code === 'auth/email-already-in-use'){
               alert('cannot create user , email is already in use')
          }else{
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
               <h2>Don't have an account?</h2>
               <span>Sign Up With Email</span>
               <form onSubmit={handleSubmit}>
                    <FormInput label='Display Name'
                         type="text"
                         name="displayName"
                         required
                         onChange={handleChange} 
                         value={displayName}  
                    />
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
                    <FormInput label='Confirm Password'
                         type="password"
                         name="confirmPassword"
                         required
                         onChange={handleChange}
                         value={confirmPassword}  
                    />
                    <Button buttonType='inverted'type='submit'> Sign Up</Button>
               </form>
          </div>
     )
}

export default SignUpForm
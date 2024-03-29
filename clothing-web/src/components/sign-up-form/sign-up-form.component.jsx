import {useState} from 'react'
import { createAuthUserWithEmailandPassword,createUserProfileDocument } from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { SignUpContainer } from './sign-up-form.styles'
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';
const defaultFormfields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const SignUpForm = () =>{
    const {currentUser,setCurrentUser} = useContext(UserContext)
    const [formFields, setFormfields] = useState(defaultFormfields)
    const {displayName, email, password, confirmPassword} = formFields
    const resetFormFields = () => {
        setFormfields(defaultFormfields);
      };
    const handleSubmit = async(event)=>{
        event.preventDefault()
        if (password!=confirmPassword){
            alert('the passwpord do not match')
        }
        try{
            const {user} = await createAuthUserWithEmailandPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            resetFormFields()
        }
        catch(error){
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
              } else {
                console.log('user creation encountered an error', error);

        }
    }

    }
    const handleChange = (event)=>{
        const {name,value} = event.target
        setFormfields({...formFields,[name]:value})
    }
    return(
        <SignUpContainer>
          <h2>Don't have an account?</h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={handleSubmit}>
          <FormInput
            label='DisplayName'
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName}/>
          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}/>
          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}/>
          <FormInput
            label='Confirm Password'
            type='password'
            required
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}/>
            <Button type='submit'>Sign Up</Button>    
          </form>
        </SignUpContainer>
    )
}
export default SignUpForm
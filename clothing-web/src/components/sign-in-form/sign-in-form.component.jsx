import {useState} from 'react'
import { 
    signInAuthUserWithEmailAndPassword,
    createUserProfileDocument,
    signInWithGooglePopup } 
from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'
const defaultFormfields = {
  email: '',
  password: '',
}
const SignInForm = () =>{
    const [formFields, setFormfields] = useState(defaultFormfields)
    const {email, password,} = formFields
    const resetFormFields = () => {
        setFormfields(defaultFormfields);
      };
    const GoogleLogIn = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserProfileDocument(user);
    }   
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(
                email,password
            );
            console.log(response)
        }catch(error){
            switch (error.code) {
                case 'auth/wrong-password':
                  alert('incorrect password for email');
                  break;
                case 'auth/user-not-found':
                  alert('no user associated with this email');
                  break;
                default:
                  console.log(error);
              }

        }
        resetFormFields()
    }
    const handleChange = (event)=>{
        const {name,value} = event.target
        setFormfields({...formFields,[name]:value})
    }
    return(
        <div className='sign-in-container'>
          <h1>Sign up with your email and password</h1>
          <form onSubmit={handleSubmit}>
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
            <Button type='submit'>Sign Up</Button>
            <Button type='button' buttonType='google' onClick={GoogleLogIn}>Sign In With Google</Button>     
          </form>
        </div>
    )
}
export default SignInForm
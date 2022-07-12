import { signInWithGooglePopup,createUserProfileDocument } from "../../utils/firebase/firebase.utils";

const SignIn = ()=>{
    const LoggoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserProfileDocument(user);
}   
    return(
        <div>
           <h1>Sign In </h1>
           <button onClick={LoggoogleUser}>Sign In With Google</button>
        </div>
    )
}
export default SignIn

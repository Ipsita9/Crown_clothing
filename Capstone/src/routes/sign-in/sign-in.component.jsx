
import { signInWithGooglePopup,createUserDocumentFromAuth } from "../utils/firebase/firebase.util";
const SignIn=()=>
{
const logGoogleUser=async ()=>{
  const response= await signInWithGooglePopup();
  createUserDocumentFromAuth(response.user);
};


    return(
        <div>
            <h1>sign in</h1>
        <button  onClick={logGoogleUser}>SignInWithGoogle</button>
        </div>
    );
}
export default SignIn;
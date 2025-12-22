import{signInWithGooglePopup,createUserDocumentFromAuth} from "../utils/firebase/firebase-util";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>

      <button onClick={logGoogleUser}>Sign In With Google</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;

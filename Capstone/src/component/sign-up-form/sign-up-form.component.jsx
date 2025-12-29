import {  useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../routes/utils/firebase/firebase-util";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.style.scss';
import Button from "../button/button.component";

const defaultFromFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



const SignUpForm = () => {
  const [fromFields, setFromFields] = useState(defaultFromFields);
  const { displayName, email, password, confirmPassword } = fromFields;
  console.log(fromFields);
  // const {setCurrentUser}=useContext(UserContext);

  const resetFromFields =()=>{
    setFromFields(defaultFromFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFromFields();
      
    } catch (error) {
      if(error.code==='auth/email-already-in-use'){
        alert('cant create ,user already exist');
      }else{
        console.log("user created encounted an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...fromFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h3>Don't have an account</h3>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        
        <FormInput
          label="display name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
        
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;

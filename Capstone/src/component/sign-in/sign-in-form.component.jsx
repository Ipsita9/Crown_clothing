import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../routes/utils/firebase/firebase-util";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setErrorMessage("");
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error);

      if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password for email");
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage("No user associated with this email");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    setErrorMessage("");
  };

  return (
    <div className="sign-up-container">
      <h3>Already have an account</h3>
      <span>Sign In with email and password</span>

      <form onSubmit={handleSubmit}>
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

        {errorMessage && (
          <p className="error-message" >{errorMessage}</p>
        )}

        <div className="buttons-styling">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

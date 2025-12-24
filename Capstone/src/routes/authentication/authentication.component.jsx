
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in/sign-in-form.component";
import "./authentication.style.scss";

const Authentication = () => {
      
  return (
    <div className="authentication">
     

      <SignInForm/>

      <SignUpForm />
    </div>
  );
};

export default Authentication;

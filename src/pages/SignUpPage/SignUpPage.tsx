import InfoComponent from "../../components/InfoComponent/InfoComponent";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignUpPageStyled from "./SignUpPageStyled";

const SignUpPage = (): JSX.Element => {
  return (
    <SignUpPageStyled>
      <InfoComponent />
      <div className="signup-form">
        <SignUpForm />
      </div>
    </SignUpPageStyled>
  );
};

export default SignUpPage;

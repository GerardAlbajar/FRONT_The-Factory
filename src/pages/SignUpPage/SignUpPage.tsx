import { NavLink } from "react-router-dom";
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignUpPageStyled from "./SignUpPageStyled";

const SignUpPage = (): JSX.Element => {
  return (
    <SignUpPageStyled>
      <header>
        <NavLink to="/home">
          <img src="images/logo.png" alt="Astro Factory Logo" />
        </NavLink>
      </header>
      <div className="wrapper">
        <InfoComponent />
        <div className="signup-form">
          <SignUpForm />
        </div>
      </div>
    </SignUpPageStyled>
  );
};

export default SignUpPage;

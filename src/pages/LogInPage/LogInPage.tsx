import { NavLink } from "react-router-dom";
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import LogInForm from "../../components/LogInForm/LogInForm";
import LogInPageStyled from "./LogInPageStyled";

const LogInPage = (): JSX.Element => {
  return (
    <LogInPageStyled>
      <header>
        <NavLink to="/home">
          <img src="images/logo.png" alt="Astro Factory Logo" />
        </NavLink>
      </header>
      <div className="wrapper">
        <InfoComponent />
        <div className="login-form">
          <LogInForm />
        </div>
      </div>
    </LogInPageStyled>
  );
};

export default LogInPage;

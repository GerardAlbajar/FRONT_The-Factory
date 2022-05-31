import InfoComponent from "../../components/InfoComponent/InfoComponent";
import LogInForm from "../../components/LogInForm/LogInForm";
import LogInPageStyled from "./LogInPageStyled";

const LogInPage = (): JSX.Element => {
  return (
    <LogInPageStyled>
      <InfoComponent />
      <div className="login-form">
        <LogInForm />
      </div>
    </LogInPageStyled>
  );
};

export default LogInPage;

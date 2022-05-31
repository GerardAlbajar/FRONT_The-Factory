import { NavLink } from "react-router-dom";
import LogInForm from "../../components/LogInForm/LogInForm";
import LogInPageStyled from "./LogInPageStyled";

const LogInPage = (): JSX.Element => {
  return (
    <LogInPageStyled>
      <div className="info">
        <header>
          <NavLink to="/home">
            <img src="images/logo.png" alt="Astro Factory Logo" />
          </NavLink>
        </header>
        <h2> CHECK-IN </h2>
        <p>
          The entirety of humankind's existence has led to this moment. We have
          set foot on the Martian surface. Astro Factory - Mars Rock NFT Mining
          Mission is live. RESTRICTED ACCESS - Mothership Ticket NFT required.
          Mission ends Jun 17th, 2022.
        </p>
        <p>We boldly go where no Mining Mission has gone before. Join us.</p>
        <p>Select Mining Experience:</p>
        <div>
          <NavLink to="/login">
            <button>Log-In</button>
          </NavLink>
          <NavLink to="/register">
            <button>Sign-Up</button>
          </NavLink>
        </div>
      </div>
      <div className="login-form">
        <LogInForm />
      </div>
    </LogInPageStyled>
  );
};

export default LogInPage;
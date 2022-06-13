import { NavLink } from "react-router-dom";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <header>
        <NavLink to="/home">
          <img src="images/logo.png" alt="Astro Factory Logo" />
        </NavLink>
      </header>
      <p>Page Not Found</p>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;

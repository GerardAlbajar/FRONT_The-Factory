import { NavLink } from "react-router-dom";
import InfoComponent from "../../components/InfoComponent/InfoComponent";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <header>
        <NavLink to="/home">
          <img src="images/logo.png" alt="Astro Factory Logo" />
        </NavLink>
      </header>
      <InfoComponent />
    </HomePageStyled>
  );
};

export default HomePage;

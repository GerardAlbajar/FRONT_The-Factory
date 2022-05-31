import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <nav className="top-nav">
        <div className="top-nav_img">
          <NavLink to="/home">
            <img src="images/logo.png" alt="WeekArtLogo" />
          </NavLink>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <NavLink to="/home">The Factory</NavLink>
          </li>
          <li>
            <NavLink to="/home">Astros</NavLink>
          </li>
          <li>
            <NavLink to="/home">Road Map</NavLink>
          </li>
          <li>
            <NavLink to="/home">Your Collection</NavLink>
          </li>
          <li>
            <NavLink to="/home">Log Out</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;

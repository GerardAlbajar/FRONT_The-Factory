import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOutActionCreator } from "../../redux/features/userSlice";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const dispatch = useDispatch();

  const logOutUser = () => {
    localStorage.removeItem("TokenKey");

    dispatch(logOutActionCreator());
  };

  return (
    <HeaderStyled>
      <nav className="top-nav">
        <div className="top-nav_img">
          <NavLink to="/thefactory">
            <img src="images/logo.png" alt="WeekArtLogo" />
          </NavLink>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <NavLink to="/thefactory">The Factory</NavLink>
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
            <NavLink to="/home" onClick={logOutUser}>
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;

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

  const path = window.location.pathname;

  return (
    <HeaderStyled>
      <nav className="top-nav">
        <div className="top-nav_img">
          <NavLink to="/thefactory">
            <img src="images/logo.png" alt="Astro Factory Logo" />
          </NavLink>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <NavLink
              to="/thefactory"
              className={path.includes("/thefactory") ? "selected" : undefined}
            >
              The Factory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/astros"
              className={path.includes("/astros") ? "selected" : undefined}
            >
              Astros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className={path.includes("/explore") ? "selected" : undefined}
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myinventory"
              className={path.includes("/myinventory") ? "selected" : undefined}
            >
              Your Collection
            </NavLink>
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

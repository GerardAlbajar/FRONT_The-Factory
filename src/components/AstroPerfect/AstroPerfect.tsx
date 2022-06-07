import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { removeInventoryPartThunk } from "../../redux/thunks/astroThunks/astroThunks";
import { AstroPerfectProps } from "../../types/types";
import AstroPerfectStyled from "./AstroPerfectStyled";

const AstroPerfect = ({
  parts,
  name,
  idRender,
  id,
  showIcon,
}: AstroPerfectProps): JSX.Element => {
  const userId = useSelector((state: RootState) => state.user.id);

  const dispatch: AppDispatch = useDispatch();

  const removePerfectItem = () => {
    dispatch(removeInventoryPartThunk(userId, "perfect", id));
  };

  return (
    <AstroPerfectStyled>
      <ul>
        <li className="astro">
          <NavLink to={`/details/astros/${id}`}>
            {parts.rocket ? <img src={parts.rocket.image} alt={name} /> : null}
            {parts.astro ? <img src={parts.astro.image} alt={name} /> : null}
            {parts.naut ? <img src={parts.naut.image} alt={name} /> : null}
          </NavLink>
        </li>
        <li>
          <p>{name}</p>
        </li>
        <li>Id: {idRender}</li>
      </ul>
      {showIcon ? (
        <img
          className="delete"
          src="images/delete.svg"
          alt="Delete Button"
          onClick={removePerfectItem}
        />
      ) : null}
    </AstroPerfectStyled>
  );
};

export default AstroPerfect;

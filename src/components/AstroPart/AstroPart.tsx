import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import { removeInventoryPartThunk } from "../../redux/thunks/astroThunks/astroThunks";
import { AstroPartProps } from "../../types/types";
import AstroPartStyled from "./AstroPartStyled";

const AstroPart = ({
  name,
  image,
  idRender,
  id,
  showIcon,
  onSelectItem,
}: AstroPartProps): JSX.Element => {
  const userId = useSelector((state: RootState) => state.user.id);

  const dispatch: AppDispatch = useDispatch();

  const removePartItem = () => {
    dispatch(removeInventoryPartThunk(userId, "part", id));
  };

  return (
    <AstroPartStyled onClick={onSelectItem}>
      <ul>
        <li>
          {onSelectItem ? (
            <img src={image} alt={name} />
          ) : (
            <NavLink to={`/details/astroparts/${id}`}>
              <img src={image} alt={name} />
            </NavLink>
          )}
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
          onClick={removePartItem}
        />
      ) : null}
    </AstroPartStyled>
  );
};

export default AstroPart;

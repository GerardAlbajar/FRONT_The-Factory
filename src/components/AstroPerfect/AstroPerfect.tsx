import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
          <img src={parts.rocket.image} alt={name} />
          <img src={parts.astro.image} alt={name} />
          <img src={parts.naut.image} alt={name} />
        </li>
        <li>
          <p>{name}</p>
        </li>
        <li>Id: {idRender}</li>
      </ul>
      {showIcon ? <p onClick={removePerfectItem}> X </p> : null}
    </AstroPerfectStyled>
  );
};

export default AstroPerfect;

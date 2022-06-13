import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { addInventoryPartThunk } from "../../redux/thunks/astroThunks/astroThunks";
import { Astro } from "../../types/types";

const RenderAstroDetails = ({
  parts,
  name,
  type,
  flighthistory = false,
  stickers = 1,
  framework,
  idRender,
  id,
}: Astro) => {
  const userId = useSelector((state: RootState) => state.user.id);
  const dispatch: AppDispatch = useDispatch();

  const addAstroItem = (id: string) => {
    dispatch(addInventoryPartThunk(userId, "perfect", id));
  };

  return (
    <div className="container">
      <div className="info">
        <h2 className="main">{name}</h2>
        <p>{name}</p>
        <p>{idRender}</p>
        <h2> ATTRIBUTES </h2>
        <ul>
          <li>
            <h3> Astro Type</h3>
            <p>{type}</p>
          </li>
          <li>
            <h3> Astro Framework</h3>
            <p>{framework}</p>
          </li>
          <li>
            <h3> Flight History </h3>
            <p>{flighthistory}</p>
          </li>
          <li>
            <h3> Sticker(s) </h3>
            <p>{stickers}</p>
          </li>
        </ul>
        <button onClick={() => addAstroItem(id)}>Add Item</button>
      </div>
      <div className="astro">
        {parts.rocket ? <img src={parts.rocket.image} alt={name} /> : null}
        {parts.astro ? <img src={parts.astro.image} alt={name} /> : null}
        {parts.naut ? <img src={parts.naut.image} alt={name} /> : null}
      </div>
    </div>
  );
};

export default RenderAstroDetails;

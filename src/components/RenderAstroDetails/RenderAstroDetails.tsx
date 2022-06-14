import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/editSlice";
import { AppDispatch, RootState } from "../../redux/store/store";
import {
  addInventoryPartThunk,
  loadUserCollectionThunk,
} from "../../redux/thunks/astroThunks/astroThunks";
import { Astro, AstroType } from "../../types/types";

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

  useEffect(() => {
    if (userId) {
      dispatch(loadUserCollectionThunk(userId));
    }
  }, [dispatch, userId]);

  const userInventory = useSelector((state: RootState) => state.astro);

  const getInventoryId = userInventory.map((astro: AstroType) => astro.id);

  const userInventoryChecker = getInventoryId.includes(id);

  const navigate = useNavigate();

  const addAstroItem = (id: string) => {
    dispatch(addInventoryPartThunk(userId, "perfect", id));

    navigate(-1);
  };

  const navigateToEditPage = () => {
    dispatch(blankStateActionCreator());
    navigate(`/editmutant/${id}`);
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
        {userInventoryChecker ? (
          <button onClick={navigateToEditPage}>Edit Item</button>
        ) : (
          <button onClick={() => addAstroItem(id)}>Add Item</button>
        )}
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

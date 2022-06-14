import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store/store";
import {
  addInventoryPartThunk,
  loadUserCollectionThunk,
} from "../../redux/thunks/astroThunks/astroThunks";
import { AstroPart, AstroType } from "../../types/types";

const RenderPartDetails = ({
  image,
  name,
  type,
  framework,
  idRender,
  id,
}: AstroPart) => {
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

  const addPartItem = (id: string) => {
    dispatch(addInventoryPartThunk(userId, "part", id));

    navigate(-1);
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
        </ul>
        {userInventoryChecker ? (
          <button
            disabled
            style={{
              opacity: 0.5,
              pointerEvents: "none",
            }}
          >
            Already Owned
          </button>
        ) : (
          <button onClick={() => addPartItem(id)}>Add Item</button>
        )}
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default RenderPartDetails;

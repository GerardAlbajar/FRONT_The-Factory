import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { addInventoryPartThunk } from "../../redux/thunks/astroThunks/astroThunks";
import { AstroPart } from "../../types/types";

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

  const addPartItem = (id: string) => {
    dispatch(addInventoryPartThunk(userId, "part", id));
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
        <button onClick={() => addPartItem(id)}>Add Item</button>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default RenderPartDetails;

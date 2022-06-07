import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/HeaderComponent/Header";
import { AppDispatch, RootState } from "../../redux/store/store";
import {
  addInventoryPartThunk,
  loadAstroDetail,
} from "../../redux/thunks/astroThunks/astroThunks";
import { Astro, AstroPart, AstroType } from "../../types/types";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = () => {
  const { id, astroType } = useParams();

  const dispatch: AppDispatch = useDispatch();
  const [details, setDetails] = useState<AstroType>();

  useEffect(() => {
    if (id && astroType) {
      const getData = async () => {
        const astroDetails: AstroType = await loadAstroDetail(
          astroType as "astroparts" | "astros",
          id
        );
        setDetails(astroDetails);
      };

      getData();
    }
  }, [astroType, dispatch, id]);

  const userId = useSelector((state: RootState) => state.user.id);

  const addPartItem = (id: string) => {
    dispatch(addInventoryPartThunk(userId, "part", id));
  };

  const addAstroItem = (id: string) => {
    dispatch(addInventoryPartThunk(userId, "perfect", id));
  };

  const renderAstroDetails = ({
    parts,
    name,
    type,
    flighthistory,
    stickers,
    framework,
    idRender,
    id,
  }: Astro) => {
    return (
      <div className="hola">
        <div>
          <h2>{name}</h2>
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
              <p>{(flighthistory = 0)}</p>
            </li>
            <li>
              <h3> Sticker(s) </h3>
              <p>{(stickers = 1)}</p>
            </li>
          </ul>
          <button onClick={() => addAstroItem(id)}>Add Item</button>
        </div>
        <div className="astro">
          <img src={parts.rocket.image} alt={name} />
          <img src={parts.astro.image} alt={name} />
          <img src={parts.naut.image} alt={name} />
        </div>
      </div>
    );
  };

  const renderPartDetails = ({
    image,
    name,
    type,
    framework,
    idRender,
    id,
  }: AstroPart) => {
    return (
      <div className="hola">
        <div>
          <h2>{name}</h2>
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

  return (
    <DetailPageStyled>
      <Header />
      {details ? (
        <div>
          {details.type === "Perfect Astro"
            ? renderAstroDetails(details as Astro)
            : renderPartDetails(details as AstroPart)}
        </div>
      ) : (
        <p> Waiting for details </p>
      )}
    </DetailPageStyled>
  );
};

export default DetailPage;

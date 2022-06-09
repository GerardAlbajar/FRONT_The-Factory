import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import RenderAstroDetails from "../../components/RenderAstroDetails/RenderAstroDetails";
import RenderPartDetails from "../../components/RenderPartDetails/RenderPartDetails";
import { blankStateActionCreator } from "../../redux/features/editSlice";
import { AppDispatch } from "../../redux/store/store";
import { loadAstroDetail } from "../../redux/thunks/astroThunks/astroThunks";
import { AstroType, Astro, AstroPart } from "../../types/types";
import DetailsPageStyled from "./DetailsPageStyled";

const DetailsPage = () => {
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

  const navigate = useNavigate();

  const navigateToEditPage = () => {
    dispatch(blankStateActionCreator());
    navigate(`/editmutant/${id}`);
  };

  return (
    <DetailsPageStyled>
      {details ? (
        <div>
          <button className="goback" onClick={navigateToEditPage}>
            Edit Mutant Astro
          </button>
          {details.type === "Perfect Astro" ? (
            <RenderAstroDetails {...(details as Astro)} />
          ) : (
            <RenderPartDetails {...(details as AstroPart)} />
          )}
        </div>
      ) : (
        <p> Waiting for details </p>
      )}
    </DetailsPageStyled>
  );
};

export default DetailsPage;

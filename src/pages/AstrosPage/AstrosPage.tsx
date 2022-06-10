import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AstrosList from "../../components/AstrosList/AstrosList";
import { AppDispatch, RootState } from "../../redux/store/store";
import { loadAstrosThunk } from "../../redux/thunks/astroThunks/astroThunks";
import AstrosPageStyled from "./AstrosPageStyled";

const AstrosPage = () => {
  const astros = useSelector((state: RootState) => state.astro);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAstrosThunk());
  }, [dispatch]);

  return (
    <AstrosPageStyled>
      <h2>ASTROS AND COMPONENTS</h2>
      <div className="buttons">
        <button> COMPONENTS </button>
        <button> ASTROS </button>
      </div>
      <div className="buttons">
        <button> REACT </button>
        <button> VUE </button>
        <button> ANGULAR </button>
        <button> JQUERY </button>
      </div>
      <AstrosList astros={astros} />
    </AstrosPageStyled>
  );
};

export default AstrosPage;

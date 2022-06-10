import { useEffect, useState } from "react";
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

  const [filterFactory, setfilterFactory] = useState(astros);

  const filterByType = (string: string) => {
    const AstrosFiltered = astros.filter((astro) => astro.type === string);

    setfilterFactory(AstrosFiltered);

    return filterFactory;
  };

  const filterByFramework = (string: string) => {
    const PerfectAstros = astros.filter((astro) => astro.framework === string);

    setfilterFactory(PerfectAstros);

    return filterFactory;
  };

  const showAll = () => {
    setfilterFactory(astros);

    return filterFactory;
  };

  return (
    <AstrosPageStyled>
      <h2>ASTROS AND COMPONENTS</h2>
      <div className="buttons">
        <button onClick={showAll}>ALL</button>
        <button onClick={() => filterByType("Perfect Astro")}> ASTROS </button>
        <button onClick={() => filterByFramework("Mutant Astro")}>
          MUTANT ASTROS
        </button>
      </div>
      <div className="buttons">
        <button onClick={() => filterByFramework("React")}>REACT</button>
        <button onClick={() => filterByFramework("Vue")}> VUE </button>
        <button onClick={() => filterByFramework("Angular")}>ANGULAR</button>
        <button onClick={() => filterByFramework("JQuery")}>JQUERY</button>
      </div>
      <AstrosList astros={filterFactory} />
    </AstrosPageStyled>
  );
};

export default AstrosPage;

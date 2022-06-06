import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AstrosList from "../../components/AstrosList/AstrosList";
import Header from "../../components/HeaderComponent/Header";
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
      <Header />
      <h2>ASTROS AND COMPONENTS</h2>
      <AstrosList astros={astros} />
    </AstrosPageStyled>
  );
};

export default AstrosPage;

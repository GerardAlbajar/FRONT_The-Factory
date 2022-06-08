import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AstrosList from "../../components/AstrosList/AstrosList";
import Header from "../../components/HeaderComponent/Header";
import { AppDispatch, RootState } from "../../redux/store/store";
import { loadUserCollectionThunk } from "../../redux/thunks/astroThunks/astroThunks";
import MyCollectionPageStyled from "./MyCollectionPageStyled";

const MyCollectionPage = () => {
  const id = useSelector((state: RootState) => state.user.id);
  const astros = useSelector((state: RootState) => state.astro);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(loadUserCollectionThunk(id));
    }
  }, [dispatch, id]);

  return (
    <MyCollectionPageStyled>
      <Header />
      <h2>YOUR COLLECTION</h2>
      <div>
        <NavLink className="link" to="/assemble">
          <button> ASSEMBLE A MUTANT ASTRO </button>
        </NavLink>
      </div>
      <AstrosList astros={astros} isRemovable />
    </MyCollectionPageStyled>
  );
};

export default MyCollectionPage;

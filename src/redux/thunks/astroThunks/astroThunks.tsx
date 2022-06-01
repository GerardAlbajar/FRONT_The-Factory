import apiInterceptor from "../../../utils/api";
import { loadAstrosActionCreator } from "../../features/astroSlice";
import { AppDispatch } from "../../store/store";

export const loadAstrosThunk = () => async (dispatch: AppDispatch) => {
  const { data: astroPartData } = await apiInterceptor.get("/astroparts");

  const { data: astroData } = await apiInterceptor.get("/astros");

  const astrosData = [...astroPartData, ...astroData];

  dispatch(loadAstrosActionCreator(astrosData));
};

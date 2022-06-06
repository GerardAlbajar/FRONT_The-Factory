import toast from "react-hot-toast";
import apiInterceptor from "../../../utils/apiInterceptor";
import {
  loadAstrosActionCreator,
  loadUserCollectionActionCreator,
  removeInventoryItemActionCreator,
} from "../../features/astroSlice";
import { AppDispatch } from "../../store/store";

export const loadAstrosThunk = () => async (dispatch: AppDispatch) => {
  try {
    const { data: astroPartData } = await apiInterceptor.get("/astroparts");

    toast.loading("Loading");

    const { data: astroData } = await apiInterceptor.get("/astros");

    const astrosData = [...astroPartData, ...astroData];

    dispatch(loadAstrosActionCreator(astrosData));

    toast.dismiss();
    toast.success("Astros loaded successfully");
  } catch {
    toast.dismiss();
    toast.error("Something went wrong");
  }
};

export const loadUserCollectionThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const { data: userInventoryData } = await apiInterceptor.get(
        `/inventory/${id}`
      );

      toast.loading("Loading");

      const inventoryData = [
        ...userInventoryData.part,
        ...userInventoryData.perfect,
      ];

      dispatch(loadUserCollectionActionCreator(inventoryData));

      toast.dismiss();
      toast.success("Your collection has been loaded successfully");
    } catch {
      toast.dismiss();
      toast.error("Something went wrong");
    }
  };

export const removeInventoryPartThunk =
  (id: string, inventoryKey: "perfect" | "part", idItem: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const { data: userInventoryData } = await apiInterceptor.delete(
        `/inventory/${id}/${inventoryKey}/${idItem}`
      );

      toast.loading("Loading");

      const updatedAstros = [
        ...userInventoryData.part,
        ...userInventoryData.perfect,
      ];

      dispatch(removeInventoryItemActionCreator(updatedAstros));

      toast.dismiss();
      toast.success(`Your item ${idItem} has been removed`);
    } catch {
      toast.dismiss();
      toast.error("Something went wrong");
    }
  };

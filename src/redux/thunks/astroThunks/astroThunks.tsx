import toast from "react-hot-toast";
import apiInterceptor from "../../../utils/apiInterceptor";
import {
  addInventoryItemActionCreator,
  loadAstrosActionCreator,
  loadUserCollectionActionCreator,
  removeInventoryItemActionCreator,
} from "../../features/astroSlice";
import { AppDispatch } from "../../store/store";

export const loadAstrosThunk = () => async (dispatch: AppDispatch) => {
  try {
    const { data: astroPartData } = await apiInterceptor.get("/astroparts");

    const { data: astroData } = await apiInterceptor.get("/astros");

    const astrosData = [...astroPartData, ...astroData];

    dispatch(loadAstrosActionCreator(astrosData));

    toast.success("Astros loaded successfully");
  } catch {
    toast.error("Something went wrong");
  }
};

export const loadAstroDetail = async (
  astroType: "astroparts" | "astros",
  id: string
) => {
  try {
    const { data: astroDetailData } = await apiInterceptor.get(
      `/${astroType}/${id}`
    );

    debugger;

    return astroDetailData;
  } catch {
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

export const addInventoryPartThunk =
  (id: string, inventoryKey: "perfect" | "part", idItem: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const { data: userInventoryData } = await apiInterceptor.post(
        `/inventory/${id}/${inventoryKey}/${idItem}`
      );

      toast.loading("Loading");

      const updatedAstros = [
        ...userInventoryData.part,
        ...userInventoryData.perfect,
      ];

      dispatch(addInventoryItemActionCreator(updatedAstros));

      toast.dismiss();
      toast.success(`Your item ${idItem} has been added at your collection`);
    } catch {
      toast.dismiss();
      toast.error("Something went wrong");
    }
  };

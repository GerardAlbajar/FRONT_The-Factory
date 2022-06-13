import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";
import { Astro } from "../../../types/types";
import apiInterceptor from "../../../utils/apiInterceptor";
import {
  addInventoryItemActionCreator,
  createMutantAstroActionCreator,
  editMutantAstroActionCreator,
  loadAstrosActionCreator,
  loadUserCollectionActionCreator,
  removeInventoryItemActionCreator,
} from "../../features/astroSlice";
import {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "../../features/uiSlice";
import { AppDispatch } from "../../store/store";

export const loadAstrosThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadedOnActionCreator());
    const { data: astroPartData } = await apiInterceptor.get("/astroparts");

    const { data: astroData } = await apiInterceptor.get("/astros");

    const astrosData = [...astroPartData, ...astroData];

    dispatch(loadAstrosActionCreator(astrosData));
    dispatch(loadedOffActionCreator());
  } catch {
    toast.error("Something went wrong");
    dispatch(loadedOffActionCreator());
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

    return astroDetailData;
  } catch {
    toast.error("Something went wrong");
  }
};

export const loadUserCollectionThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadedOnActionCreator());

      const { data: userInventoryData } = await apiInterceptor.get(
        `/inventory/${id}`
      );

      const inventoryData = [
        ...userInventoryData.part,
        ...userInventoryData.perfect,
      ];

      dispatch(loadUserCollectionActionCreator(inventoryData));
      dispatch(loadedOffActionCreator());
    } catch {
      toast.error("Something went wrong");
      dispatch(loadedOffActionCreator());
    }
  };

export const removeInventoryPartThunk =
  (id: string, inventoryKey: "perfect" | "part", idItem: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loadedOnActionCreator());

      const { data: userInventoryData } = await apiInterceptor.delete(
        `/inventory/${id}/${inventoryKey}/${idItem}`
      );

      const updatedAstros = [
        ...userInventoryData.part,
        ...userInventoryData.perfect,
      ];

      dispatch(removeInventoryItemActionCreator(updatedAstros));

      dispatch(loadedOffActionCreator());

      toast.success(`Your item ${idItem} has been removed`);
    } catch {
      toast.error("Something went wrong");

      dispatch(loadedOffActionCreator());
    }
  };

export const addInventoryPartThunk =
  (id: string, inventoryKey: "perfect" | "part", idItem: string) =>
  async (dispatch: AppDispatch) => {
    try {
      const { data: userInventoryData } = await apiInterceptor.post(
        `/inventory/${id}/${inventoryKey}/${idItem}`
      );

      const updatedAstros = [
        ...userInventoryData.part,
        ...userInventoryData.perfect,
      ];

      dispatch(addInventoryItemActionCreator(updatedAstros));

      toast.success(`Your item has been added at your collection`);
    } catch {
      toast.error("Something went wrong");
    }
  };

export const createMutantAstroThunk =
  (id: string, mutantAstro: Astro, navigate: NavigateFunction) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loadedOnActionCreator());

      const { data: userInventoryData } = await apiInterceptor.post(
        `/inventory/${id}`,
        mutantAstro
      );

      const updatedAstros = [
        ...userInventoryData.part,
        ...userInventoryData.perfect,
      ];

      dispatch(createMutantAstroActionCreator(updatedAstros));

      dispatch(loadedOffActionCreator());

      toast.success(
        `Your Mutan Astro ${mutantAstro.name} has been created successfully`
      );

      navigate("/myinventory");
    } catch {
      toast.error("Something went wrong");

      dispatch(loadedOffActionCreator());
    }
  };

export const editMutantAstroThunk =
  (
    id: string,
    idMutantAstro: string,
    mutantAstroUpdated: Astro,
    navigate: NavigateFunction
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loadedOnActionCreator());

      const { data: userInventoryData } = await apiInterceptor.put(
        `/inventory/${id}/${idMutantAstro}`,
        mutantAstroUpdated
      );

      const updatedAstros = [
        ...userInventoryData.part,
        ...userInventoryData.perfect,
      ];

      dispatch(editMutantAstroActionCreator(updatedAstros));

      dispatch(loadedOffActionCreator());

      toast.success(
        `Your Mutan Astro ${mutantAstroUpdated.name} has been edited successfully`
      );

      navigate("/myinventory");
    } catch {
      toast.error("Something went wrong");

      dispatch(loadedOffActionCreator());
    }
  };

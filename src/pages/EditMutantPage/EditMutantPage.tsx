import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AstroPerfect from "../../components/AstroPerfect/AstroPerfect";
import AstrosList from "../../components/AstrosList/AstrosList";
import { blankStateActionCreator } from "../../redux/features/editSlice";
import { AppDispatch, RootState } from "../../redux/store/store";
import {
  editMutantAstroThunk,
  loadUserCollectionThunk,
} from "../../redux/thunks/astroThunks/astroThunks";
import { loadEditAstroThunk } from "../../redux/thunks/editThunks/editThunks";
import { Astro, AstroPart, MutantAstro, MyItems } from "../../types/types";
import EditMutantPageStyled from "./EditMutantPageStyled";

const EditMutantPage = () => {
  const { idMutantAstro } = useParams();
  const navigate = useNavigate();
  const id = useSelector((state: RootState) => state.user.id);

  const dispatch: AppDispatch = useDispatch();

  const mutantAstro: any = useSelector((state: RootState) => state.edit.astro);

  const initialUserItems: MyItems = {
    astros: [],
    nauts: [],
    rockets: [],
  };

  const [myItems, setMyItems] = useState<MyItems>(initialUserItems);

  const [mutantAstroRender, setMutantAstroRender] = useState<MutantAstro>({});

  const [formData, setFormData] = useState({ mutantName: "" });

  useEffect(() => {
    if (idMutantAstro) {
      dispatch(loadEditAstroThunk(idMutantAstro));
      dispatch(loadUserCollectionThunk(id));
    }
  }, [dispatch, id, idMutantAstro]);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const disabledIf = formData.mutantName === "";

  const astros = useSelector((state: RootState) => state.astro);

  useEffect(() => {
    setMyItems({
      astros: (astros as AstroPart[]).filter((astro) => astro.type === "Astro"),
      nauts: (astros as AstroPart[]).filter((astro) => astro.type === "Naut"),
      rockets: (astros as AstroPart[]).filter(
        (astro) => astro.type === "Rocket"
      ),
    });
  }, [astros]);

  useEffect(() => {
    setMutantAstroRender(mutantAstro.parts);
    setFormData({ mutantName: mutantAstro.name });
  }, [mutantAstro]);

  const newMutantAstro: Astro = {
    assembled: true,
    flighthistory: false,
    framework: "Mutant Astro",
    id: "",
    idRender: `${mutantAstro.idRender}`,
    name: `${formData.mutantName}`,
    parts: {
      rocket: mutantAstroRender.rocket,
      astro: mutantAstroRender.astro,
      naut: mutantAstroRender.naut,
    },
    stickers: 1,
    type: "Perfect Astro",
  };

  const editMutantAstro = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(
      editMutantAstroThunk(id, mutantAstro.id, newMutantAstro, navigate)
    );

    setFormData({ mutantName: "" });
    dispatch(blankStateActionCreator());
  };

  return (
    <EditMutantPageStyled>
      <h2>EDIT YOUR MUTANT ASTRO</h2>
      <p>
        Select one of each component that you owned and build the Mutant Astro
        you desire, the Astro that defines you.
      </p>
      <h2 className="result">YOUR MUTANT ASTRO "{mutantAstro.name}"</h2>
      <p className="expected">Expected result:</p>
      <ul className="mutant">
        <AstroPerfect
          name=""
          parts={mutantAstroRender}
          id=""
          idRender={`${mutantAstro.idRender}`}
          showIcon={false}
        />
      </ul>
      <form onSubmit={editMutantAstro} noValidate autoComplete="off">
        <label htmlFor="mutantName"> Mutant Astro Name: </label>
        <input
          id="mutantName"
          onChange={changeData}
          value={formData.mutantName}
        />
        <button
          disabled={disabledIf}
          style={{
            opacity: disabledIf ? 0.5 : 1,
            pointerEvents: disabledIf ? "none" : "initial",
          }}
          type="submit"
        >
          EDIT YOUR MUTANT ASTRO
        </button>
      </form>
      <h2>SELECT YOUR COMPONENTS</h2>
      <h3> Your Rockets </h3>
      <AstrosList
        astros={myItems.rockets}
        selectedPartId={
          mutantAstroRender.rocket ? mutantAstroRender.rocket.id : undefined
        }
        onSelectItem={(rocket) =>
          setMutantAstroRender({
            ...mutantAstroRender,
            rocket: { ...rocket, image: rocket.partimage },
          })
        }
      />
      <h3> Your Astros </h3>
      <AstrosList
        astros={myItems.astros}
        selectedPartId={
          mutantAstroRender.astro ? mutantAstroRender.astro.id : undefined
        }
        onSelectItem={(astro) =>
          setMutantAstroRender({
            ...mutantAstroRender,
            astro: { ...astro, image: astro.partimage },
          })
        }
      />
      <h3> Your Nauts </h3>
      <AstrosList
        astros={myItems.nauts}
        selectedPartId={
          mutantAstroRender.naut ? mutantAstroRender.naut.id : undefined
        }
        onSelectItem={(naut) =>
          setMutantAstroRender({
            ...mutantAstroRender,
            naut: { ...naut, image: naut.partimage },
          })
        }
      />
    </EditMutantPageStyled>
  );
};

export default EditMutantPage;

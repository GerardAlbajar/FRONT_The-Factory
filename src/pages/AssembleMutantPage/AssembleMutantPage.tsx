import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AstroPerfect from "../../components/AstroPerfect/AstroPerfect";
import AstrosList from "../../components/AstrosList/AstrosList";
import { AppDispatch, RootState } from "../../redux/store/store";
import {
  createMutantAstroThunk,
  loadUserCollectionThunk,
} from "../../redux/thunks/astroThunks/astroThunks";
import { Astro, AstroPart, MutantAstro, MyItems } from "../../types/types";
import AssembleMutantPageStyled from "./AssembleMutantPageStyled";

const initialUserItems: MyItems = {
  astros: [],
  nauts: [],
  rockets: [],
};

const initialMutantAstro: MutantAstro = {
  astro: undefined,
  naut: undefined,
  rocket: undefined,
};

const AssembleMutantPage = () => {
  const navigate = useNavigate();

  const [myItems, setMyItems] = useState<MyItems>(initialUserItems);

  const [mutantAstro, setMutantAstro] =
    useState<MutantAstro>(initialMutantAstro);

  const id = useSelector((state: RootState) => state.user.id);
  const astros = useSelector((state: RootState) => state.astro);
  const loading = useSelector((state: RootState) => state.ui.loaded);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserCollectionThunk(id));
  }, [dispatch, id]);

  const formInitialState = { mutantName: "" };

  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const disabledIf = formData.mutantName === "" || loading;

  const randomIdGenerator = Date.now();

  useEffect(() => {
    setMyItems({
      astros: (astros as AstroPart[]).filter((astro) => astro.type === "Astro"),
      nauts: (astros as AstroPart[]).filter((astro) => astro.type === "Naut"),
      rockets: (astros as AstroPart[]).filter(
        (astro) => astro.type === "Rocket"
      ),
    });
  }, [astros]);

  const newMutantAstro: Astro = {
    assembled: true,
    flighthistory: false,
    framework: "Mutant Astro",
    id: "",
    idRender: `#${randomIdGenerator.toString()}`,
    name: formData.mutantName.toString(),
    parts: {
      rocket: mutantAstro.rocket,
      astro: mutantAstro.astro,
      naut: mutantAstro.naut,
    },
    stickers: 1,
    type: "Perfect Astro",
  };

  const assembleMutantAstro = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(createMutantAstroThunk(id, newMutantAstro, navigate));

    setFormData(formInitialState);
  };

  return (
    <AssembleMutantPageStyled>
      <h2>ASSEMBLE A MUTANT ASTRO</h2>
      <p>
        A Completed Astro is composed of three Component NFTs: an Astro itself,
        a Naut Astro, and a Rocket Astro. An Astro, a Naut Astro, and a Rocket
        Astro may be combined to form a Completed Astro NFT. The Component NFTs
        are burned, and a Perfect Astro NFT is minted. Our Astro Factory has
        enough inventory to assemble 1,000 Completed Rockets.
      </p>
      <h2>SELECT YOUR COMPONENTS</h2>
      <p>
        Select one of each component that you owned and build the Mutant Astro
        you desire, the Astro that defines you.
      </p>
      <h3> Your Astros </h3>
      <AstrosList
        astros={myItems.astros}
        selectedPartId={mutantAstro.astro ? mutantAstro.astro.id : undefined}
        onSelectItem={(astro) =>
          setMutantAstro({
            ...mutantAstro,
            astro: { ...astro, image: astro.partimage },
          })
        }
      />
      <h3> Your Rockets </h3>
      <AstrosList
        astros={myItems.rockets}
        selectedPartId={mutantAstro.rocket ? mutantAstro.rocket.id : undefined}
        onSelectItem={(rocket) =>
          setMutantAstro({
            ...mutantAstro,
            rocket: { ...rocket, image: rocket.partimage },
          })
        }
      />
      <h3> Your Nauts </h3>
      <AstrosList
        astros={myItems.nauts}
        selectedPartId={mutantAstro.naut ? mutantAstro.naut.id : undefined}
        onSelectItem={(naut) =>
          setMutantAstro({
            ...mutantAstro,
            naut: { ...naut, image: naut.partimage },
          })
        }
      />
      <h2 className="result">EXPECTED RESULT</h2>
      <ul className="mutant">
        <AstroPerfect
          name=""
          parts={mutantAstro}
          id=""
          idRender={"Not set yet"}
          showIcon={false}
        />
      </ul>
      <form onSubmit={assembleMutantAstro} noValidate autoComplete="off">
        <label htmlFor="mutantName"> Mutant Astro Name: </label>
        <input
          id="mutantName"
          value={formData.mutantName}
          onChange={changeData}
        />
        <button
          disabled={disabledIf}
          style={{
            opacity: disabledIf ? 0.5 : 1,
            pointerEvents: disabledIf ? "none" : "initial",
          }}
          type="submit"
        >
          {loading ? "ASSEMBLING..." : "ASSEMBLE A MUTANT ASTRO"}
        </button>
      </form>
    </AssembleMutantPageStyled>
  );
};

export default AssembleMutantPage;

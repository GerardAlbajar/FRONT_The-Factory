import {
  Astro,
  AstroPart as IAstroPart,
  AstrosListProps,
  AstroType,
} from "../../types/types";
import AstroPart from "../AstroPart/AstroPart";
import AstroPerfect from "../AstroPerfect/AstroPerfect";
import AstrosListStyled from "./AstrosListStyled";

const AstrosList = ({ astros, isRemovable = false }: AstrosListProps) => {
  return astros.length ? (
    <AstrosListStyled>
      {astros.map((astro: AstroType) =>
        astro.type === "Perfect Astro" ? (
          <AstroPerfect
            key={astro.name}
            parts={(astro as Astro).parts}
            name={(astro as Astro).name}
            id={(astro as Astro).id}
            idRender={(astro as Astro).idRender}
            showIcon={isRemovable}
          />
        ) : (
          <AstroPart
            key={astro.name}
            image={(astro as IAstroPart).image}
            name={(astro as IAstroPart).name}
            id={(astro as IAstroPart).id}
            idRender={(astro as IAstroPart).idRender}
            showIcon={isRemovable}
          />
        )
      )}
    </AstrosListStyled>
  ) : (
    <p> No Items Found</p>
  );
};

export default AstrosList;

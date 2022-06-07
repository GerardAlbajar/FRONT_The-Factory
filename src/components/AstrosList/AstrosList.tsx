import {
  Astro,
  AstroPart as IAstroPart,
  AstrosListProps,
  AstroType,
} from "../../types/types";
import AstroPart from "../AstroPart/AstroPart";
import AstroPerfect from "../AstroPerfect/AstroPerfect";
import AstrosListStyled from "./AstrosListStyled";

const AstrosList = ({
  astros,
  isRemovable = false,
  onSelectItem,
}: AstrosListProps) => {
  return astros.length ? (
    <AstrosListStyled>
      {astros.map((astro: AstroType) =>
        astro.type === "Perfect Astro" ? (
          <AstroPerfect
            key={astro.name}
            {...(astro as Astro)}
            showIcon={isRemovable}
          />
        ) : (
          <AstroPart
            key={astro.name}
            {...(astro as IAstroPart)}
            showIcon={isRemovable}
            onSelectItem={
              onSelectItem ? () => onSelectItem(astro as IAstroPart) : undefined
            }
          />
        )
      )}
    </AstrosListStyled>
  ) : (
    <p> No Items Found</p>
  );
};

export default AstrosList;

import {
  AstroPartProps,
  AstroPerfectProps,
  AstrosListProps,
  AstroType,
} from "../../types/types";
import AstroPart from "../AstroPart/AstroPart";
import AstroPerfect from "../AstroPerfect/AstroPerfect";

const AstrosList = ({ astros }: AstrosListProps) => {
  return astros.length ? (
    <ul>
      {astros.map((astro: AstroType) =>
        astro.type === "Perfect Astro" ? (
          <AstroPerfect key={astro.id} {...(astro as AstroPerfectProps)} />
        ) : (
          <AstroPart key={astro.id} {...(astro as AstroPartProps)} />
        )
      )}
    </ul>
  ) : (
    <p>Waiting for astros</p>
  );
};

export default AstrosList;

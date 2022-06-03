import { Toaster } from "react-hot-toast";
import {
  AstroPartProps,
  AstroPerfectProps,
  AstrosListProps,
  AstroType,
} from "../../types/types";
import AstroPart from "../AstroPart/AstroPart";
import AstroPerfect from "../AstroPerfect/AstroPerfect";
import AstrosListStyled from "./AstrosListStyled";

const AstrosList = ({ astros }: AstrosListProps) => {
  return astros.length ? (
    <AstrosListStyled>
      {astros.map((astro: AstroType) =>
        astro.type === "Perfect Astro" ? (
          <AstroPerfect key={astro.id} {...(astro as AstroPerfectProps)} />
        ) : (
          <AstroPart key={astro.id} {...(astro as AstroPartProps)} />
        )
      )}
    </AstrosListStyled>
  ) : (
    <Toaster />
  );
};

export default AstrosList;

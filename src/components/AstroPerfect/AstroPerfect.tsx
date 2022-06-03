import { AstroPerfectProps } from "../../types/types";
import AstroPerfectStyled from "./AstroPerfectStyled";

const AstroPerfect = ({ parts, name, id }: AstroPerfectProps): JSX.Element => {
  return (
    <AstroPerfectStyled>
      <ul>
        <li className="astro">
          <img src={parts.rocket.image} alt={name} />
          <img src={parts.astro.image} alt={name} />
          <img src={parts.naut.image} alt={name} />
        </li>
        <li>
          <p>{name}</p>
        </li>
        <li>Id: {id}</li>
      </ul>
    </AstroPerfectStyled>
  );
};

export default AstroPerfect;

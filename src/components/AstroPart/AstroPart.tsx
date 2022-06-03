import { AstroPartProps } from "../../types/types";
import AstroPartStyled from "./AstroPartStyled";

const AstroPart = ({ name, image, idRender }: AstroPartProps): JSX.Element => {
  return (
    <AstroPartStyled>
      <ul>
        <li>
          <img src={image} alt={name} />
        </li>
        <li>
          <p>{name}</p>
        </li>
        <li>Id: {idRender}</li>
      </ul>
    </AstroPartStyled>
  );
};

export default AstroPart;

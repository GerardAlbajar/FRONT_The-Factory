import { AstroPartProps } from "../../types/types";
import AstroPartStyled from "./AstroPartStyled";

const AstroPart = ({ name, image, id }: AstroPartProps): JSX.Element => {
  return (
    <AstroPartStyled>
      <ul>
        <li>
          <img src={image} alt={name} />
        </li>
        <li>
          <p>{name}</p>
        </li>
        <li>Id: {id}</li>
      </ul>
    </AstroPartStyled>
  );
};

export default AstroPart;

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import {
  Astro,
  AstroPart as IAstroPart,
  AstrosListProps,
  AstroType,
} from "../../types/types";
import AstroPart from "../AstroPart/AstroPart";
import AstroPerfect from "../AstroPerfect/AstroPerfect";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import AstrosListStyled from "./AstrosListStyled";

const AstrosList = ({
  astros,
  isRemovable = false,
  selectedPartId,
  onSelectItem,
}: AstrosListProps) => {
  const loading = useSelector((store: RootState) => store.ui.loaded);

  return loading ? (
    <LoadingSpinner />
  ) : astros.length ? (
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
            selected={astro.id === selectedPartId}
            showIcon={isRemovable}
            onSelectItem={
              onSelectItem ? () => onSelectItem(astro as IAstroPart) : undefined
            }
          />
        )
      )}
    </AstrosListStyled>
  ) : (
    <p> No Astros Found </p>
  );
};

export default AstrosList;

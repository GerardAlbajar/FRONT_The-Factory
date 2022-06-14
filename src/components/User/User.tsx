import { UserProps } from "../../types/types";
import AstrosList from "../AstrosList/AstrosList";
import UserStyled from "./UserStyled";

const User = ({
  id,
  mail,
  name,
  username,
  inventory,
}: UserProps): JSX.Element => {
  return (
    <UserStyled>
      <ul className="main-list">
        <li>Name: {name}</li>
        <li>Username: {username}</li>
        <li>Contact: {mail}</li>
        <li>User Id: #{id}</li>
      </ul>
      <div>
        <AstrosList astros={inventory.perfect} />
      </div>
    </UserStyled>
  );
};

export default User;

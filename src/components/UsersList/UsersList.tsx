import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { IUser, UserListProps } from "../../types/types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import User from "../User/User";
import UsersListStyled from "./UsersListStyled";

const UsersList = ({ users }: UserListProps) => {
  const loading = useSelector((store: RootState) => store.ui.loaded);

  return loading ? (
    <LoadingSpinner />
  ) : users.length ? (
    <UsersListStyled>
      {users.map((user: IUser) => (
        <User {...(user as IUser)} key={user.username} />
      ))}
    </UsersListStyled>
  ) : (
    <p> No Users Found </p>
  );
};

export default UsersList;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "../../components/UsersList/UsersList";
import { AppDispatch, RootState } from "../../redux/store/store";
import { loadUsersThunk } from "../../redux/thunks/usersThunks/usersThunks";
import { IUser } from "../../types/types";
import UsersPageStyled from "./UsersPageStyled";

const UsersPage = () => {
  const users = useSelector((state: RootState) => state.users);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  let initialPage: IUser[] = [];

  const [page, setPage] = useState(initialPage);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setPage(users.slice(0, 1));
  }, [users]);

  useEffect(() => {
    setPage(users.slice(index, index + 1));
  }, [index, users]);

  const nextPage = () => {
    if (index < users.length - 1) {
      setIndex(index + 1);
    }
  };

  const previousPage = () => {
    if (index < users.length + 1) {
      setIndex(index - 1);
    }
  };

  return (
    <UsersPageStyled>
      <h2>EXPLORE OTHER USERS COLLECTION</h2>
      <p>
        Get inspired surfing through other users collections. Check its Mutant
        Astros and try to assemble the one that defines you. A Completed Astro
        is composed of three Component NFTs: an Astro itself, a Naut Astro, and
        a Rocket Astro. An Astro, a Naut Astro, and a Rocket Astro may be
        combined to form a Completed Astro NFT. The Component NFTs are burned,
        and a Perfect Astro NFT is minted. Our Astro Factory has enough
        inventory to assemble 1,000 Completed Rockets.
      </p>
      <div>
        <p onClick={previousPage}>Previous User Collection</p>
        <p onClick={nextPage}>Next User Collection</p>
      </div>
      <UsersList users={page} />
    </UsersPageStyled>
  );
};

export default UsersPage;

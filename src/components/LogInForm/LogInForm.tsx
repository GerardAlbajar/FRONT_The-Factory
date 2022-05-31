import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { logInUserThunk } from "../../redux/thunks/userThunks/userThunks";

import LogInFormStyled from "./LogInFormStyled";

const LogInForm = (): JSX.Element => {
  const formInitialState = { username: "", password: "" };

  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const dispatch: AppDispatch = useDispatch();

  const logInUser = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(logInUserThunk(formData));
  };

  return (
    <LogInFormStyled>
      <h2> Log-In</h2>
      <form onSubmit={logInUser} noValidate autoComplete="off">
        <label htmlFor="username"> Username </label>
        <input id="username" value={formData.username} onChange={changeData} />
        <label htmlFor="password"> Password </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
        />
        <button type="submit">Log-In</button>
      </form>
    </LogInFormStyled>
  );
};

export default LogInForm;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../redux/store/store";
import { logInUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { UserLogin } from "../../types/types";
import LogInFormStyled from "./LogInFormStyled";

const LogInForm = (): JSX.Element => {
  const formInitialState: UserLogin = { username: "", password: "" };

  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const dispatch: AppDispatch = useDispatch();

  const navigate: NavigateFunction = useNavigate();

  const logInUser = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(logInUserThunk(formData, navigate));

    setFormData(formInitialState);
  };

  const disabledIf = formData.username === "" || formData.password === "";

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
        <button
          disabled={disabledIf}
          style={{
            opacity: disabledIf ? 0.5 : 1,
            pointerEvents: disabledIf ? "none" : "initial",
          }}
          type="submit"
        >
          Log-In
        </button>
      </form>
    </LogInFormStyled>
  );
};

export default LogInForm;

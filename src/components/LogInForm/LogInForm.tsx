import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
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

  const logInUser = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const toastPromise = dispatch(logInUserThunk(formData));

    toast.promise(toastPromise, {
      loading: "Loading",
      success: "Connection successfull",
      error: "Connection failed",
    });

    setFormData(formInitialState);
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
        <button
          disabled={formData.username === "" || formData.password === ""}
          type="submit"
        >
          Log-In
        </button>
        <Toaster />
      </form>
    </LogInFormStyled>
  );
};

export default LogInForm;

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { signUpUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { UserRegister } from "../../types/types";
import SignUpFormStyled from "./SignUpFormStyled";

const SignUpForm = (): JSX.Element => {
  const formInitialState: UserRegister = {
    name: "",
    mail: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const dispatch: AppDispatch = useDispatch();

  const signUpUser = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const toastPromise = dispatch(signUpUserThunk(formData));

    toast.promise(toastPromise, {
      loading: "Loading",
      success: "Connection successfull",
      error: "Connection failed",
    });

    setFormData(formInitialState);
  };

  return (
    <SignUpFormStyled>
      <h2> Sign-Up </h2>
      <form onSubmit={signUpUser} noValidate autoComplete="off">
        <label htmlFor="name"> Name </label>
        <input id="name" value={formData.name} onChange={changeData} />
        <label htmlFor="mail"> Mail </label>
        <input id="mail" value={formData.mail} onChange={changeData} />
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
          disabled={
            formData.name === "" ||
            formData.mail === "" ||
            formData.username === "" ||
            formData.password === ""
          }
          type="submit"
        >
          Sign-Up
        </button>
        <Toaster />
      </form>
    </SignUpFormStyled>
  );
};

export default SignUpForm;

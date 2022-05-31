import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { signUpUserThunk } from "../../redux/thunks/userThunks/userThunks";
import SignUpFormStyled from "./SignUpFormStyled";

const SignUpForm = (): JSX.Element => {
  const formInitialState = { name: "", mail: "", username: "", password: "" };

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

    dispatch(signUpUserThunk(formData));
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
        <button type="submit">Sign-Up</button>
      </form>
    </SignUpFormStyled>
  );
};

export default SignUpForm;

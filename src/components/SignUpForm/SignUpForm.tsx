import { useState } from "react";
import SignUpFormStyled from "./SignUpFormStyled";

const SignUpForm = () => {
  const formInitialState = { name: "", mail: "", username: "", password: "" };

  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  return (
    <SignUpFormStyled>
      <h2> Sign-Up </h2>
      <form
        onSubmit={() => {
          "I'm working";
        }}
        noValidate
        autoComplete="off"
      >
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

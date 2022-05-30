import { useState } from "react";
import LogInFormStyled from "./LogInFormStyled";

const LogInForm = () => {
  const formInitialState = { username: "", password: "" };

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
    <LogInFormStyled>
      <h2> Log-In</h2>
      <form
        onSubmit={() => {
          "I'm working";
        }}
        noValidate
        autoComplete="off"
      >
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

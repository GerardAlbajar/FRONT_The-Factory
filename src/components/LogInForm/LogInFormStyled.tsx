import styled from "styled-components";

const LogInFormStyled = styled.section`
  background-color: #000;
  width: 600px;
  padding: 30px;
  border-radius: 10px;
  text-align: left;
  border-width: 1px;
  border-color: #fff;

  h2 {
    color: #fff;
    margin-bottom: 40px;
  }

  label {
    color: #fff;
    text-align: left;
    margin: 10px 0 10px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    border-radius: 45px;
    margin: 2px;
    width: 100%;
  }

  input {
    border-radius: 5px;
    border-width: 1px;
    border-color: #fff;
    margin: 20px 0 20px 0;
    color: #fff;
    background-color: #000;
    padding: 10px;
    font-family: "Courier New", Courier, monospace;
  }

  button {
    border-width: 1px;
    border-radius: 5px;
    border-color: #fff;
    margin: 20px 0 20px 0;
    width: 100%;
    padding: 10px;
    color: white;
    background-color: #be1522;
    cursor: pointer;
    font-family: "Courier New", Courier, monospace;
    font-weight: bolder;
  }

  button:hover {
    color: white;
    background-color: #000;
  }

  p {
    text-align: center;
    cursor: pointer;
    color: black;
  }
`;

export default LogInFormStyled;

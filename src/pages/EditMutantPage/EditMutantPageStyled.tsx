import styled from "styled-components";

const EditMutantPageStyled = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: left;

  h2 {
    margin: 50px 0 0 50px;
  }

  h3 {
    margin: 100px 0 0 50px;
  }

  p {
    margin: 20px 50px;
  }

  ul {
    justify-content: center;
  }

  .expected {
    text-align: center;
  }

  button {
    border-width: 1px;
    border-radius: 5px;
    border-color: #fff;
    margin: 50px 0;
    width: 100%;
    padding: 10px;
    color: white;
    background-color: #be1522;
    cursor: pointer;
    font-family: "Courier New", Courier, monospace;
    font-weight: bolder;
    width: 200px;
  }

  button:hover {
    color: white;
    background-color: #000;
  }

  .result {
    text-align: center;
    margin-left: 0;
  }

  li {
    list-style: none;
    .astro {
      justify-content: center;
    }
  }

  .mutant {
    display: flex;
    justify-content: center;
    padding-left: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      margin: 20px 0;
    }

    input {
      text-align: center;
      padding: 5px 0;
      width: 200px;
      font-family: "Courier New", Courier, monospace;
    }
  }
`;

export default EditMutantPageStyled;

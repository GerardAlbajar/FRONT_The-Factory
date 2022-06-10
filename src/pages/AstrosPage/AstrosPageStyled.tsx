import styled from "styled-components";

const AstrosPageStyled = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: left;

  h2 {
    margin: 50px 0 30px 50px;
  }

  ul {
    justify-content: center;
  }

  .buttons {
    display: flex;
    padding: 0 30px;
    button {
      border-width: 1px;
      border-radius: 5px;
      border-color: #fff;
      margin: 20px 20px;
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
  }
`;

export default AstrosPageStyled;

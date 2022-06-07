import styled from "styled-components";

const MyCollectionPageStyled = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: left;

  h2 {
    margin: 100px 0 0 50px;
  }

  ul {
    justify-content: center;
  }

  div {
    display: flex;

    .link {
      margin: 0 50px;
      width: 100%;
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
    }

    button:hover {
      color: white;
      background-color: #000;
    }
  }
`;

export default MyCollectionPageStyled;

import styled from "styled-components";

const UsersPageStyled = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: left;

  h2 {
    margin: 50px 0 0 50px;
  }

  ul {
    justify-content: center;
  }

  p {
    margin: 20px 50px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    button {
      font-weight: bold;
      background-color: #fff;
      font-family: "Courier New", Courier, monospace;
      margin: 20px 50px;
      border-width: 0px;
      padding: 0px;
      text-decoration: underline;
    }

    button:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export default UsersPageStyled;

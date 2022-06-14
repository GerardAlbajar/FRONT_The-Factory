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

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-weight: bold;
    }

    p:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export default UsersPageStyled;

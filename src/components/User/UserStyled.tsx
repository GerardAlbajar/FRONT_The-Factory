import styled from "styled-components";

const UserStyled = styled.li`
  margin: 20px;

  li {
    list-style: none;
  }

  div {
    padding: 10px;
    width: 1210px;
    overflow-x: auto;
    overflow-y: hidden;
    > ul {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: left;
    }
  }
`;

export default UserStyled;

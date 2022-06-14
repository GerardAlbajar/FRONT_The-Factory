import styled from "styled-components";

const UserStyled = styled.li`
  margin: 20px;
  border-bottom: #000;
  border-style: dashed;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;

  li {
    list-style: none;
    li:last-child {
      margin-bottom: 20px;
    }
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

import styled from "styled-components";

const AstroPartStyled = styled.li`
  position: relative;

  a {
    text-decoration: none;
    color: #000;
  }

  li {
    list-style: none;

    img {
      width: 200px;
      padding: 50px 0 20px;
    }

    text-align: left;

    p {
      font-weight: bolder;
      margin: 0;
    }

    p:hover {
      cursor: pointer;
    }
  }

  ul {
    padding: 0 30px;
  }

  img:hover,
  &.selected img {
    filter: invert(100%);
  }

  .delete {
    width: 36px;
    position: absolute;
    top: 40px;
    right: 20px;
  }

  .delete:hover {
    filter: invert(100%);
    cursor: pointer;
  }
`;

export default AstroPartStyled;

import styled from "styled-components";

const AstroPartStyled = styled.li`
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

  img:hover {
    filter: invert(100%);
  }
`;

export default AstroPartStyled;

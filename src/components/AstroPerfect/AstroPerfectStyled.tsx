import styled from "styled-components";

const AstroPerfectStyled = styled.li`
  position: relative;
  a {
    text-decoration: none;
    color: #000;
  }

  li {
    list-style: none;

    text-align: left;

    p {
      font-weight: bolder;
      margin: 0;
    }
  }

  .astro {
    display: flex;
    position: relative;
    left: 0;
    height: 363px;

    img {
      width: 200px;
      position: absolute;
      left: 0;
      padding: 50px 0 20px;
    }
  }

  .astro:hover {
    filter: invert(100%);
  }

  ul {
    width: 200px;
    padding: 0 30px;
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

export default AstroPerfectStyled;

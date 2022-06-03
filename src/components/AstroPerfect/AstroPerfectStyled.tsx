import styled from "styled-components";

const AstroPerfectStyled = styled.li`
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

  ul {
    width: 200px;
    padding: 0 30px;
  }
`;

export default AstroPerfectStyled;

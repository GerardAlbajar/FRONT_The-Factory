import styled from "styled-components";

const NotFoundPageStyled = styled.section`
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)),
    url("images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-flow: column;
  height: 100%;
  overflow: auto;

  padding: 50px;
  text-align: left;

  color: #fff;

  header {
    margin: 0px;
    margin-bottom: 50px;
    img {
      width: 200px;
    }
  }

  p {
    font-size: 100px;
  }
`;

export default NotFoundPageStyled;

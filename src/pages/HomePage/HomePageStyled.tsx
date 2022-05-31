import styled from "styled-components";

const HomePageStyled = styled.section`
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)),
    url("images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;

  padding: 50px;
  text-align: left;

  color: #fff;

  header {
    margin-bottom: 100px;
    img {
      width: 200px;
    }
  }

  h2 {
    margin-top: 0;
    font-weight: bolder;
  }

  p {
    width: 50%;
    margin: 40px 0 40px 0;
  }

  button {
    border-width: 1px;
    border-radius: 5px;
    border-color: #fff;
    margin: 0 50px 0 0;
    padding: 10px 70px 10px 70px;
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
`;

export default HomePageStyled;

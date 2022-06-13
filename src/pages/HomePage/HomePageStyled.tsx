import styled from "styled-components";

const HomePageStyled = styled.section`
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
    margin-bottom: 100px;
    img {
      width: 200px;
    }
  }

  .info {
    width: 50%;

    h2 {
      margin-top: 0;
      font-weight: bolder;
    }

    p {
      margin: 40px 0;
    }

    .buttons-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin: -10px -6px;
      a {
        margin: 0 6px;
      }
    }

    button {
      border-width: 1px;
      border-radius: 5px;
      border-color: #fff;
      padding: 10px 60px;
      color: white;
      background-color: #be1522;
      cursor: pointer;
      font-family: "Courier New", Courier, monospace;
      font-weight: bolder;
      white-space: nowrap;
      margin-top: 10px;
    }

    button:hover {
      color: white;
      background-color: #000;
    }
  }
  @media (max-width: 768px) {
    .info {
      width: 100%;

      .buttons-wrapper {
        justify-content: center;
      }
    }
  }
`;

export default HomePageStyled;

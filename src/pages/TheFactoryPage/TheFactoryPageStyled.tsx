import styled from "styled-components";

const TheFactoryPageStyled = styled.section`
  padding: 50px;
  background-color: #fff;
  .section1 {
    display: flex;
    align-items: flex-end;

    img {
      width: 30vw;
      padding: 50px;
    }

    .hola {
      text-align: left;
      padding-bottom: 50px;
    }
  }

  .section2 {
    text-align: left;

    .adeu {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-weight: bold;
        font-size: 50px;
      }

      img {
        width: 20vw;
        padding: 50px;
      }
    }
  }

  .section3 {
    text-align: left;
    display: flex;
    justify-content: space-between;
    .perfect {
      width: 45%;
      h2 {
        margin-top: 50px;
      }
      p {
        margin: 50px 0;
      }
      .adeu {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 31%;
          padding: 0 10px;
        }
      }

      .astronaut {
        display: flex;
        position: relative;
        left: 0;

        img {
          width: 100%;
          position: absolute;
          left: 0;
          padding-bottom: 50px;
        }
      }

      img {
        margin: 50px 0;
        width: 100%;
      }
    }
  }

  button {
    border-width: 1px;
    border-radius: 5px;
    border-color: #fff;
    margin: 20px 0 20px 0;
    width: 100%;
    padding: 10px;
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

export default TheFactoryPageStyled;

import styled from "styled-components";

const DetailsPageStyled = styled.section`
  padding: 0 50px;
  background-color: #fff;
  text-align: left;

  div {
    width: 100%;
    .container {
      display: flex;
      margin-left: 0px;
      .info {
        justify-content: right;
        text-align: right;
        padding: 0 100px;

        h2 {
          margin-top: 50px;
        }
      }
      .astro {
        display: flex;
        position: relative;
        left: 0;
        height: 363px;

        img {
          width: 430px;
          position: absolute;
          left: 0;
          padding: 50px 0 20px;
        }
      }
    }

    img {
      width: 430px;
      padding: 19.92px 0 20px;
    }

    ul {
      list-style: none;
      padding-left: 0;
    }
  }

  button {
    border-width: 1px;
    border-radius: 5px;
    border-color: #fff;
    margin: 20px 0 20px 0;
    width: 200px;
    padding: 10px;
    color: white;
    background-color: #be1522;
    cursor: pointer;
    font-family: "Courier New", Courier, monospace;
    font-weight: bolder;
  }

  button.goback {
    position: absolute;
  }

  button:hover {
    color: white;
    background-color: #000;
  }
`;

export default DetailsPageStyled;

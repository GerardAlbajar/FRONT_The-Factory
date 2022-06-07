import styled from "styled-components";

const DetailPageStyled = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: left;
  margin-left: 50px;

  div {
    width: 100%;
    .hola {
      display: flex;
      margin-left: 0px;

      .astro {
        display: flex;
        position: relative;
        left: 0;
        height: 363px;

        img {
          width: 400px;
          position: absolute;
          left: 0;
          padding: 50px 0 20px;
        }
      }
    }
    h2 {
      margin-top: 100px;
    }

    img {
      width: 400px;
      padding: 50px 0 20px;
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
    width: 100px;
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

export default DetailPageStyled;

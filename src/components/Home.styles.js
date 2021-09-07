import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 70px;

  h4 {
    font-family: 'Lobster', cursive;
    text-align: center;
    margin: 45px;
    font-size: 35px;
    @media (max-width: 480px) {
      width: 200px;
      margin: 35px;
      font-size: 22px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      font-size: 30px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      font-size: 30px;
    }
  }

  div {
    margin: 0 auto;
  }

  .center-button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .btn {
    width: 1085px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    margin: 0 auto;
    @media (max-width: 480px) {
      width: 300px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      width: 750px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      width: 850px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 900px;
    }
  }

  .btn:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  .btn:active {
    color: #000;
  }

  .btn:active:after {
    background: transparent;
  }

  .btn:hover:before {
    opacity: 1;
  }

  .btn:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  .about-title-container {
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
    margin: 15px;
    font-size: 45px;
    font-family: 'Fira Mono', monospace;
    letter-spacing: -7px;
    @media (max-width: 480px) {
      max-width: 400px;
      height: 50px;
      margin: 15px;
      font-size: 30px;
      letter-spacing: -5px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      height: 80px;
      font-size: 30px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      height: 80px;
      margin: 15px;
      font-size: 35px;
    }
  }

  h3 {
    animation: glitch 1s linear infinite;
  }

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }

  h3:before,
  h3:after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  h3:before {
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  @keyframes glitchTop {
    2%,
    64% {
      transform: translate(2px, -2px);
    }
    4%,
    60% {
      transform: translate(-2px, 2px);
    }
    62% {
      transform: translate(13px, -1px) skew(-13deg);
    }
  }

  h3:after {
    animation: glitchBotom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitchBotom {
    2%,
    64% {
      transform: translate(-2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(-22px, 5px) skew(21deg);
    }
  }

  .about-container {
    display: flex;
    height: 900px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
      margin-top: -35px;
      height: 1000px;
      margin-bottom: 40px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      margin-bottom: 50px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      margin-bottom: 50px;
    }
  }

  .about-section {
    border: 10px solid black;
    padding: 2rem 1rem;
    width: 100%;
    max-width: 800px;
    min-height: 600px;
    resize: none;
    background: #ffd73e33;
    border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 10s infinite linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d3561' /%3E%3Cstop offset='25%25' stop-color='%23c05c7e' /%3E%3Cstop offset='50%25' stop-color='%23f3826f' /%3E%3Cstop offset='100%25' stop-color='%23ffb961' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E")
      1;
    @media (max-width: 480px) {
      padding: 1rem 0.5rem;
      max-width: 300px;
      min-height: 500px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      max-width: 550px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      max-width: 650px;
    }
  }

  h5 {
    text-align: center;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 30px;
    color: #b78fcf;
    @media (max-width: 480px) {
      font-size: 20px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      font-size: 22px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      font-size: 25px;
    }
  }

  .text-design {
    font-family: 'PT Sans', sans-serif;
    font-size: 20px;
    @media (max-width: 480px) {
      font-size: 15px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      font-size: 18px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      font-size: 18px;
    }
  }
`;

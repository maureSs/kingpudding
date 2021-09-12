import styled from 'styled-components';

export const Wrapper = styled.div`
  img {
    position: relative;
    width: 100%;
    height: auto;
    max-height: 700px;
    @media (max-width: 480px) {
      height: 300px;
    }
    @media (min-width: 481px) and (max-width: 769px) {
      height: 350px;
    }
  }

  .nav-menu {
    width: 100%;
    position: absolute;
    top: 2%;
    background-color: rgb(255, 255, 255, 0.5);
  }
`;

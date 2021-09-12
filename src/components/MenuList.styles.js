import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  @media (max-width: 480px) {
    max-width: 350px;
  }
  @media (min-width: 769px) and (max-width: 959px) {
    max-width: 500px;
  }

  img {
    width: 220px;
    height: 180px;
    object-fit: cover;
    @media (max-width: 480px) {
      width: 100px;
      height: 60px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      width: 180px;
      height: 140px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      width: 180px;
      height: 140px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 180px;
      height: 140px;
    }
  }

  h3 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 17px;
    width: 220px;
    height: 40px;
    @media (max-width: 480px) {
      font-size: 14px;
      width: 100px;
      height: 60px;
      margin-bottom: 10px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      font-size: 15px;
      width: 180px;
      height: 30px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      font-size: 15px;
      width: 180px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 180px;
    }
  }
`;

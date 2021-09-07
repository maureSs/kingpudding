import styled from 'styled-components';

export const Wrapper = styled.div`
  h4 {
    text-align: center;
    margin: 60px;
    margin-top: 120px;
    font-size: 35px;
    font-family: 'Lobster', cursive;
    @media (max-width: 480px) {
      margin: 20px;
      margin-top: 70px;
      font-size: 25px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      font-size: 30px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      font-size: 30px;
    }
  }

  .breakfast-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    @media (max-width: 480px) {
      max-width: 300px;
    }
  }

  img {
    width: 100%;
    max-width: 250px;
    height: 200px;
    float: right;
    margin-top: 70px;
    @media (max-width: 480px) {
      max-width: 120px;
      height: 80px;
      float: none;
      margin-top: 20px;
      margin-bottom: 30px;
      padding-right: 20px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      max-width: 150px;
      height: 110px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      max-width: 180px;
      height: 140px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      max-width: 200px;
      height: 150px;
    }
  }

  .coffee-style {
    margin-top: 140px;
    margin-left: 20px;
    @media (max-width: 480px) {
      margin-top: 0px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      margin-right: 85px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      margin-right: 120px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      margin-right: 70px;
    }
  }

  p {
    width: 400px;
    text-align: center;
    font-size: 22px;
    font-family: 'Josefin Sans', sans-serif;
    @media (max-width: 480px) {
      width: 300px;
      font-size: 18px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      margin-left: 40px;
      font-size: 18px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      margin-left: 35px;
      font-size: 20px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      margin-left: 20px;
      font-size: 20px;
    }
  }

  em {
    font-size: 25px;
    color: #b78fcf;
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  i {
    color: #b78fcf;
  }

  .final-quote {
    text-align: center;
    font-size: 25px;
    color: #b78fcf;
    margin: 70px;
    margin-bottom: 100px;
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

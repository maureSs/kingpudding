import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #2b2a2a;
  color: #ffffff;
  width: 100%;
  height: auto;
  min-height: 80px;

  .how-to-contact {
    margin: 0 auto;
    width: 100%;
    max-width: 1500px;
    padding: 20px;
    @media (max-width: 480px) {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      max-width: 900px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      max-width: 1000px;
      padding: 10px;
      margin-left: 30px;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
      max-width: 1200px;
      padding: 10px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      font-size: 20px;
      margin-left: 70px;
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 22px;
    margin-left: 235px;
    @media (max-width: 480px) {
      font-size: 18px;
      margin-left: 0px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      font-size: 18px;
      margin-left: 100px;
    }
    @media (min-width: 1000px) and (max-width: 1199px) {
      font-size: 18px;
      margin-left: 100px;
    }
    @media (min-width: 1200px) and (max-width: 1400px) {
      font-size: 20px;
      margin-left: 100px;
    }
  }

  a + a {
    margin-left: 250px;
    @media (max-width: 480px) {
      margin-left: 0px;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      margin-left: 80px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      margin-left: 100px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      margin-left: 120px;
    }
  }
  span:hover {
    color: #df9bc8;
  }

  .email-poss {
    position: absolute;
    margin-left: -25px;
    @media (max-width: 480px) {
      position: relative;
      margin-left: 35px;
      float: right;
    }
  }

  .mail-poss {
    position: absolute;
    margin-left: -25px;
    @media (max-width: 480px) {
      position: relative;
      margin-left: 15px;
      float: right;
    }
  }

  h3 {
    font-size: 20px;
    text-align: center;
    @media (max-width: 480px) {
      font-size: 15px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      font-size: 18px;
      margin-right: 30px;
    }
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  * {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 20px;
    font-family: 'Source Code Pro', monospace;
    @media (max-width: 768px) {
      display: inline;
      align-items: initial;
      text-align: initial;
      padding-left: 0px;
    }
  }

  .nav-container {
    @media (max-width: 768px) {
      display: none;
    }
  }

  ul {
    list-style-type: none;
    padding: 20px 20px;
    margin-right: 100px;
    @media (min-width: 769px) and (max-width: 959px) {
      margin-right: 200px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      margin-right: 170px;
    }
  }
  .nav-item {
    text-decoration: none;
  }
  li {
    display: inline-block;
  }

  h3 {
    position: relative;
    display: block;
    padding: 4px 0;
    font-family: Lato, sans-serif;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    color: rgb(51, 51, 51);
    @media (min-width: 769px) and (max-width: 959px) {
      font-size: 15px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      font-size: 15px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      font-size: 17px;
    }
  }
  h3::after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    background: #e4a1cf;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  h3:hover {
    color: #de94c7;
  }

  h3:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  h1 {
    color: rgb(0, 0, 0);
    @media (max-width: 768px) {
      position: absolute;
      font-size: 25px;
      left: 32%;
    }
    @media (min-width: 769px) and (max-width: 959px) {
      font-size: 20px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      font-size: 25px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      font-size: 30px;
    }
  }

  .social-media {
    position: absolute;
    right: 5%;
    @media (min-width: 769px) and (max-width: 959px) {
      right: 10%;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      right: 12%;
    }
  }

  .social-media img {
    width: 100%;
    max-width: 35px;
    height: auto;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    @media (min-width: 769px) and (max-width: 959px) {
      max-width: 22px;
    }
    @media (min-width: 960px) and (max-width: 1024px) {
      max-width: 25px;
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      max-width: 30px;
    }
  }

  .social-media img:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  // Mobile, iPads, Tablets devices

  .mobile-nav-container {
    @media (min-width: 768px) {
      display: none;
    }
  }

  summary {
    writing-mode: vertical-lr;
    text-align: center;
    padding: 20px 20px;
    width: 23px;
    height: 17px;
    background-color: var(--primColor);
    border: 2px solid var(--secoColor);
    border-radius: var(--cornerRad);
    color: var(--secoColor);
    cursor: pointer;
    user-select: none;
    outline: none;
    transition: transform 200ms ease-in-out 0s;
  }

  summary::before,
  summary::after {
    position: static;
    top: 0;
    left: 0;
  }
  summary::before {
    content: '';
  }
  summary::after {
    content: '|||';
    letter-spacing: -1px;
  }
  summary:hover {
    transform: scale(1.1);
  }
  summary::marker {
    font-size: 0;
  }
  summary::-webkit-details-marker {
    display: none;
  }

  details[open] .menu {
    animation-name: menuAnim;
  }
  details[open] summary::before {
    content: 'X';
  }
  details[open] summary::after {
    content: '';
  }

  .mobile-menu {
    /*height: 0;*/
    width: fit-content;
    border-radius: var(--cornerRad);
    background-color: var(--primColor);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    animation: closeMenu 300ms ease-in-out forwards;
  }
  .mobile-menu .nav-item {
    padding: 12px 24px;
    margin: 0 16px;
    color: var(--secoColor);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    text-decoration: none;
    text-align: center;
    transition: filter 200ms linear 0s;
  }
  .mobile-menu .nav-item:nth-of-type(1) {
    padding-top: 24px;
  }
  .mobile-menu .nav-item:nth-last-of-type(1) {
    border-bottom: none;
  }
  .mobile-menu .nav-item:hover {
    filter: brightness(200%);
  }
  details::before {
    color: var(--secoColor);
    position: absolute;
    margin-left: 80px;
    padding: 10px 10px;
    opacity: 0.4;
  }
  details[open]::before {
    animation: fadeMe 300ms linear forwards;
  }
  @keyframes menuAnim {
    0% {
      height: 0;
    }
    100% {
      height: 312px;
    }
  }
  @keyframes fadeMe {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 0;
    }
  }
`;

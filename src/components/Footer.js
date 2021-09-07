import React from 'react';
// styles
import { Wrapper } from './Footer.styles';
// icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

// id = 'contact' is not for design but to use with HashLink to be able to scroll down to the footer instead of going to a new route (React Router)

export default function Footer() {
  return (
    <Wrapper>
      <div id='contact'>
        <div className='how-to-contact'>
          <a href='mailto:fabitrey@gmail.com'>
            <MailOutlineIcon className='email-poss' />
            <span>Mandanos un email</span>
          </a>
          <a
            target='_blank'
            href='https://www.facebook.com/groups/112410426105415'
            rel='noreferrer'
          >
            <FacebookIcon className='mail-poss' />
            <span>Seguinos en Facebook</span>
          </a>
          <a
            target='_blank'
            href='https://www.instagram.com/fabi.rey/?hl=en'
            rel='noopener noreferrer'
          >
            <InstagramIcon className='mail-poss' />
            <span>Seguinos en Instagram</span>
          </a>
        </div>
        <h3>© 2021 kingpudding</h3>
      </div>
    </Wrapper>
  );
}

import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SecondaryBtn, SocialIcons, Span, Span2 } from './HeaderStyles';

const Header = () =>  (
<Container>
  {/* <Div1>
    <Link href="/">
      <a style={{ display:"flex", alignitems: "center", color:"white", marginBottom: "20px"}}>
       <Span>ileri.io</Span>
      </a>
    </Link>
  </Div1> */}
<Div3>
  {/* <li>
    <Link href="#about">
      <NavLink><Span>01.</Span>About</NavLink>
    </Link>
  </li>
  <li>
    <Link href="#experience">
      <NavLink><Span>02.</Span>Experience</NavLink>
    </Link>
  </li>
  <li>
    <Link href="#work">
      <NavLink><Span>03.</Span>Work</NavLink>
    </Link>
  </li>
  <li>
    <Link href="#contact">
      <NavLink><Span>03.</Span>Contact</NavLink>
    </Link>
  </li> */}

  <SecondaryBtn>Resume</SecondaryBtn>
</Div3>

{/* <Div3>
<SocialIcons href="https://github.com">
<AiFillGithub size= "3rem"/>
</SocialIcons>

<SocialIcons href="https://linkedin.com">
<AiFillLinkedin size= "3rem"/>
</SocialIcons>

<SocialIcons href="https://instagram.com">
<AiFillInstagram size= "3rem"/>
</SocialIcons>

</Div3> */}

</Container>
);

export default Header;

import React from 'react';

import { Section, SectionText, SectionTitle,SecondaryBtn } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';

const Hero = () => (
  <Section>
     <Span>Hi, my name is </Span>
    <LeftSection>

     
      <SectionTitle>
        Ileri Arowolo.<br />
        I build products for businesses
      </SectionTitle>
      <SectionText>
      I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
      Currently, I’m focused on building accessible, human-centered products at Upstatement.
      </SectionText>
      <SecondaryBtn onClick={()=> window.location = 'https://google.com'}>Check out my work!</SecondaryBtn>
    </LeftSection>
  </Section>
);

export default Hero;

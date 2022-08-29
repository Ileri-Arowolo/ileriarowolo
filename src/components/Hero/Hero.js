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
        I create digital products
      </SectionTitle>
      <SectionText>
      I’m a prduct manager specialized in building (and occasionally designing) exceptional digital experiences. 
      Currently, I’m focused on building accessible, human-centered products.
      </SectionText>
      <SecondaryBtn onClick={()=> window.location = 'https://google.com'}>Check out my work!</SecondaryBtn>
    </LeftSection>
  </Section>
);

export default Hero;

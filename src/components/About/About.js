import React from 'react';

import { Section, Div1, SectionDivider, SectionText, SectionList,ListItem, SectionTitle,Span, Span2,Box, Title, ImgBox, Img, Overlay, Outline, LeftSection, RightSection, Overlay2 } from './AboutStyles';

 import { BiRightArrow } from 'react-icons/Bi';


const About = () => {
  return (
    <div>
      
      <Section row>
        
      {/* <Div1> */}
      <Title><Span>01.</Span> <SectionTitle>About me</SectionTitle> <SectionDivider></SectionDivider></Title>

      <LeftSection> 
          <SectionText>
          Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when 
           a custom reblog button taught me a lot about HTML & CSS!
          </SectionText>
          <SectionText>
          Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when 
          together a custom reblog button taught me a lot about HTML & CSS!
          </SectionText>

          <SectionText>
          I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
          </SectionText>
          
          <SectionText>Here are a few technologies I’ve been working with recently:</SectionText>

          <SectionList>

            <Box>
            <ListItem><Span2><BiRightArrow size={10}/></Span2>JavaScript (ES6+)</ListItem>
            <ListItem><Span2><BiRightArrow size={10}/></Span2>Next.js</ListItem>
            <ListItem><Span2><BiRightArrow size={10}/></Span2>Node.js</ListItem>
            </Box>
            <Box>
            <ListItem><Span2><BiRightArrow size={10}/></Span2>Kotlin</ListItem>
            <ListItem><Span2><BiRightArrow size={10}/></Span2>MongoDB</ListItem>
            <ListItem><Span2><BiRightArrow size={10}/></Span2>Mix-panel</ListItem>
            </Box>

            
            
          </SectionList>

        </LeftSection>

        <RightSection>

        <ImgBox>

        <Overlay></Overlay>
            <Overlay2></Overlay2>
            <Img  src="/images/profile1.jpg" />
            
        </ImgBox>
        </RightSection>

        {/* </Div1>   */}
      </Section>
      
    </div>
  )
}

export default About
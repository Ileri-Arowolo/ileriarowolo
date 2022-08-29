import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I have some experience working with these tecnologies and Frameworks.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-end</ListTitle>
        <ListParagraph>
          Experience with <br/>
          -Html/CSS <br/>
          -Javascript <br/>
          -React.js


        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          -Node.js<br/>
          -Php<br/>
          -Laravel
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br/>
          -Adobe XD<br/>
          -Adobe Illustrator

        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Database</ListTitle>
        <ListParagraph>
          Experience with <br/>
          -Mysql<br/>
          -MongoDB
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;

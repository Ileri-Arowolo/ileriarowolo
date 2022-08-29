
import styled from 'styled-components';
import px2vw from '../../util';



export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "10rem 20rem 0" } ;
  margin: 0 auto;
  width: ${px2vw(800)};
  box-sizing: content-box;
  position: relative;
  flex-wrap: wrap;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  gap: ${px2vw(40)};

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`


export const Div1 = styled.div`
width: ${px2vw(800)};
display: flex;
`;

export const LeftSection = styled.div`
flex-basis: 60%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const RightSection = styled.div`
 
  @media ${(props) => props.theme.breakpoints.sm} {
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 40%;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '32px'};
  line-height: ${(props) => props.main ? '72px' : '35px'};
  width: max-content;
  max-width: 100%;
 


  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  width: ${px2vw(450)};
  font-size: ${px2vw(16)};
  line-height: ${px2vw(26)};
  font-weight: 200;
  padding-bottom: 1.6rem;
  margin: ${px2vw(0)} 0px ${px2vw(5)};
  color: rgba(255, 255, 255, 0.5);



  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`
export const SectionList = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${px2vw(50)};
  width: ${px2vw(450)};
  font-size: ${px2vw(16)};
  line-height: ${px2vw(26)};
  font-weight: 200;
  padding-bottom: 1.6rem;
  margin: ${px2vw(0)} 0px ${px2vw(5)};
  color: rgba(255, 255, 255, 0.5);



  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`

  width: ${px2vw(200)};
  height: 1px;
  background-color:${(props) => props.theme.colors.accent1};
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg,  ${(props) => props.theme.colors.accent2} 0%,  ${(props) => props.theme.colors.primary} 100%)' :
    'linear-gradient(270deg, #333533 0%, #333533 100%)'};

    margin: ${(props) => props.divider ? "4rem 0" : "auto 2rem" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 1px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 1px;
  }
`



export const Box = styled.span`
display: flex;
flex-direction: column;
justify-content: flex-start;

`;

export const Span = styled.span`

margin-right: ${px2vw(15)};
color: ${(props) => props.theme.colors.accent1};
font-family: ${(props) => props.theme.fonts.title};
`;

export const Span2 = styled.span`
display: flex;
justify-content: flex-start;
align-items: baseline;
margin-right: ${px2vw(10)};
color: ${(props) => props.theme.colors.accent1};
font-family: ${(props) => props.theme.fonts.title};
font-size: ${px2vw(12)};
`;

export const ListItem = styled.p`
display: flex;
justify-content: flex-start;
align-items: baseline;
color: ${(props) => props.theme.colors.primary1};
font-family: ${(props) => props.theme.fonts.title};
font-size: ${px2vw(12)};
`;


export const Title = styled.div`
display: flex; 
flex-direction: row;
font-size: ${px2vw(32)};
line-height: ${px2vw(35)};
font-weight: 800;
justify-content: flex-start;
align-items: baseline;
flex-basis: 100%;
height: ${px2vw(40)};
width: ${px2vw(600)};
`;


  export const ImgBox = styled.div`
  background-size: cover;
  background-position: center center;
  position: relative;
  border-radius: ${px2vw(10)};
  height: ${px2vw(280)};
  width: ${px2vw(280)};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
    
  }

  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const Img = styled.img`
  border-radius: 4px;
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  object-position: 50% 1%;

  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;
  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`

export const Overlay = styled.div`
  background: ${props => props.theme.colors.accent1};
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
  
  opacity: 0.5;
  
  -webkit-transition: .4s ease;
  transition: .4s ease;

  &:hover {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
`

export const Overlay2 = styled.div`
  border: ${px2vw(3)} solid ${props => props.theme.colors.accent1};
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  top: ${px2vw(40)};
  right: 0;
  bottom: 0;
  left:${px2vw(20)};
  z-index: -1;
  content: "";
  border-radius: ${px2vw(4)};
  opacity: 0.5;
  
  -webkit-transition: .4s ease;
  transition: .4s ease;

  &:hover {
  top: ${px2vw(0)};
  right: 0;
  bottom: 0;
  left:${px2vw(0)};
  }
`

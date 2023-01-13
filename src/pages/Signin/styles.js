import styled from "styled-components";
import bacgroundImg from "../../assets/background-image.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  
  align-items: stretch;
  span {
      font-size: 12px;
      line-height: 18px;
      margin: 7px 0 48px;
    }
    h2:nth-child(3) {
    
    margin-bottom: 48px;
  }
`;

export const Form = styled.form`
width: 630px;
  padding: 0 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${({theme})=>theme.COLORS.BACKGROUND_900};
 > a{

color: ${({theme})=>theme.COLORS.PINK};
margin: 42px auto;
;
 }
`;

export const Background = styled.div`
flex: 1;
background: url(${bacgroundImg}) no-repeat center center;
background-size: cover;
`;

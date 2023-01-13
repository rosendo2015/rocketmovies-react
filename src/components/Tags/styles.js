import styled from 'styled-components';

export const Container = styled.button`
width: fit-content;
height: 30px;
color: ${({theme})=>theme.COLORS.WHITE};
padding: 8px 16px;
background-color: ${({theme})=>theme.COLORS.BACKGROUND_601};
border: none;
border-radius: 8px;
margin-right: 8px;

font-weight: 400;
font-size: 12px;
line-height: 14px;
margin-bottom: 40px;


`;
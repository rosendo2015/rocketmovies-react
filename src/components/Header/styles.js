import styled from 'styled-components'

export const Container = styled.div`

grid-area: header;
width: 100%;
height: 116px;
background: ${({theme})=>theme.COLORS.BACKGROUND_900};

display: flex;
align-items: center;
justify-content: center;
gap: 64px;
border-bottom: 1px solid ${({theme})=>theme.COLORS.BACKGROUND_800};
padding: 0 123px;
`;
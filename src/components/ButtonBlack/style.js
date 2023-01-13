import styled from "styled-components";

export const Container = styled.button`
width: 100%;

display: flex;
align-items: center;
justify-content: center;
gap: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PAGE};
  color: ${({ theme }) => theme.COLORS.PINK};
  padding: 13.5px 32px;
  font-family: 'Roboto Slab', serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  border-radius: 10px;
  border: none;
  
`;

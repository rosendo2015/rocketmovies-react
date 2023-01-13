import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.BACKGROUND_700 : theme.COLORS.WHITE};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.BACKGROUND_700}` : "none"}; 
  
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;
  
  > button {
    border: none;
    background: none;
    font-size: 24px;
  }
  .button-del,
  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;

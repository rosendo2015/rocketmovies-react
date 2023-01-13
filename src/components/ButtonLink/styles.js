import styled from "styled-components";

export const Container = styled.button`
margin-top: 40px;
  display: flex;
  align-items: center;

  gap: 8px;
  font-family: "Roboto Slab", serif;
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;
export const Arrow = styled.div`
  width: 20px;
  height: 20px;

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 20px;
`;

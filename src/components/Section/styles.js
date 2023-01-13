import styled from "styled-components";
export const Container = styled.div`

margin: 56px 0 40px; 

h2 {
    
    margin: 40px 0 24px;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.GRAY_050};
    
  }
.child{
  display: flex;
  gap: 40px;
  border-radius: 8px;
  background-color: #000;
  padding: 40px;
  flex-wrap: wrap;
}
`;

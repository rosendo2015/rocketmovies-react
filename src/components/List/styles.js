import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 242px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 16px;
  padding: 32px;
  > h1 {
    font-style: Bold;
    font-size: 24px;
    line-height: 32px;
  }
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_050};
    overflow: hidden; /* remove o estouro do elemento */
    text-overflow: ellipsis; /* adiciona “...” no final */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* quantidade de linhas */
    -webkit-box-orient: vertical;

    padding-top: 0;
    padding-bottom: 45px;

    text-align: justify;
  }

  div > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 8px;
    width: 20px;
    height: 20px;
    font-size: 20px;
  }
`;

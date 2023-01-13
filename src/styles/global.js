import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Roboto Slab', serif;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_PAGE};    
    color: ${({ theme }) => theme.COLORS.WHITE};

             
    scrollbar-color: ${({theme})=>theme.COLORS.PINK} transparent;
   
}
body, input, bottom, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }
    a{
        text-decoration: none;
    }
    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }
    button:hover, a:hover{
        filter: brightness(0.9)
    }
    

    
    ::-webkit-scrollbar{
        width: 10px;       
        background: transparent;       
    }
    ::-webkit-scrollbar-thumb {  
        width: 8px;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
        border: 3px solid ${({ theme }) => theme.COLORS.PINK};
}
`;

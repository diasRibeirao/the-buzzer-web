import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    :root{
       --primary: #ffffff;
       --bgPrimary: #C4C4C4;
       --bgSecondary: #4B4B4B;
       --textPrimary: #000000;
       --textSecondary: #616D72;
       --textButton: #ffffff;
       --bgStar: #FFD700
   }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
    }

    .home, 
    .emergency,
    .ranking {
        display: flex;
       // height: 90vh;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
    }
`;
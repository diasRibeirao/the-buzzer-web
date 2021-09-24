import styled from "styled-components";

export const Container = styled.section`
    padding-top: 80px;
    height: 100vh;
    margin: 14px;

    > h2 {
        text-align: center;
    }

    > div {
        margin-top: 20px        ;
        text-align: center;

        table svg {
            fill: var(--bgStar);
        }

        a {
            text-decoration: none;
            color: var(--textPrimary);
            font-size: 24px;
            width: 95%;
            height: 100%;
            padding: 0 16px;
            border-radius: 4px;
            line-height: 4em;;
        }
         
        a > svg {
            font-size: 30px;
            padding-left: 10px;
        }

        a > svg:first-of-type {
            font-size: 72px;
            padding-right: 10px;
        }
  
    }

`;

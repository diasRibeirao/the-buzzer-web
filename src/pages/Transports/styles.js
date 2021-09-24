import styled from "styled-components";

export const Container = styled.section`
    padding-top: 80px;
    height: 100vh;
    margin: 14px;

    > h2 {
        text-align: center;
    }

    > div {
        margin-top: 20px;

        table svg {
            fill: var(--bgStar);
        }
  
    }

`;


export const NavButton = styled.button`
    width: 160px;
    height: 40px;
    position: fixed;
    bottom: 10px;
    left: 50%;
    margin-left: -80px;
    border-radius: 5%;
    font-size: 14px;
    font-weight: bold;

    background: #D93C3C;
    color: #fff;
    border: 0;

`;
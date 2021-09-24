import styled from "styled-components";

export const Container = styled.section`

    height: 100vh;

    > form {
        padding-top: 80px;
        margin: 14px;
    }

    > div {
        margin-top: 20px;
        height: 80vh;
        background-size: countain;

        img {
            width: 100%;
            height: 100%;
            box-shadow: 10px var(--bgSecondary);
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
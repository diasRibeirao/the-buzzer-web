import styled from "styled-components";

export const Container = styled.section`

    padding-top: 80px;
    height: 100vh;
    margin: 14px;

    > h2 {
        text-align: center;
    }

    .center {
        text-align: center;
    }

    svg  {
        font-size: 100px;
        padding-top: 20px;
    }

    .adicionais {
        margin-top: 15px;
    }
    .perguntas{
        padding: 10px;
    } 
    .icon {
        margin-left: 170px;
        margin-top: 100px;
        transform: scale(9);
    }
    .enviar{
        margin-top: 15%;
        margin-left: 150px;
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
import styled from "styled-components";

export const Container = styled.section`
    padding-top: 80px;
    height: 100vh;
    margin: 14px;

    > h2 {
        text-align: center;
    }

    > div {
        text-align: center;

        .line {
            padding-bottom: 20px
        }

        svg  {
            font-size: 60px;
            padding-right: 10px;
        }
        
    }

    
`;


export const NavButton = styled.button`
    width: 260px;
    height: 52px;
    bottom: 10px;
    border-radius: 5%;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    background: #D93C3C;
    color: #fff;
    border: 0;

`;
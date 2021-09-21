import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

export const Container = styled.header`
    height: 80px;
    padding: 0px 14px;
    background-color: var(--bgSecondary);
    color: var(--primary);

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100vw;
    

    box-shadow: 0px 0px 10px var(--bgSecondary);
    
    > div {
        align-items: center;
        gap: 5px;
        width: 100%;
        text-align: center; 
        display:table-cell;
        vertical-align:middle;

        p {
            font-size: 24px;
            font-weight: bold;
            position: absolute;
            top: 50%;
            left: 50%;
            padding: 0;
            margin: 0;
            transform-origin: center center;
            transform: translateX(calc((100% / 2) * (-1))) translateY(calc((100% / 2) * (-1)));
        }
    }

`;

export const IconSignOut = styled(FaSignOutAlt)`
    font-size: 35px;
    color: var(--primary);

    transition: .2s;

    :active{
        transform: scale(0.9) rotate(360deg);
    }
`;
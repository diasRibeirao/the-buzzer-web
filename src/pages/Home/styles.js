import styled from "styled-components";

export const Container = styled.section`
    padding-top: 80px;
    height: 100vh;
    margin: 14px;

    > div {
        margin-top: 20px;

        table svg {
            fill: var(--bgStar);
        }
  
    }

    > Button {/* btnLogin */

        position: absolute;
        width: 296px;
        height: 48px;
        left: 32px;
        top: 480px;
        
        background: rgba(217, 60, 60, 0.81);
        border-radius: 8px;
        }

    > img {
        /* bus 1 */

            position: absolute;
            width: 238px;
            height: 237px;
            left: 61px;
            top: 142px;

            background: url(bus.png);
            border-radius: 7px;

    }

`;

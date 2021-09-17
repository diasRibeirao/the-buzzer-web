import styled from "styled-components";

export const Container = styled.section`
    padding-top: 80px;
    height: 100vh;
    margin: 14px;

    > header {
        padding: 18px;

        display: flex;
        align-items: center;
        gap: 10px;

        > div {
            > p{
                font-size: 18px;
                font-weight: bold;
            }

            > span {
                font-size: 14px;
            }
        }
    }
`;

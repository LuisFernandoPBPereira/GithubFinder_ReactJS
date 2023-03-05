import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    background-color: #2D333B;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 0 0 20px 20px;

    h1{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 52px;
        color: #FFFFFF;
        background-color: #2D333B;
    }

    img{
        height: 7vh;
        border-radius: 10px;
    }
`
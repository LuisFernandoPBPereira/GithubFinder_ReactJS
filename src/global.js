import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *, body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: #1D2128;
    }

    hr{
        background-color: rgba(229, 229, 229, 0.2);
        border: 1px solid rgba(229, 229, 229, 0.2);
    }
`
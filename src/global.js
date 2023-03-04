import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *, body{
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
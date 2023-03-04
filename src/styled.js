import styled from "styled-components";

export const App = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    .content{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .info{
        width: 80%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
    }
    
    .profile{
        display: flex;
    }

    .profile h3{
        color: #999999;
        font-size: 24px;
    }

    .profile span{
        display: block;
        color: #999999;
        font-size: 12px;
    }

    .profile p{
        color: #999999;
        font-size: 12px;
        margin-top: 20px;
    }

    .profileIcon{
        width: 120px;
        height: 120px;
        border-radius: 60px;
        border: 1px solid #E5E5E5;
        margin-right: 24px;
    }

    h4{
        text-align: center;
    }

    @media(max-width: 590px){
        .data{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
        }
    }
`
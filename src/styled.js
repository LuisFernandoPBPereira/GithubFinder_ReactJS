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
        color: #FFFFFF;
        font-size: 32px;
    }

    .profile span{
        display: block;
        color: #FFFFFF;
        font-size: 16px;
    }

    .profile p{
        color: #FFFFFF;
        font-size: 20px;
        margin-top: 20px;
    }

    .profileIcon{
        width: 120px;
        height: 120px;
        border-radius: 60px;
        border: 1px solid #E5E5E5;
        margin-right: 24px;
    }

    h2{
        text-align: center;
    }

    .data{
        h2{
            margin-bottom: 1vh;
        }
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
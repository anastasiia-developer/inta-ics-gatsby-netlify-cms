import styled from "styled-components";
import React from "react";

const Tags = styled.div`
    display: flex;
    a{
        background: #F0F0F0;
        color: #383838;
        border-radius: .5em; 
        padding: .7em 1.2em;
        margin-right: .25em;
        text-decoration: none;
        font-weight: 500;
        font-size: .8em;
        &:hover{
            color: #005BE4;
        }
    }
    @media(max-aspect-ratio: 3/3), (max-height: 500px){
        margin: 0 0 1.5em 0;
        width: 100%;
    }
`;

export default Tags;

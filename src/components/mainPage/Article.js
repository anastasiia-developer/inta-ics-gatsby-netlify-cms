import {HTMLContent} from "../Content";
import React from "react";
import styled from "styled-components";

const Section = styled.article`
    margin-top: 5em;    
    background: #F0F5FD;
    padding: 3em 0;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        margin-top: 3em;    
        padding: 2em 1em;
    }
    h2{
        color: #005BE4;
        font-weight: 500;
        margin-bottom: 1em;
        font-size: 1.55em;
    }
    h3{
        font-weight: 500;
        margin-bottom: 1em;
    }
    .wrapper{
        width: 70%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }
    }
    p, ul{
        color: #3D3D3D;
        font-size: 1em;
        line-height: 1.8em;
        margin-bottom: 2em;
    }
    ul{
      padding-left: 1.5em;
      list-style: initial;
      li{
        padding-left: .5em;
      }
    }
`;

const Article = ({mainpitch}) =>(
    <Section>
        <div className="wrapper">
            <HTMLContent className="text" content={mainpitch.article}/>
        </div>
    </Section>
);

export default Article
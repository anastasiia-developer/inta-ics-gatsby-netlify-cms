import React from "react"
import styled from "styled-components"
import { HTMLContent } from "../Content";

const Section = styled.section`
    text-align: center;    
    h2{
        font-weight: 500;
        color: #474747;
        padding: 2em 0;    
    }
    .text{
        color: #6B6B6B;
        width: 70%; 
        line-height: 1.5em;
        margin: 0 auto 2em;
        p{
            padding-bottom: 1.5em;
        }
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 90%;
        }
    }
`;

const SectionText = ({ sectionText }) => {
    const { title, text, image } = sectionText;

    return (
        <Section>
            <h2>{title}</h2>
            <HTMLContent className="text" content={text}/>
        </Section>
    )
}

export default SectionText;
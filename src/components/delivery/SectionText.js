import React from "react"
import styled from "styled-components"
import {HTMLContent} from "../Content";

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
        margin: 0 auto;
        p{
            padding-bottom: 1.5em;
        }
    }
    .row{
        align-items: center;
    }
    .line{
        width: 80%;
        margin-right: .5em;
        hr{
            background: #D6E5FB;
            border: none;
            height: .25em;
            font-size: .7em;
        }
    }
    img{
        width: 2em;
    }
`;

const SectionText = ({ sectionText }) => {
    const { title, text, image } = sectionText;

    return (
        <Section>
            <h2>{title}</h2>
            <HTMLContent className="text" content={text}/>
            <div className="row">
                <div className="line">
                    <hr/>
                    <hr/>
                </div>
                <img src={image.publicURL } alt={title} />
            </div>
        </Section>
    )
}

export default SectionText;
import React from 'react'
import styled from "styled-components"
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { ContentInFrontmatter } from '../Content';

const Section = styled.section`
    background: #F0F5FD;
    justify-content: space-between;
    padding: 2em 0;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        margin-top: 2em;
        padding: 2em 1em 3em;
    }
    .description{
        padding: 0 2em 0 5em;
    }
    .description{
        flex: 1;
        font-size: 1.05em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
            padding: 1em;
        }    
        h2{
            color: ${props => props.hasChildren ? '#474747' : '#005BE4'};
            font-weight: 500;
            margin: 1em auto;
        }
        p{
            line-height: 1.7em;
            padding-bottom: .5em;
            color: #3D3D3D;
            font-size: 1em;
        }
        .text ul, h3{
            padding-bottom: .5em;
            margin: 0;
        }
    }
    
    ul{
        font-size: 1em;
        color: #005BE4;
        padding-left: 2em;
        line-height: 1.7em;
    }
    .gatsby-image-wrapper{
        flex: 1;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }    
    }
   
`;

const About = ({ title, image, alt, text, className, children }) => (
    <Section className={`row-to-column ${className}`}
             hasChildren={!!children}>
        <div className="description">
            {title &&
                <h2>{title}</h2>
            }
            <ContentInFrontmatter className="text" content={text}/>
            {children}
        </div>
        <PreviewCompatibleImage
            imageInfo={{
                image: image,
                alt: alt
            }}
        />
    </Section>
)

export default About
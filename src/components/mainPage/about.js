import React from 'react'
import styled from "styled-components"
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { ContentInFrontmatter } from '../Content';

const Section = styled.section`
    background: #F0F5FD;
    padding: 4em 0 6em;
    margin-top: 4em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        margin-top: 2em;
        padding: 2em 1em 3em;
    }
    .description{
        flex: 1;
        font-size: 1.05em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }    
        h2{
            padding: 0 0 0 3.5em;
            color: ${props => props.hasChildren ? '#474747' : '#005BE4'};
            padding-bottom: 1em;
            font-weight: 500;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                padding: 0;
            }
        }
        .text{
            padding: 0 4em 0 6em;
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                padding: 0;
            }   
        }
        p{
            line-height: 1.7em;
            padding: 1em 0;
            color: #3D3D3D;
            font-size: .9em;
        }
    }
    ul{
        font-size: .9em;
        color: #005BE4;
        padding-left: 2em;
        line-height: 1.7em;
        font-weight: 500;
    }
    .gatsby-image-wrapper{
        flex: 1;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }    
    }
   
`;

const About = ({ title, image, text, className, children }) => (
    <Section className={`row-to-column ${className}`} hasChildren={!!children}>
        <div className="description">
            <h2>{title}</h2>
            <ContentInFrontmatter className="text" content={text}/>
            {children}
        </div>
        <PreviewCompatibleImage
            imageInfo={{
                image: image,
            }}
        />
    </Section>
)

export default About
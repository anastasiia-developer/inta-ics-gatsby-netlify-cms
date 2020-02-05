import React from 'react'
import styled from "styled-components"
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import { HTMLContent } from '../Content';

const Section = styled.section`
    background: #F0F5FD;
    padding: 4em 0 4em 6em;
    margin-top: 4em;
    .description{
        flex: 1;
        margin-right: 2em;
        h2{
            color: #005BE4;
            padding-bottom: 1em;
            font-weight: 500;
        }
        p{
            line-height: 1.7em;
            padding: 1em 0;
            color: #3D3D3D;
            font-size: .9em;
        }
        ul{
            font-size: .9em;
            color: #005BE4;
            padding-left: 2em;
            line-height: 1.7em;
            font-weight: 500;
        }
    }
    .gatsby-image-wrapper{
        flex: 1;
    }
`;

const About = ({ about }) => {
    const { title, image, text } = about;

    return(
        <Section className="row-to-column">
            <div className="description">
                <h2>{title}</h2>
                <HTMLContent content={text}/>
            </div>
            <PreviewCompatibleImage
                imageInfo={{
                    image: image,
                }}
            />
        </Section>
    )
};

export default About
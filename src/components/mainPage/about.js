import React from 'react'
import styled from "styled-components"
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Section = styled.section`
    .description{
        flex: 1;
    }
    .gatsby-image-wrapper{
        flex: 1;
    }
`;

const About = ({ about }) => {
    const { title, image } = about;

    return(
        <Section className="row-to-column">
            <div className="description">
                <h2>{title}</h2>
                <p className="text">

                </p>
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
import React from 'react'
import styled from "styled-components"
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Section = styled.section``;

const About = ({ about }) => {
    const { title, text, image } = about;

    return(
        <Section className="row-to-column">
            <div className="description">
                <h2>{title}</h2>
                <div className="text">
                    {text}
                </div>
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
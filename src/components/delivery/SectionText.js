import React from "react"
import styled from "styled-components"
import {HTMLContent} from "../Content";

const Section = styled.section`
`;

const SectionText = ({ sectionText }) => {
    const { title, text, image } = sectionText;

    return (
        <Section>
            <h2>{title}</h2>
            <HTMLContent className="text" content={text}/>
            <img src={image.publicURL } alt={title} />
        </Section>
    )
}

export default SectionText;
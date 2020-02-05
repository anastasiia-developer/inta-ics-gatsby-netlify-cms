import React from 'react'
import styled from "styled-components"

const Container = styled.section`
    text-align: center;
    h2{
        font-weight: 700;
        color: #393939;
        padding-top: 1.5em;
        font-size: 1.5em;
    }
    h3{
        color: #8F8F8F;
        font-size: .8em;
        padding: 1em 0 2em;
    }
`;

const Section = ({section}) => {
    const { title, subTitle, blocks} = section;
    return (
        <Container>
            <h2>{ title }</h2>
            <h3> { subTitle } </h3>
        </Container>
    )
};

export default Section
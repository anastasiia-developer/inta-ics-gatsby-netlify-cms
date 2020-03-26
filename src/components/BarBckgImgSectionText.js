import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 3em;
    margin: 4em auto;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 55%;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        margin: 0 auto;
        background-size: 150%;
        background-position: 100% center;
        position: relative;
        transform: translateX(-50%);
    }  
`;

const BarBckgImgSectionText = ({image}) =>
    <Container
        style={{
            backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
        }}
    />;

export default BarBckgImgSectionText
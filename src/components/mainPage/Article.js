import React from "react";
import styled from "styled-components";
import Sections from "../delivery/Sections";

const Section = styled.article`
    margin-top: 5em;    
    background: #F0F5FD;
    padding: 3em 0;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        margin-top: 3em;    
        padding: 2em 1em;
    }
    section.wrapper{
        justify-content: space-between;
        background: #F0F5FD;
    }
    .gatsby-image-wrapper{
        width: 40%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 100%;
        }
    }
    .description{
        width: 55%;
        padding: 0;
        .text {
            padding: 0 2em 0 0;
        }
        @media(max-aspect-ratio: 3/3), (max-height: 500px){
            width: 100%;
            padding: 1em;
        }
    }
    h2{
        color: #005BE4;
        font-weight: 500;
        font-size: 1.55em;
        text-align: center;
    }
    h3{
        font-weight: 500;
        margin-bottom: 1em;
    }
    .wrapper{
        margin: 0 auto;
        width: 90%;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;
        }
    }
    ul{
      padding-left: 1.5em;
      list-style: initial;
      li{
        padding-left: .5em;
      }
    }
`;

const Article = ({seoSections}) =>{
    return(
        <Section>
            {seoSections.title &&
                <h2>{seoSections.title}</h2>
            }
            <Sections
                className='wrapper'
                sections={seoSections.sections}
            />
        </Section>
    );
}

export default Article
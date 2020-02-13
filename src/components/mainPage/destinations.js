import React from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import Flags from "../Flags";

const Section = styled.section`
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        padding: 0 1em;
    }
    .countries, .gatsby-image-wrapper{
        flex: 1;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            width: 100%;            
        }  
    }
    .countries{
        margin-left: -5em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            margin-left: 0;
            padding: 0;
        }
    }
    h2{
        font-weight: 700;
        padding: 2em 0 3em 7em;
        font-size: 1.7em;
        color: #212121;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            padding: 0;
        }    
    }
    .flags{
        flex-wrap: wrap;
        padding: 0 2em 2em 12em;
        @media(max-aspect-ratio: 3/3), (max-height: 500px){    
            padding: 2em 0 0 0;
        }    
        .row{
            align-items: center;
            margin: 0 2em 2em 0;
        }    
        p{
            font-weight: 700;
            color: #393939;
            font-size: .9em;
        }
        .gatsby-image-wrapper{
            width: 1.8em;
            height: auto;
            margin-right: 1em;
        }
    }
`;


const Destinations = ({ destinations }) => {
    const { destinationsImage } = destinations;
    return(
        <Section>
            <div className="row-to-column">
                <div className="column countries">
                    <h2>Международные направления</h2>
                    <Flags />
                </div>
                <PreviewCompatibleImage
                    imageInfo={{
                        image: destinationsImage,
                    }}
                />
            </div>
        </Section>
    )
};

export default Destinations
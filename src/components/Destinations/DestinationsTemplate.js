import React from "react";
import styled from "styled-components";
import FlagsTemplate from "./FlagTemplate";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Section = styled.section`
    margin: 2em 0;
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
        img{
            width: 1.8em;
            height: auto;
            margin-right: 1em;
        }
    }
`;


const DestinationsTemplate = ({ destinations }) => {
    if(destinations){
        return(
            <Section>
                <div className="row-to-column">
                    <div className="column countries">
                        <h2>Международные направления</h2>
                        <FlagsTemplate countries={destinations.countries}/>
                    </div>
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: destinations.image,
                        }}
                    />
                </div>
            </Section>
        )}
    else{
        return <div>..loading</div>
    }
};

export default DestinationsTemplate;

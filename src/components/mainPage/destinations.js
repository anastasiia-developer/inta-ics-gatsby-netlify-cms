import React from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Section = styled.section`
    .countries, .gatsby-image-wrapper{
        flex: 1;
    }
    .countries{
        margin-left: -5em;
    }
    h2{
        font-weight: 700;
        padding: 2em 0 3em 7em;
        font-size: 1.7em;
        color: #212121;
    }
    .flags{
        flex-wrap: wrap;
        padding: 0 2em 2em 12em;
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
    const { countries, destinationsImage } = destinations;
    return(
        <Section>
            <div className="row-to-column">
                <div className="column countries">
                    <h2>Международные направления</h2>
                    <div className="row flags">
                        {countries.map((item, index) => (
                            <div className="row" key={index}>
                                <PreviewCompatibleImage
                                    imageInfo={{
                                        image: item.flag
                                    }}
                                />
                                <p>{item.country}</p>
                            </div>
                        ))}
                    </div>
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
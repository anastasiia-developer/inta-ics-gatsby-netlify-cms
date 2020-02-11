import React from "react";
import styled from "styled-components";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Section = styled.section`
    background: #F0F5FD;
    padding: 4em 2.5em;
    margin-top: 2em;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        padding: 2em 1em;
    }
    h2{
        font-weight: 500;
        margin-bottom: 2em;
        text-align: center;
    }
    .row{
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .column{
        background: #fff;
        border: 1px solid #E9F2FF;
        border-radius: 7px;
        width: 19.5%;
        margin-bottom: 1.5%;
        align-items: center;
        padding: 2em 1em;
        min-width: 9em;
        &:hover{
            background: linear-gradient(111.85deg, #005BE4 -4.04%, #4900E4 103.57%);
            color: #fff;
            cursor: pointer;
        }
        h4{
            text-align: center;
            font-size: .9em;
            margin-top: 1em;
        }
        .gatsby-image-wrapper{
            width: 3em;
            height: auto;
            margin-bottom: 1em;
        }
    }
`;

const Cargo = ({cargo}) => {

    return(
        <Section>
            <h2>Международные грузоперевозки</h2>
            <div className="row">
                {cargo.map((item, index) => (
                    <div key={index} className="column">
                        <PreviewCompatibleImage
                            imageInfo={{
                                image: item.image
                            }}
                        />
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>
        </Section>
    )
};

export default Cargo;
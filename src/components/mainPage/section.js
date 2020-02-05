import React from 'react'
import styled from "styled-components"
import PreviewCompatibleImage from "../PreviewCompatibleImage";

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
    .wrapper{
        justify-content: space-around;
        margin-top: 3em;
        .block{
            flex: 1;
            max-width: 200px;
             .gatsby-image-wrapper{
                max-width: 80px;
                width: 80%;
                margin: 0 auto;
             }
            h4{
                font-weight: 700;
                color: #474747;
                margin-top: 2em;
            } 
        }
    }
`;

const Section = ({section}) => {
    const { title, subTitle, blocks} = section;
    return (
        <Container>
            <h2>{ title }</h2>
            <h3> { subTitle } </h3>
            <div className="wrapper row-to-column">
                {
                    blocks.map(block =>(
                        <div className="block" key={block.image.id}>
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: block.image,
                                }}
                            />
                            <h4>{block.title}</h4>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
};

export default Section
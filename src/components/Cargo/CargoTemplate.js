import React from "react";
import styled from "styled-components";
import HoverGradientInsideSvg from "../HoverGradientInsideSvg";
import HTMLContent from '../Content'

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
        a{
            border: 1px solid #E9F2FF;
            margin-bottom: 1.5%;
            padding: 2em 1em;
            justify-content: center;
            flex-basis: 18.5%;
            align-items: center;
            display: flex;
            flex-direction: column;
            svg{
                width: 3.5em;
            }
             
            @media(max-aspect-ratio: 3/3), (max-height: 500px){    
                margin-bottom: 1em;
            }
        }
    }
`;

const CargoTemplate = ({data}) => {
    const cargo = data.markdownRemark.frontmatter.cargo;

    return(
        <Section>
            <h2>{cargo.title}</h2>
            <div className="row">
                {cargo.list.map((item, index) =>
                    <HoverGradientInsideSvg
                        key={index}
                        title={item.title}
                        svg={<HTMLContent content={item.svg}/>}
                        link='cargo/container-transporting'
                    />
                )}
            </div>
        </Section>
    )
};
export default CargoTemplate;
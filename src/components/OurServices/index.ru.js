import {graphql, StaticQuery} from "gatsby";
import React from "react";
import CargoTemplate from "../Cargo/CargoTemplate";
import styled from "styled-components"


const Section = styled.section`
    padding: 0 2em 5em;
    text-align: center;
    @media(max-aspect-ratio: 3/3), (max-height: 500px){    
        padding: 0 1em 5em;
        align-items: stretch;
    }
    h2{
        padding: 3em 0;
        color: #2D2F33;
        font-weight: 500;
    }
    
`;

export default () => (
    <StaticQuery
        query={graphql`
            query OurServicesTemplateRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" },locale: { eq: "ru" } }) {
                    frontmatter {
                        ourServices {
                            title
                            list{
                                title
                                svg
                                link
                            }
                        }
                    }
                }
            }
    `}
        render={(data) =>
            <Section>
                <CargoTemplate data={data.markdownRemark.frontmatter.ourServices} />
            </Section>
        }
    />
)

import {graphql, StaticQuery} from "gatsby";
import React from "react";
import CargoTemplate from "./CargoTemplate";
import styled from "styled-components";

export const Section = styled.section`
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
                flex-basis: unset;
            }
        }
    }
`;


export default () => (
    <StaticQuery
        query={graphql`
            query CargoTemplate{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ua" } }) {
                    frontmatter {
                        locale
                        cargo{
                            title
                            list{
                                link
                                title
                                svg
                            }
                        }
                    }
                }
            }
    `}
        render={(data) =>
            <Section>
                <CargoTemplate locale={data.markdownRemark.frontmatter.locale} data={data.markdownRemark.frontmatter.cargo} />
            </Section>
            }
    />
)

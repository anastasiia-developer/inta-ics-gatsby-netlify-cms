import {graphql, StaticQuery} from "gatsby";
import React from "react";
import CargoTemplate from "../Cargo/CargoTemplate";
import { Section } from './index'

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

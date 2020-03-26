import {graphql, StaticQuery} from "gatsby";
import React from "react";
import CargoTemplate from "./CargoTemplate";
import {Section} from "./index";

export default () => (
    <StaticQuery
        query={graphql`
            query CargoTemplateRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ru" } }) {
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
                <CargoTemplate data={data.markdownRemark.frontmatter.cargo} />
            </Section>
        }
    />
)

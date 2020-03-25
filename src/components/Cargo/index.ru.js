import {graphql, StaticQuery} from "gatsby";
import React from "react";
import CargoTemplate from "./CargoTemplate";

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
                                title
                                svg
                            }
                        }
                    }
                }
            }
    `}
        render={(data) => <CargoTemplate data={data} />}
    />
)

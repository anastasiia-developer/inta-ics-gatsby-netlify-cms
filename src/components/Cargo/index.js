import {graphql, StaticQuery} from "gatsby";
import React from "react";
import CargoTemplate from "./CargoTemplate";

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
        render={(data) => <CargoTemplate data={data} />}
    />
)

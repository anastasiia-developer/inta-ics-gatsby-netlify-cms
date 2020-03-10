import React from "react";
import {graphql, StaticQuery} from "gatsby";
import StorageTemplate from "./StorageTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query StorageQuery{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" } }) {
                    frontmatter {
                        storage{
                          flag{
                              publicURL
                          }
                          country
                        }
                    }
                }
            }
    `}
        render={(data) => <StorageTemplate storage={data.markdownRemark.frontmatter.storage} />}
    />
)

import {graphql, StaticQuery} from "gatsby";
import React from "react";
import NewsRollTemplate from "./NewsRollTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query newsRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ru" } }) {
                    frontmatter {
                        locale
                        news{
                            btn
                            title
                        }
                    }   
                }
            }
        `}
        render={(data) =>
            <NewsRollTemplate
                data={data.markdownRemark.frontmatter}
            />
        }
    />
)

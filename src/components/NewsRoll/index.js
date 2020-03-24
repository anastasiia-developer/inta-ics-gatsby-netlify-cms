import {graphql, StaticQuery} from "gatsby";
import React from "react";
import NewsRollTemplate from "./NewsRollTemplate";


export default () => (
    <StaticQuery
        query={graphql`
            query newsUa{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ua" } }) {
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

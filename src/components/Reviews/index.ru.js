import React from "react";
import {graphql, StaticQuery} from "gatsby";
import ReviewsTemplate from "./ReviewsTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query ReviewsQueryRu{
                markdownRemark(frontmatter: { pageKey: { eq: "reviews" }, locale: {eq: "ru"} }) {
                    frontmatter {
                        title
                        reviews{
                          name
                          text
                          source{
                            name
                            url    
                          }                            
                        }
                    }
                }
            }
    `}
        render={(data) => <ReviewsTemplate data={data} />}
    />
)

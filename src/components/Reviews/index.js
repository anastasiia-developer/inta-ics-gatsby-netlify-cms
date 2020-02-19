import React from "react";
import {graphql, StaticQuery} from "gatsby";
import ReviewsTemplate from "./ReviewsTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query ReviewsQuery{
                markdownRemark(frontmatter: { templateKey: { eq: "components-common" } }) {
                    frontmatter {
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
        render={(data) => <ReviewsTemplate reviews={data.markdownRemark.frontmatter.reviews} />}
    />
)
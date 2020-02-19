import {graphql, StaticQuery} from "gatsby";
import React from "react";
import FlagsTemplate from "./FlagTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query FlagsCommon {
               markdownRemark(frontmatter: { templateKey: { eq: "components-common" } }) {
                  frontmatter {
                    destinations{
                      countries{
                        country
                        flag{
                          publicURL
                          name
                        }
                      }
                    }
                  }
               }
            }
        `}
        render={(data) => <FlagsTemplate countries={data.markdownRemark.frontmatter.destinations.countries} />}
    />
)

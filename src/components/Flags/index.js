import {graphql, StaticQuery} from "gatsby";
import React from "react";
import FlagsTemplate from "./FlagTemplate";

export default ({stateOptions, setOptions}) => (
    <StaticQuery
        query={graphql`
            query FlagsCommon {
               markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ua" } }) {
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
        render={(data) => <FlagsTemplate countries={data.markdownRemark.frontmatter.destinations.countries} stateOptions={stateOptions} setOptions={setOptions}/>}
    />
)

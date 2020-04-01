import {graphql, StaticQuery} from "gatsby";
import React from "react";
import FlagsTemplate from "./FlagTemplate";

export default ({stateOptions, setOptions}) => (
    <StaticQuery
        query={graphql`
            query FlagsCommon {
               markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ua" } }) {
                  frontmatter {
                    locale
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
        render={(data) => <FlagsTemplate locale={data.markdownRemark.frontmatter.locale} countries={data.markdownRemark.frontmatter.destinations.countries} stateOptions={stateOptions} setOptions={setOptions}/>}
    />
)

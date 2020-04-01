import {graphql, StaticQuery} from "gatsby";
import React from "react";
import FlagsTemplate from "./FlagTemplate";

export default ({stateOptions, setOptions}) => (
    <StaticQuery
        query={graphql`
            query FlagsCommonRu {
               markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ru" } }) {
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

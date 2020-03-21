import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CalculateHeader from "../delivery/CalculateHeader";


export default () => (
    <StaticQuery
        query={graphql`
            query CalculatorHeader{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" },  locale: { eq: "ua" } }) {
                    frontmatter {
                        calculateHeader {
                            title
                            description
                            from
                            to
                            toCountry
                            weight
                            phone
                            email
                            comment
                      }
                    }
                }
            }
    `}
        render={(data) => <CalculateHeader data={data.markdownRemark.frontmatter.calculateHeader} />}
    />
)

import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CalculateHeaderTemplate from "./CalculateHeaderTemplate";


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
                            btn
                        }
                    }
                }
            }
    `}
        render={(data) => <CalculateHeaderTemplate data={data.markdownRemark.frontmatter.calculateHeader} />}
    />
)

import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CalculateHeaderTemplate from "./CalculateHeaderTemplate";


export default () => (
    <StaticQuery
        query={graphql`
            query CalculatorHeaderRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" },  locale: { eq: "ru" } }) {
                    frontmatter {
                        locale
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

import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CalculatorTemplate from "./CalculatorTemplate";


export default () => (
    <StaticQuery
        query={graphql`
            query Calculator{
                markdownRemark(frontmatter: { templateKey: { eq: "components-common" } }) {
                    frontmatter {
                        calculator {
                          title
                          constituents {
                            title
                            category {
                              nameCategory
                              price
                              image{
                                childImageSharp {
                                  fluid(maxWidth: 65, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                          }
                        }
                    }
                }
            }
    `}
        render={(data) => <CalculatorTemplate data={data.markdownRemark.frontmatter.calculator} />}
    />
)

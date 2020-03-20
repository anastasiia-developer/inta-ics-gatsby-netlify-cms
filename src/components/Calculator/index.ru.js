import React from "react";
import {graphql, StaticQuery} from "gatsby";
import CalculatorTemplate from "./CalculatorTemplate";


export default () => (
    <StaticQuery
        query={graphql`
            query CalculatorRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ru" }}) {
                    frontmatter {
                        calculator {
                          title
                          constituents {
                            title
                            canChoose
                            name
                            category {
                              nameCategory
                              price
                              default
                              image{
                                childImageSharp {
                                  fluid(maxWidth: 65, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                          }
                          resultBlock{
                            title
                            btnText
                            resultText
                            note
                          }
                        }
                    }
                }
            }
    `}
        render={(data) => <CalculatorTemplate data={data.markdownRemark.frontmatter.calculator} />}
    />
)

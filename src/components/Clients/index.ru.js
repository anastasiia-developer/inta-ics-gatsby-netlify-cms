import {graphql, StaticQuery} from "gatsby";
import React from "react";
import ClientsTemplate from "./ClientsTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query ClientsTemplate{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale:{ eq: "ua" }  }) {
                    frontmatter {
                        clients{
                            title
                            list{
                                image{
                                  childImageSharp {
                                    fluid(maxWidth: 200, quality: 100) {
                                      ...GatsbyImageSharpFluid
                                    }
                                  }
                                }
                            }
                        }
                    }
                }
            }
    `}
        render={(data) => <ClientsTemplate clients={data.markdownRemark.frontmatter.clients} />}
    />
)

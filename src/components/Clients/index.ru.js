import {graphql, StaticQuery} from "gatsby";
import React from "react";
import ClientsTemplate from "./ClientsTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query ClientsTemplateRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale:{ eq: "ru" }  }) {
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

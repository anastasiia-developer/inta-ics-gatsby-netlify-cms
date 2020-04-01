import {graphql, StaticQuery} from "gatsby";
import React from "react";
import DestinationsTemplate from "./DestinationsTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query DestinationsCommonRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ru" }}) {
                    frontmatter {
                        locale
                        destinations {
                            title
                            image{
                                childImageSharp {
                                    fluid(maxWidth: 1000, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            countries{
                                country
                                link
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
        render={(data) => <DestinationsTemplate data={data} />}
    />
)

import React from "react";
import {graphql, StaticQuery} from "gatsby";
import StorageTemplate from "./StorageTemplate";

export default ({morePhotoIcon}) => (
    <StaticQuery
        query={graphql`
            query StorageQueryRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale:{ eq: "ru" } }) {
                    frontmatter {
                        warehouses{
                            title
                            list{
                                country
                                city
                                flag {
                                    publicURL
                                }
                                postIndex
                                address
                                phone
                                image{
                                    childImageSharp {
                                      fluid(maxWidth: 200, quality: 70) {
                                        ...GatsbyImageSharpFluid
                                      }
                                    }
                                }
                                images{
                                    image{
                                        childImageSharp {
                                          fluid(maxWidth: 800, quality: 70) {
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
        render={(data) => <StorageTemplate morePhotoIcon={morePhotoIcon} data={data} />}
    />
)

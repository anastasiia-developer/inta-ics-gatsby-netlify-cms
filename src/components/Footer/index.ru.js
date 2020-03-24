import {graphql, StaticQuery} from "gatsby";
import React from "react";
import FooterTemplate from "./FooterTemplate";


export default () => (
    <StaticQuery
        query={graphql`
            query footerRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ru" } }) {
                    frontmatter {
                        locale
                        footer{
                            description
                            storeName
                            navCollection{
                                nav{
                                    name
                                    link
                                }
                            }
                        }
                    }   
                }
            }
        `}
        render={(data) =>
            <FooterTemplate
                data={data.markdownRemark.frontmatter}
            />
        }
    />
)

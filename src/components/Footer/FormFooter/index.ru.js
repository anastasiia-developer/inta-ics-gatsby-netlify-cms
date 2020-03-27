import {graphql, StaticQuery} from "gatsby";
import React from "react";
import FormFooterTemplate from "./FormFooterTemplate";


export default () => (
    <StaticQuery
        query={graphql`
            query FormfooterRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: { eq: "ru" } }) {
                    frontmatter {
                        locale
                        footer{
                            formFooter{
                                title
                                subTitle
                                description
                                descriptionTwo
                                form{
                                    name
                                    phone
                                    comment
                                    btn
                                }
                            }                                
                        }
                    }   
                }
            }
        `}
        render={(data) =>
            <FormFooterTemplate
                data={data.markdownRemark.frontmatter}
            />
        }
    />
)

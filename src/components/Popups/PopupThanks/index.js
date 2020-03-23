import React from "react";
import {graphql, StaticQuery} from "gatsby";
import PopupThanksTemplate from "./PopupThanksTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query PopupThanks{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" },  locale:{eq: "ua"} }) {
                    frontmatter {
                        locale
                        popupThanks{
                          title
                          subTitle
                          description
                          bonus
                          bonusTitle
                          btn
                          btnLink
                          image{
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                          } 
                        }
                    }
                }
            }
    `}
        render={(data) => <PopupThanksTemplate data={data.markdownRemark.frontmatter.popupThanks} />}
    />
)

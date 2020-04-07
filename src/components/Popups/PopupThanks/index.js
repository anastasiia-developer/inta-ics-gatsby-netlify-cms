import React from "react";
import {graphql, StaticQuery} from "gatsby";
import PopupThanksTemplate from "./PopupThanksTemplate";

export default ({close}) => (
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
        render={(data) => <PopupThanksTemplate close={close} data={data.markdownRemark.frontmatter.popupThanks} locale={data.markdownRemark.frontmatter.locale} />}
    />
)

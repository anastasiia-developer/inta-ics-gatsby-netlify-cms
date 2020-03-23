import React from "react";
import {graphql, StaticQuery} from "gatsby";
import MainPopupTemplate from "./MainPopupTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query MainPopupRu{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" }, locale: {eq: "ru"} }) {
                    frontmatter {
                        locale
                        mainPopup{
                          title
                          description
                          subTitle
                          btn
                        }
                    }
                }
            }
    `}
        render={(data) => <MainPopupTemplate data={data.markdownRemark.frontmatter.mainPopup} />}
    />
)

import React from "react";
import {graphql, StaticQuery} from "gatsby";
import MainPopupTemplate from "./MainPopupTemplate";

export default () => (
    <StaticQuery
        query={graphql`
            query MainPopup{
                markdownRemark(frontmatter: { pageKey: { eq: "components-common" },  locale:{eq: "ua"} }) {
                    frontmatter {
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

import {graphql, StaticQuery} from "gatsby";
import React from "react";
import LinkMenu from "../LinkMenu";


export default ({setActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navCost{
                markdownRemark(frontmatter: { pageKey: { eq: "cost-page" }, locale: { eq: "ua" } }) {
                    frontmatter {
                        crumbLabel
                    }   
                }
            }
        `}
        render={(data) =>
            <LinkMenu
                label={data}
                link="/cost"
                setActiveMob={() => setActiveMob}
            />
        }
    />
)

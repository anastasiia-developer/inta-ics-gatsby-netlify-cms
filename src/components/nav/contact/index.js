import {graphql, StaticQuery} from "gatsby";
import React from "react";
import LinkMenu from "../LinkMenu";


export default ({setActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navContact{
                markdownRemark(frontmatter: { pageKey: { eq: "contact" }, locale: { eq: "ua" } }) {
                    frontmatter {
                        crumbLabel
                    }   
                }
            }
        `}
        render={(data) =>
            <LinkMenu
                label={data}
                link="/contact/"
                setActiveMob={() => setActiveMob}
            />
        }
    />
)

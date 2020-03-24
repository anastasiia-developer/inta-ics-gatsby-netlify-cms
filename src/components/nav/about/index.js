import {graphql, StaticQuery} from "gatsby";
import React from "react";
import LinkMenu from "../LinkMenu";


export default ({setActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navAbout{
                markdownRemark(frontmatter: { pageKey: { eq: "about" }, locale: { eq: "ua" } }) {
                    frontmatter {
                        crumbLabel
                    }   
                }
            }
        `}
        render={(data) =>
            <LinkMenu
                label={data}
                link="/about"
                setActiveMob={() => setActiveMob}
            />
        }
    />
)

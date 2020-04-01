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
                        name
                    }   
                }
            }
        `}
        render={(data) =>
            <LinkMenu
                label={data}
                link={`/${data.markdownRemark.frontmatter.name}/`}
                setActiveMob={() => setActiveMob}
            />
        }
    />
)

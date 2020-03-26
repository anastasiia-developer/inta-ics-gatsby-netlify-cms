import {graphql, StaticQuery} from "gatsby";
import React from "react";
import LinkMenu from "../LinkMenu";


export default ({setActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navAboutRu{
                markdownRemark(frontmatter: { pageKey: { eq: "about" }, locale: { eq: "ru" } }) {
                    frontmatter {
                        crumbLabel
                    }   
                }
            }
        `}
        render={(data) =>
            <LinkMenu
                label={data}
                link="/ru/about/"
                setActiveMob={() => setActiveMob}
            />
        }
    />
)

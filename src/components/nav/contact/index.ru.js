import {graphql, StaticQuery} from "gatsby";
import React from "react";
import LinkMenu from "../LinkMenu";


export default ({setActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navContactRu{
                markdownRemark(frontmatter: { pageKey: { eq: "contact" }, locale: { eq: "ru" } }) {
                    frontmatter {
                        crumbLabel
                    }   
                }
            }
        `}
        render={(data) =>
            <LinkMenu
                label={data}
                link="/ru/contact/"
                setActiveMob={() => setActiveMob}
            />
        }
    />
)

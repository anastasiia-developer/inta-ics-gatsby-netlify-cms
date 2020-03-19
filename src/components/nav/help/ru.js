import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from '../SubMenu'

export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navHelpRu{
                 allMarkdownRemark(filter: {
                    fields: {
                        slug: {regex: "/help/"}
                    }, 
                    frontmatter: {
                        locale: {eq: "ru"}
                    }
                 }) {
                    nodes {
                        frontmatter {
                            crumbLabel
                            name
                        }
                     }
                 }
            }
    `}
        render={(data) =>
            <SubMenu
                parentName="Помощь"
                list={data.allMarkdownRemark.nodes}
                startPath="/ru/help/"
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
            />
        }
    />
)
import {graphql, StaticQuery} from "gatsby";
import React from "react";
import SubMenu from '../SubMenu'

export default ({setActiveMob, isActiveMob}) => (
    <StaticQuery
        query={graphql`
            query navHelpUa{
                 allMarkdownRemark(filter: {
                    fields: {
                        slug: {regex: "/help/"}
                    }, 
                    frontmatter: {
                        locale: {eq: "ua"}
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
                startPath="/help/"
                setActiveMob={() => setActiveMob}
                isActiveMob={isActiveMob}
            />
        }
    />
)
